"use client";

import { useTheme } from "next-themes";
import './GradientText.css';

interface GradientTextProps {
    children: React.ReactNode;
    className?: string;
    colors?: string[];
    animationSpeed?: number;
    showBorder?: boolean;
}

export default function GradientText({
    children,
    className = "",
    colors = ["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"],
    animationSpeed = 8,
    showBorder = false,
}: GradientTextProps) {
    const { theme } = useTheme();

    const gradientStyle = {
        backgroundImage: `linear-gradient(to right, ${colors.join(", ")})`,
        animationDuration: `${animationSpeed}s`,
    } as React.CSSProperties;

    return (
        <div className={`animated-gradient-text ${className}`}>
            {showBorder && (
                <div className="gradient-overlay" style={gradientStyle}></div>
            )}
            <div className="text-content" style={gradientStyle}>
                {children}
            </div>
        </div>
    );
}
