"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";
import { createNoise3D } from "simplex-noise";

interface WavyBackgroundProps {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  colors?: string[];
  waveWidth?: number;
  backgroundFill?: string;
  blur?: number;
  speed?: "slow" | "fast";
  waveOpacity?: number;
  height?: number;
}

export const WavyBackground: React.FC<WavyBackgroundProps> = ({
  children,
  className,
  containerClassName,
  colors,
  waveWidth,
  backgroundFill,
  blur = 10,
  speed = "fast",
  waveOpacity = 0.5,
  height = 500,
}) => {
  const noise = createNoise3D();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSafari, setIsSafari] = useState(false);

  let animationId: number;

  const getSpeed = () => {
    switch (speed) {
      case "slow":
        return 0.001;
      case "fast":
        return 0.002;
      default:
        return 0.001;
    }
  };

  const drawWave = (ctx: CanvasRenderingContext2D, w: number, h: number, nt: number) => {
    const waveColors = colors ?? ["#3FC67D", "#1766C2", "#E6F0F8", "#A8F1D0", "#3979C7","#93B7E1" ,"#B7D3F0"];
    for (let i = 0; i < 5; i++) {
      ctx.beginPath();
      ctx.lineWidth = waveWidth || 50;
      ctx.strokeStyle = waveColors[i % waveColors.length];
      for (let x = 0; x < w; x += 5) {
        const y = noise(x / 800, 0.3 * i, nt) * 70;
        ctx.lineTo(x, y + h / 2);
      }
      ctx.stroke();
      ctx.closePath();
    }
  };

  // Function to check if dark mode class is present
  const checkDarkMode = () => {
    if (typeof window !== "undefined") {
      const root = document.documentElement;
      setIsDarkMode(root.classList.contains("dark"));
    }
  };

  useEffect(() => {
    setIsSafari(
      typeof window !== "undefined" &&
        navigator.userAgent.includes("Safari") &&
        !navigator.userAgent.includes("Chrome")
    );

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = canvas.width = window.innerWidth;
    let h = canvas.height = height;
    ctx.filter = `blur(${blur}px)`;

    let nt = 0;

    const render = () => {
      checkDarkMode(); // dynamically update dark mode
      ctx.fillStyle = backgroundFill || (isDarkMode ? "#111" : "#ffffff");
      ctx.globalAlpha = waveOpacity || 0.5;
      ctx.fillRect(0, 0, w, h);
      drawWave(ctx, w, h, nt);
      nt += getSpeed();
      animationId = requestAnimationFrame(render);
    };

    const handleResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = height;
      ctx.filter = `blur(${blur}px)`;
    };

    window.addEventListener("resize", handleResize);
    render();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, [blur, waveWidth, waveOpacity, colors, backgroundFill, speed, height, isDarkMode]);

  return (
    <div
      className={cn(
        `flex flex-col items-center justify-center h-[${height}px]`,
        containerClassName
      )}
    >
      <canvas
        className="absolute inset-0 z-0"
        ref={canvasRef}
        style={{
          ...(isSafari ? { filter: `blur(${blur}px)` } : {}),
        }}
      />
      <div className={cn("relative z-10", className)}>{children}</div>
    </div>
  );
};
