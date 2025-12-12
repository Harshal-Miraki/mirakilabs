"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import {
    Activity, AlertTriangle, TrendingUp, Settings, BarChart3, Cpu,
    CheckCircle2, RefreshCw, Search, Power, Bell, X, ChevronRight,
    Zap, Thermometer, Gauge, Clock, Filter, MoreHorizontal,
    Play, Pause, RotateCcw, Download, PieChart, LineChart as LineChartIcon,
    FileText, Calendar, Share2, Printer
} from "lucide-react";

// Types
interface Device {
    id: number;
    name: string;
    status: "active" | "warning" | "offline";
    uptime: string;
    lastSync: string;
    temperature: number;
    power: number;
    efficiency: number;
}

interface Notification {
    id: number;
    type: "alert" | "info" | "success";
    message: string;
    time: string;
    read: boolean;
}

// Initial device data
const initialDevices: Device[] = [
    { id: 1, name: "Production Line A", status: "active", uptime: "99.8%", lastSync: "2s ago", temperature: 42, power: 85, efficiency: 94 },
    { id: 2, name: "Assembly Unit B", status: "active", uptime: "99.5%", lastSync: "5s ago", temperature: 38, power: 72, efficiency: 89 },
    { id: 3, name: "Quality Control C", status: "active", uptime: "98.9%", lastSync: "3s ago", temperature: 45, power: 90, efficiency: 96 },
    { id: 4, name: "Packaging System D", status: "warning", uptime: "95.2%", lastSync: "12s ago", temperature: 58, power: 95, efficiency: 78 },
    { id: 5, name: "Logistics Hub E", status: "active", uptime: "99.7%", lastSync: "1s ago", temperature: 35, power: 65, efficiency: 92 },
];

const initialNotifications: Notification[] = [
    { id: 1, type: "alert", message: "Packaging System D temperature high", time: "2m ago", read: false },
    { id: 2, type: "info", message: "Scheduled maintenance in 2 hours", time: "15m ago", read: false },
    { id: 3, type: "success", message: "Production Line A optimization complete", time: "1h ago", read: true },
];

const tabs = [
    { id: "devices", label: "Device Management", icon: Cpu },
    { id: "analytics", label: "Analytics", icon: BarChart3 },
    { id: "reports", label: "Reports", icon: FileText },
    { id: "settings", label: "Settings", icon: Settings },
];

// Simple SVG Line Chart
function LineChart({ data, color = "#0052cc" }: { data: number[]; color?: string }) {
    const max = Math.max(...data, 100);
    const min = Math.min(...data, 0);
    const range = max - min;
    const points = data.map((d, i) => {
        const x = (i / (data.length - 1)) * 100;
        const y = 100 - ((d - min) / range) * 100;
        return `${x},${y}`;
    }).join(" ");

    return (
        <div className="relative h-full w-full">
            <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible" preserveAspectRatio="none">
                {/* Grid lines */}
                {[0, 25, 50, 75, 100].map(y => (
                    <line key={y} x1="0" y1={y} x2="100" y2={y} stroke="currentColor" strokeOpacity="0.1" strokeWidth="0.5" vectorEffect="non-scaling-stroke" />
                ))}
                {/* Line */}
                <polyline
                    fill="none"
                    stroke={color}
                    strokeWidth="2"
                    points={points}
                    vectorEffect="non-scaling-stroke"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                {/* Area under line */}
                <polygon
                    fill={color}
                    fillOpacity="0.1"
                    points={`0,100 ${points} 100,100`}
                    vectorEffect="non-scaling-stroke"
                />
            </svg>
        </div>
    );
}

// Simple SVG Donut Chart
function DonutChart({ data }: { data: { label: string; value: number; color: string }[] }) {
    const total = data.reduce((acc, curr) => acc + curr.value, 0);
    let currentAngle = 0;

    return (
        <div className="relative w-32 h-32 mx-auto">
            <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                {data.map((item, i) => {
                    const angle = (item.value / total) * 360;
                    const radius = 40;
                    const circumference = 2 * Math.PI * radius;
                    const strokeDasharray = `${(angle / 360) * circumference} ${circumference}`;
                    const strokeDashoffset = -((currentAngle / 360) * circumference);
                    currentAngle += angle;

                    return (
                        <circle
                            key={i}
                            cx="50"
                            cy="50"
                            r={radius}
                            fill="transparent"
                            stroke={item.color}
                            strokeWidth="12"
                            strokeDasharray={strokeDasharray}
                            strokeDashoffset={strokeDashoffset}
                            className="transition-all duration-500"
                        />
                    );
                })}
            </svg>
            <div className="absolute inset-0 flex items-center justify-center flex-col">
                <span className="text-xl font-bold">{total}</span>
                <span className="text-[10px] text-muted-foreground uppercase">Total</span>
            </div>
        </div>
    );
}

// Mini sparkline chart component
function SparklineChart({ data, color }: { data: number[]; color: string }) {
    const max = Math.max(...data);
    const min = Math.min(...data);
    const range = max - min || 1;

    return (
        <div className="flex items-end gap-0.5 h-8">
            {data.map((value, i) => (
                <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${((value - min) / range) * 100}%` }}
                    transition={{ delay: i * 0.05, duration: 0.3 }}
                    className={`w-1 rounded-full ${color} min-h-[4px]`}
                />
            ))}
        </div>
    );
}

// Live updating number component
function LiveNumber({ baseValue, variance = 2, suffix = "" }: { baseValue: number; variance?: number; suffix?: string }) {
    const [value, setValue] = useState(baseValue);

    useEffect(() => {
        const interval = setInterval(() => {
            const change = (Math.random() - 0.5) * variance;
            setValue(prev => Math.max(0, Math.min(100, prev + change)));
        }, 2000);
        return () => clearInterval(interval);
    }, [baseValue, variance]);

    return <span>{Math.round(value)}{suffix}</span>;
}

// Progress bar component
function ProgressBar({ value, color, animated = false }: { value: number; color: string; animated?: boolean }) {
    return (
        <div className="h-1.5 bg-muted rounded-full overflow-hidden">
            <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${value}%` }}
                transition={{ duration: 0.5 }}
                className={`h-full ${color} ${animated ? 'animate-pulse' : ''}`}
            />
        </div>
    );
}

export function DashboardMockup() {
    const [activeTab, setActiveTab] = useState("devices");
    const [selectedDevice, setSelectedDevice] = useState<number | null>(null);
    const [isRefreshing, setIsRefreshing] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [devices, setDevices] = useState<Device[]>(initialDevices);
    const [notifications, setNotifications] = useState<Notification[]>(initialNotifications);
    const [showNotifications, setShowNotifications] = useState(false);
    const [statusFilter, setStatusFilter] = useState<"all" | "active" | "warning" | "offline">("all");
    const [isSimulating, setIsSimulating] = useState(true);
    const [chartData, setChartData] = useState<number[]>([65, 72, 68, 74, 70, 76, 73, 78, 75, 80, 77, 82]);
    const [statsKey, setStatsKey] = useState(0);

    // Settings state
    const [settings, setSettings] = useState({
        autoRefresh: true,
        notifications: true,
        darkMode: true,
        refreshInterval: 30,
    });

    // Simulate live data updates
    useEffect(() => {
        if (!isSimulating) return;

        const interval = setInterval(() => {
            // Update device sync times
            setDevices(prev => prev.map(device => ({
                ...device,
                lastSync: `${Math.floor(Math.random() * 10) + 1}s ago`,
                temperature: device.temperature + (Math.random() - 0.5) * 2,
                power: Math.max(0, Math.min(100, device.power + (Math.random() - 0.5) * 5)),
            })));

            // Update chart data
            setChartData(prev => {
                const newData = [...prev.slice(1), prev[prev.length - 1] + (Math.random() - 0.5) * 8];
                return newData.map(v => Math.max(50, Math.min(100, v)));
            });
        }, 3000);

        return () => clearInterval(interval);
    }, [isSimulating]);

    const handleRefresh = useCallback(() => {
        setIsRefreshing(true);
        setStatsKey(prev => prev + 1);
        setTimeout(() => {
            setDevices(initialDevices.map(d => ({
                ...d,
                lastSync: "just now",
            })));
            setIsRefreshing(false);
        }, 1000);
    }, []);

    const toggleDeviceStatus = useCallback((deviceId: number) => {
        setDevices(prev => prev.map(device => {
            if (device.id === deviceId) {
                const newStatus = device.status === "active" ? "offline" : "active";
                return { ...device, status: newStatus };
            }
            return device;
        }));
    }, []);

    const dismissNotification = useCallback((notificationId: number) => {
        setNotifications(prev => prev.filter(n => n.id !== notificationId));
    }, []);

    const markAllAsRead = useCallback(() => {
        setNotifications(prev => prev.map(n => ({ ...n, read: true })));
    }, []);

    // Filter devices
    const filteredDevices = devices.filter(device => {
        const matchesSearch = device.name.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesStatus = statusFilter === "all" || device.status === statusFilter;
        return matchesSearch && matchesStatus;
    });

    const unreadCount = notifications.filter(n => !n.read).length;
    const activeCount = devices.filter(d => d.status === "active").length;
    const warningCount = devices.filter(d => d.status === "warning").length;
    const avgEfficiency = Math.round(devices.reduce((acc, d) => acc + d.efficiency, 0) / devices.length);

    return (
        <section className="py-16 sm:py-24 overflow-hidden">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                        See It In Action
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Experience the power of our industrial AI platform with real-time monitoring and control
                    </p>
                </motion.div>

                {/* Dashboard Mockup Container */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="max-w-5xl mx-auto"
                >
                    {/* Dashboard Window */}
                    <div className="rounded-2xl border bg-card shadow-2xl overflow-hidden">
                        {/* Window Header */}
                        <div className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 sm:py-3 bg-muted/50 border-b">
                            <div className="flex gap-1.5 sm:gap-2 shrink-0">
                                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500 cursor-pointer hover:opacity-80" />
                                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500 cursor-pointer hover:opacity-80" />
                                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500 cursor-pointer hover:opacity-80" />
                            </div>
                            <div className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1 rounded-md bg-background/50 min-w-0">
                                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded bg-brand-green flex items-center justify-center text-white text-[10px] sm:text-xs font-bold shrink-0">
                                    C
                                </div>
                                <span className="text-xs sm:text-sm font-semibold truncate">Catylist Dashboard</span>
                            </div>

                            {/* Header Actions */}
                            <div className="ml-auto flex items-center gap-1 sm:gap-2 shrink-0">
                                {/* Simulation Toggle */}
                                <button
                                    onClick={() => setIsSimulating(!isSimulating)}
                                    className={`p-1.5 sm:p-2 rounded-lg transition-colors ${isSimulating ? 'bg-green-500/10 text-green-500' : 'bg-muted text-muted-foreground'}`}
                                    title={isSimulating ? "Pause simulation" : "Start simulation"}
                                >
                                    {isSimulating ? <Pause className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> : <Play className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
                                </button>

                                {/* Notifications */}
                                <div className="relative">
                                    <button
                                        onClick={() => setShowNotifications(!showNotifications)}
                                        className={`p-1.5 sm:p-2 rounded-lg transition-colors ${showNotifications ? 'bg-primary text-primary-foreground' : 'hover:bg-muted'}`}
                                    >
                                        <Bell className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                                        {unreadCount > 0 && (
                                            <span className="absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 w-3.5 h-3.5 sm:w-4 sm:h-4 bg-red-500 text-white text-[10px] sm:text-xs rounded-full flex items-center justify-center">
                                                {unreadCount}
                                            </span>
                                        )}
                                    </button>

                                    {/* Notifications Dropdown */}
                                    <AnimatePresence>
                                        {showNotifications && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                                className="absolute right-0 top-full mt-2 w-80 bg-card border rounded-xl shadow-xl z-50 overflow-hidden"
                                            >
                                                <div className="flex items-center justify-between p-3 border-b bg-muted/30">
                                                    <span className="font-semibold text-sm">Notifications</span>
                                                    <button
                                                        onClick={markAllAsRead}
                                                        className="text-xs text-primary hover:underline"
                                                    >
                                                        Mark all as read
                                                    </button>
                                                </div>
                                                <div className="max-h-64 overflow-y-auto">
                                                    {notifications.length === 0 ? (
                                                        <div className="p-4 text-center text-muted-foreground text-sm">
                                                            No notifications
                                                        </div>
                                                    ) : (
                                                        notifications.map(notification => (
                                                            <motion.div
                                                                key={notification.id}
                                                                initial={{ opacity: 0, x: -10 }}
                                                                animate={{ opacity: 1, x: 0 }}
                                                                exit={{ opacity: 0, x: 10 }}
                                                                className={`flex items-start gap-3 p-3 border-b hover:bg-muted/30 transition-colors ${!notification.read ? 'bg-primary/5' : ''}`}
                                                            >
                                                                <div className={`mt-0.5 w-2 h-2 rounded-full ${notification.type === 'alert' ? 'bg-orange-500' :
                                                                    notification.type === 'success' ? 'bg-green-500' : 'bg-blue-500'
                                                                    }`} />
                                                                <div className="flex-1 min-w-0">
                                                                    <p className="text-sm truncate">{notification.message}</p>
                                                                    <p className="text-xs text-muted-foreground">{notification.time}</p>
                                                                </div>
                                                                <button
                                                                    onClick={() => dismissNotification(notification.id)}
                                                                    className="p-1 hover:bg-muted rounded"
                                                                >
                                                                    <X className="w-3 h-3" />
                                                                </button>
                                                            </motion.div>
                                                        ))
                                                    )}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>

                                <button
                                    onClick={handleRefresh}
                                    className="p-1.5 sm:p-2 rounded-lg hover:bg-muted transition-colors"
                                >
                                    <RefreshCw className={`w-3.5 h-3.5 sm:w-4 sm:h-4 text-muted-foreground ${isRefreshing ? 'animate-spin' : ''}`} />
                                </button>
                            </div>
                        </div>

                        {/* Dashboard Content */}
                        <div className="p-4 sm:p-6">
                            {/* Tab Navigation */}
                            <div className="flex flex-wrap gap-2 mb-6">
                                {tabs.map((tab) => {
                                    const Icon = tab.icon;
                                    return (
                                        <button
                                            key={tab.id}
                                            onClick={() => setActiveTab(tab.id)}
                                            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${activeTab === tab.id
                                                ? "bg-primary text-primary-foreground shadow-md"
                                                : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground"
                                                }`}
                                        >
                                            <Icon className="w-4 h-4" />
                                            <span className="hidden sm:inline">{tab.label}</span>
                                        </button>
                                    );
                                })}
                            </div>

                            {/* Stats Cards with Live Updates */}
                            <div key={statsKey} className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-6">
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    className="p-4 rounded-xl bg-green-500/10 border border-green-500/20 cursor-pointer"
                                    onClick={() => setStatusFilter(statusFilter === "active" ? "all" : "active")}
                                >
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                                            <Activity className="w-4 h-4" />
                                            <span className="text-sm font-medium">Active</span>
                                        </div>
                                        <SparklineChart data={[18, 20, 22, 21, 23, 24, activeCount]} color="bg-green-500" />
                                    </div>
                                    <div className="text-3xl sm:text-4xl font-bold text-green-600 dark:text-green-400">
                                        {activeCount}
                                    </div>
                                    <div className="text-xs text-green-600/70 dark:text-green-400/70 mt-1">
                                        <span className="inline-flex items-center gap-1"><TrendingUp className="w-3 h-3" /> +5%</span>
                                    </div>
                                </motion.div>

                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    className="p-4 rounded-xl bg-orange-500/10 border border-orange-500/20 cursor-pointer"
                                    onClick={() => setStatusFilter(statusFilter === "warning" ? "all" : "warning")}
                                >
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="flex items-center gap-2 text-orange-600 dark:text-orange-400">
                                            <AlertTriangle className="w-4 h-4" />
                                            <span className="text-sm font-medium">Alerts</span>
                                        </div>
                                    </div>
                                    <div className="text-3xl sm:text-4xl font-bold text-orange-600 dark:text-orange-400">
                                        {warningCount}
                                    </div>
                                    <div className="text-xs text-orange-600/70 dark:text-orange-400/70 mt-1">
                                        <span className="inline-flex items-center gap-1"><TrendingUp className="w-3 h-3 rotate-180" /> -12%</span>
                                    </div>
                                </motion.div>

                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20"
                                >
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
                                            <Gauge className="w-4 h-4" />
                                            <span className="text-sm font-medium">Efficiency</span>
                                        </div>
                                    </div>
                                    <div className="text-3xl sm:text-4xl font-bold text-blue-600 dark:text-blue-400">
                                        <LiveNumber baseValue={avgEfficiency} variance={1} suffix="%" />
                                    </div>
                                    <ProgressBar value={avgEfficiency} color="bg-blue-500" animated />
                                </motion.div>

                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    className="p-4 rounded-xl bg-purple-500/10 border border-purple-500/20"
                                >
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400">
                                            <Zap className="w-4 h-4" />
                                            <span className="text-sm font-medium">Power</span>
                                        </div>
                                    </div>
                                    <div className="text-3xl sm:text-4xl font-bold text-purple-600 dark:text-purple-400">
                                        <LiveNumber baseValue={78} variance={3} suffix="kW" />
                                    </div>
                                    <ProgressBar value={78} color="bg-purple-500" />
                                </motion.div>
                            </div>

                            {/* Content Area */}
                            <AnimatePresence mode="wait">
                                {activeTab === "devices" && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="space-y-4"
                                    >
                                        {/* Search and Filter Bar */}
                                        <div className="flex flex-col sm:flex-row gap-3">
                                            <div className="relative flex-1">
                                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                                <input
                                                    type="text"
                                                    placeholder="Search devices..."
                                                    value={searchQuery}
                                                    onChange={(e) => setSearchQuery(e.target.value)}
                                                    className="w-full pl-10 pr-4 py-2 rounded-lg bg-muted/50 border border-transparent focus:border-primary focus:outline-none text-sm"
                                                />
                                            </div>
                                            <div className="flex gap-2">
                                                <select
                                                    value={statusFilter}
                                                    onChange={(e) => setStatusFilter(e.target.value as typeof statusFilter)}
                                                    className="px-3 py-2 rounded-lg bg-muted/50 border border-transparent focus:border-primary focus:outline-none text-sm"
                                                >
                                                    <option value="all">All Status</option>
                                                    <option value="active">Active</option>
                                                    <option value="warning">Warning</option>
                                                    <option value="offline">Offline</option>
                                                </select>
                                                <button className="p-2 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                                                    <Filter className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </div>

                                        {/* Device List */}
                                        <div className="space-y-2">
                                            {filteredDevices.length === 0 ? (
                                                <div className="text-center py-8 text-muted-foreground">
                                                    No devices found
                                                </div>
                                            ) : (
                                                filteredDevices.map((device, index) => (
                                                    <motion.div
                                                        key={device.id}
                                                        initial={{ opacity: 0, x: -20 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: index * 0.05 }}
                                                        className={`rounded-xl border overflow-hidden transition-all duration-200 ${selectedDevice === device.id
                                                            ? "bg-primary/5 border-primary/30"
                                                            : "bg-muted/30 border-transparent hover:bg-muted/50"
                                                            }`}
                                                    >
                                                        {/* Device Row */}
                                                        <div
                                                            onClick={() => setSelectedDevice(selectedDevice === device.id ? null : device.id)}
                                                            className="flex items-center justify-between p-3 sm:p-4 cursor-pointer"
                                                        >
                                                            <div className="flex items-center gap-3">
                                                                <div className={`w-2.5 h-2.5 rounded-full ${device.status === "active" ? "bg-green-500 animate-pulse" :
                                                                    device.status === "warning" ? "bg-orange-500 animate-pulse" :
                                                                        "bg-gray-400"
                                                                    }`} />
                                                                <div>
                                                                    <div className="font-medium text-sm sm:text-base">{device.name}</div>
                                                                    <div className="text-xs text-muted-foreground flex items-center gap-1">
                                                                        <Clock className="w-3 h-3" /> Last sync: {device.lastSync}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="flex items-center gap-3 sm:gap-4">
                                                                <div className="hidden sm:flex items-center gap-4">
                                                                    <div className="text-right">
                                                                        <div className="text-xs text-muted-foreground flex items-center gap-1">
                                                                            <Thermometer className="w-3 h-3" /> Temp
                                                                        </div>
                                                                        <div className={`text-sm font-medium ${device.temperature > 50 ? 'text-orange-500' : ''}`}>
                                                                            {Math.round(device.temperature)}°C
                                                                        </div>
                                                                    </div>
                                                                    <div className="text-right">
                                                                        <div className="text-xs text-muted-foreground">Uptime</div>
                                                                        <div className="text-sm font-medium">{device.uptime}</div>
                                                                    </div>
                                                                </div>
                                                                <span className={`px-2 py-1 rounded-full text-xs font-medium ${device.status === "active" ? "bg-green-500/10 text-green-600 dark:text-green-400" :
                                                                    device.status === "warning" ? "bg-orange-500/10 text-orange-600 dark:text-orange-400" :
                                                                        "bg-gray-500/10 text-gray-600 dark:text-gray-400"
                                                                    }`}>
                                                                    {device.status.charAt(0).toUpperCase() + device.status.slice(1)}
                                                                </span>
                                                                <ChevronRight className={`w-4 h-4 transition-transform ${selectedDevice === device.id ? 'rotate-90' : ''}`} />
                                                            </div>
                                                        </div>

                                                        {/* Expanded Device Details */}
                                                        <AnimatePresence>
                                                            {selectedDevice === device.id && (
                                                                <motion.div
                                                                    initial={{ height: 0, opacity: 0 }}
                                                                    animate={{ height: "auto", opacity: 1 }}
                                                                    exit={{ height: 0, opacity: 0 }}
                                                                    className="border-t"
                                                                >
                                                                    <div className="p-4 space-y-4">
                                                                        {/* Device Metrics */}
                                                                        <div className="grid grid-cols-3 gap-4">
                                                                            <div className="text-center p-3 rounded-lg bg-muted/50">
                                                                                <Thermometer className="w-5 h-5 mx-auto mb-1 text-orange-500" />
                                                                                <div className="text-lg font-bold">{Math.round(device.temperature)}°C</div>
                                                                                <div className="text-xs text-muted-foreground">Temperature</div>
                                                                            </div>
                                                                            <div className="text-center p-3 rounded-lg bg-muted/50">
                                                                                <Zap className="w-5 h-5 mx-auto mb-1 text-yellow-500" />
                                                                                <div className="text-lg font-bold">{Math.round(device.power)}%</div>
                                                                                <div className="text-xs text-muted-foreground">Power Load</div>
                                                                            </div>
                                                                            <div className="text-center p-3 rounded-lg bg-muted/50">
                                                                                <Gauge className="w-5 h-5 mx-auto mb-1 text-blue-500" />
                                                                                <div className="text-lg font-bold">{device.efficiency}%</div>
                                                                                <div className="text-xs text-muted-foreground">Efficiency</div>
                                                                            </div>
                                                                        </div>

                                                                        {/* Device Actions */}
                                                                        <div className="flex gap-2 pt-2">
                                                                            <button
                                                                                onClick={(e) => { e.stopPropagation(); toggleDeviceStatus(device.id); }}
                                                                                className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${device.status === "active"
                                                                                    ? "bg-red-500/10 text-red-600 hover:bg-red-500/20"
                                                                                    : "bg-green-500/10 text-green-600 hover:bg-green-500/20"
                                                                                    }`}
                                                                            >
                                                                                <Power className="w-4 h-4" />
                                                                                {device.status === "active" ? "Stop" : "Start"}
                                                                            </button>
                                                                            <button
                                                                                onClick={(e) => e.stopPropagation()}
                                                                                className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-muted text-sm font-medium hover:bg-muted/80 transition-colors"
                                                                            >
                                                                                <RotateCcw className="w-4 h-4" />
                                                                                Restart
                                                                            </button>
                                                                            <button
                                                                                onClick={(e) => e.stopPropagation()}
                                                                                className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
                                                                            >
                                                                                <MoreHorizontal className="w-4 h-4" />
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </motion.div>
                                                            )}
                                                        </AnimatePresence>
                                                    </motion.div>
                                                ))
                                            )}
                                        </div>
                                    </motion.div>
                                )}

                                {activeTab === "analytics" && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="space-y-6"
                                    >
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            {/* Production Efficiency - Bar Chart */}
                                            <div className="p-5 rounded-xl bg-card border shadow-sm">
                                                <div className="flex items-center justify-between mb-6">
                                                    <div>
                                                        <h4 className="font-semibold text-lg">Efficiency Trends</h4>
                                                        <p className="text-xs text-muted-foreground">Daily production efficiency</p>
                                                    </div>
                                                    <BarChart3 className="w-5 h-5 text-muted-foreground" />
                                                </div>
                                                <div className="h-48 flex items-end justify-between gap-2">
                                                    {chartData.map((value, i) => (
                                                        <motion.div
                                                            key={i}
                                                            className="flex-1 bg-linear-to-t from-primary/60 to-primary rounded-t relative group"
                                                            initial={{ height: 0 }}
                                                            animate={{ height: `${value}%` }}
                                                            transition={{ duration: 0.5, delay: i * 0.05 }}
                                                        >
                                                            <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                                                                <div className="bg-popover text-popover-foreground text-xs px-2 py-1 rounded shadow-lg border">
                                                                    {Math.round(value)}%
                                                                </div>
                                                            </div>
                                                        </motion.div>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Power Consumption - Line Chart */}
                                            <div className="p-5 rounded-xl bg-card border shadow-sm">
                                                <div className="flex items-center justify-between mb-6">
                                                    <div>
                                                        <h4 className="font-semibold text-lg">Power Usage</h4>
                                                        <p className="text-xs text-muted-foreground">Real-time kW consumption</p>
                                                    </div>
                                                    <Zap className="w-5 h-5 text-orange-500" />
                                                </div>
                                                <div className="h-48">
                                                    <LineChart data={chartData.map(v => v * 1.2)} color="#f97316" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                            {/* Device Distribution - Donut Chart */}
                                            <div className="p-5 rounded-xl bg-card border shadow-sm md:col-span-1">
                                                <h4 className="font-semibold mb-6">Device Status</h4>
                                                <DonutChart data={[
                                                    { label: "Active", value: 65, color: "#22c55e" },
                                                    { label: "Warning", value: 25, color: "#f97316" },
                                                    { label: "Offline", value: 10, color: "#ef4444" },
                                                ]} />
                                                <div className="mt-6 space-y-2">
                                                    {[
                                                        { label: "Active", value: "65%", color: "bg-green-500" },
                                                        { label: "Warning", value: "25%", color: "bg-orange-500" },
                                                        { label: "Offline", value: "10%", color: "bg-red-500" },
                                                    ].map((item, i) => (
                                                        <div key={i} className="flex items-center justify-between text-sm">
                                                            <div className="flex items-center gap-2">
                                                                <div className={`w-2 h-2 rounded-full ${item.color}`} />
                                                                <span className="text-muted-foreground">{item.label}</span>
                                                            </div>
                                                            <span className="font-medium">{item.value}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Quick Stats Grid */}
                                            <div className="md:col-span-2 grid grid-cols-2 gap-4">
                                                <div className="p-4 rounded-xl bg-primary/5 border border-primary/10 flex flex-col justify-between">
                                                    <div className="flex items-start justify-between">
                                                        <div>
                                                            <div className="text-sm text-muted-foreground">Total Uptime</div>
                                                            <div className="text-2xl font-bold text-primary">99.9%</div>
                                                        </div>
                                                        <Activity className="w-5 h-5 text-primary/60" />
                                                    </div>
                                                    <div className="text-xs text-muted-foreground mt-2">
                                                        <span className="text-green-500 font-medium">+0.2%</span> from last month
                                                    </div>
                                                </div>
                                                <div className="p-4 rounded-xl bg-blue-500/5 border border-blue-500/10 flex flex-col justify-between">
                                                    <div className="flex items-start justify-between">
                                                        <div>
                                                            <div className="text-sm text-muted-foreground">Energy Saved</div>
                                                            <div className="text-2xl font-bold text-blue-600">4.2 MWh</div>
                                                        </div>
                                                        <Zap className="w-5 h-5 text-blue-500/60" />
                                                    </div>
                                                    <div className="text-xs text-muted-foreground mt-2">
                                                        <span className="text-green-500 font-medium">+12%</span> efficiency rating
                                                    </div>
                                                </div>
                                                <div className="p-4 rounded-xl bg-purple-500/5 border border-purple-500/10 flex flex-col justify-between">
                                                    <div className="flex items-start justify-between">
                                                        <div>
                                                            <div className="text-sm text-muted-foreground">Total Units</div>
                                                            <div className="text-2xl font-bold text-purple-600">
                                                                <LiveNumber baseValue={14250} variance={10} />
                                                            </div>
                                                        </div>
                                                        <Cpu className="w-5 h-5 text-purple-500/60" />
                                                    </div>
                                                    <div className="text-xs text-muted-foreground mt-2">
                                                        <span className="text-green-500 font-medium">On track</span> for daily target
                                                    </div>
                                                </div>
                                                <div className="p-4 rounded-xl bg-orange-500/5 border border-orange-500/10 flex flex-col justify-between">
                                                    <div className="flex items-start justify-between">
                                                        <div>
                                                            <div className="text-sm text-muted-foreground">Alerts Resolved</div>
                                                            <div className="text-2xl font-bold text-orange-600">12</div>
                                                        </div>
                                                        <CheckCircle2 className="w-5 h-5 text-orange-500/60" />
                                                    </div>
                                                    <div className="text-xs text-muted-foreground mt-2">
                                                        Avg resolution time: <span className="font-medium">14m</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}

                                {activeTab === "reports" && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="space-y-4"
                                    >
                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                            {[
                                                { title: "Monthly Production Report", size: "2.4 MB", type: "PDF", date: "Oct 2024" },
                                                { title: "Energy Consumption Analysis", size: "1.8 MB", type: "XLSX", date: "Oct 2024" },
                                                { title: "System Health Diagnostics", size: "4.2 MB", type: "PDF", date: "Sep 2024" },
                                                { title: "Maintenance Schedule", size: "1.1 MB", type: "PDF", date: "Q4 2024" },
                                                { title: "Incident Logs", size: "856 KB", type: "CSV", date: "Last 30 Days" },
                                                { title: "Efficiency Audit", size: "3.5 MB", type: "PDF", date: "Q3 2024" },
                                            ].map((report, i) => (
                                                <div key={i} className="group p-4 rounded-xl bg-card border hover:border-primary/50 transition-colors cursor-pointer relative overflow-hidden">
                                                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors" />
                                                    <div className="flex items-start justify-between relative z-10">
                                                        <div className="p-2 rounded-lg bg-muted group-hover:bg-white transition-colors">
                                                            <FileText className="w-6 h-6 text-primary" />
                                                        </div>
                                                        <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                                            <button className="p-1.5 rounded-md hover:bg-muted text-muted-foreground hover:text-foreground">
                                                                <Share2 className="w-4 h-4" />
                                                            </button>
                                                            <button className="p-1.5 rounded-md hover:bg-muted text-muted-foreground hover:text-foreground">
                                                                <Printer className="w-4 h-4" />
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className="mt-4 relative z-10">
                                                        <h4 className="font-medium truncate" title={report.title}>{report.title}</h4>
                                                        <div className="flex items-center gap-3 mt-1 text-xs text-muted-foreground">
                                                            <span>{report.type}</span>
                                                            <span>•</span>
                                                            <span>{report.size}</span>
                                                            <span>•</span>
                                                            <span className="flex items-center gap-1">
                                                                <Calendar className="w-3 h-3" />
                                                                {report.date}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="p-6 rounded-xl bg-linear-to-br from-primary/10 to-transparent border mt-6 flex flex-col md:flex-row items-center justify-between gap-6">
                                            <div>
                                                <h3 className="text-xl font-bold mb-2">Generate Custom Report</h3>
                                                <p className="text-muted-foreground">Select parameters and date range to export significantly detailed analytics.</p>
                                            </div>
                                            <button className="whitespace-nowrap px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all flex items-center gap-2">
                                                <Download className="w-5 h-5" />
                                                Generate Now
                                            </button>
                                        </div>
                                    </motion.div>
                                )}

                                {activeTab === "settings" && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="space-y-4"
                                    >
                                        {/* Settings Options */}
                                        <div className="space-y-3">
                                            <div className="flex items-center justify-between p-4 rounded-xl bg-muted/30 border">
                                                <div>
                                                    <div className="font-medium">Auto Refresh</div>
                                                    <div className="text-sm text-muted-foreground">Automatically refresh data</div>
                                                </div>
                                                <button
                                                    onClick={() => setSettings(s => ({ ...s, autoRefresh: !s.autoRefresh }))}
                                                    className={`w-12 h-6 rounded-full transition-colors ${settings.autoRefresh ? 'bg-primary' : 'bg-muted'}`}
                                                >
                                                    <motion.div
                                                        className="w-5 h-5 bg-white rounded-full shadow"
                                                        animate={{ x: settings.autoRefresh ? 26 : 2 }}
                                                    />
                                                </button>
                                            </div>

                                            <div className="flex items-center justify-between p-4 rounded-xl bg-muted/30 border">
                                                <div>
                                                    <div className="font-medium">Push Notifications</div>
                                                    <div className="text-sm text-muted-foreground">Receive alert notifications</div>
                                                </div>
                                                <button
                                                    onClick={() => setSettings(s => ({ ...s, notifications: !s.notifications }))}
                                                    className={`w-12 h-6 rounded-full transition-colors ${settings.notifications ? 'bg-primary' : 'bg-muted'}`}
                                                >
                                                    <motion.div
                                                        className="w-5 h-5 bg-white rounded-full shadow"
                                                        animate={{ x: settings.notifications ? 26 : 2 }}
                                                    />
                                                </button>
                                            </div>

                                            <div className="p-4 rounded-xl bg-muted/30 border">
                                                <div className="flex items-center justify-between mb-3">
                                                    <div>
                                                        <div className="font-medium">Refresh Interval</div>
                                                        <div className="text-sm text-muted-foreground">How often to fetch new data</div>
                                                    </div>
                                                    <span className="text-sm font-medium">{settings.refreshInterval}s</span>
                                                </div>
                                                <input
                                                    type="range"
                                                    min="5"
                                                    max="60"
                                                    value={settings.refreshInterval}
                                                    onChange={(e) => setSettings(s => ({ ...s, refreshInterval: parseInt(e.target.value) }))}
                                                    className="w-full accent-primary"
                                                />
                                            </div>
                                        </div>

                                        <button className="w-full px-4 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity">
                                            Save Changes
                                        </button>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* System Status */}
                            <div className="mt-6 pt-4 border-t">
                                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0">
                                    <div className="flex items-center gap-2">
                                        <span className="text-xs sm:text-sm text-muted-foreground">System Status</span>
                                        {isSimulating && (
                                            <span className="text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-500">Live</span>
                                        )}
                                    </div>
                                    <div className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full bg-green-500/10 border border-green-500/20">
                                        <div className="relative shrink-0">
                                            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-500" />
                                            <div className="absolute inset-0 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-500 animate-ping" />
                                        </div>
                                        <span className="text-xs sm:text-sm font-medium text-green-600 dark:text-green-400 whitespace-nowrap">
                                            All Systems Operational
                                        </span>
                                        <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-600 dark:text-green-400 shrink-0" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
