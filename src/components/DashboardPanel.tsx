import React from "react";
import { cn } from "../utils";
import { ChevronRight } from "lucide-react";

interface DashboardPanelProps {
  title: string;
  children: React.ReactNode;
  extra?: React.ReactNode;
  className?: string;
  contentClassName?: string;
}

export function DashboardPanel({ title, children, extra, className, contentClassName }: DashboardPanelProps) {
  return (
    <div className={cn(
      "bg-[#06122d]/90 border border-[#1d4ed8]/60 rounded-md relative flex flex-col shadow-[0_0_25px_rgba(29,78,216,0.25)] backdrop-blur-md overflow-hidden",
      className
    )}>
      {/* Top neon line */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-400/80 to-transparent shadow-[0_0_10px_rgba(6,182,212,0.8)]" />

      {/* Futuristic Corner Brackets */}
      <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t-2 border-l-2 border-cyan-400 rounded-tl-[3px] shadow-[0_0_6px_rgba(6,182,212,0.8)]" />
      <div className="absolute top-0 right-0 w-2.5 h-2.5 border-t-2 border-r-2 border-cyan-400 rounded-tr-[3px] shadow-[0_0_6px_rgba(6,182,212,0.8)]" />
      <div className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b-2 border-l-2 border-cyan-400 rounded-bl-[3px] shadow-[0_0_6px_rgba(6,182,212,0.8)]" />
      <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b-2 border-r-2 border-cyan-400 rounded-br-[3px] shadow-[0_0_6px_rgba(6,182,212,0.8)]" />

      {/* Header with Reference Image Style Title Badge */}
      <div className="flex justify-between items-center px-3.5 py-2 border-b border-[#1d4ed8]/40 bg-[#091b42]/80 rounded-t-md">
        <div className="flex items-center space-x-1.5 bg-gradient-to-r from-[#1d4ed8] via-[#1e40af]/90 to-transparent px-3 py-1 border-l-4 border-cyan-400 rounded-r shadow-[0_0_12px_rgba(37,99,235,0.5)]">
          <ChevronRight size={15} className="text-cyan-300 stroke-[3]" />
          <h3 className="text-white font-extrabold text-[14px] tracking-wider uppercase text-shadow-cyan">
            {title}
          </h3>
        </div>
        {extra && <div className="flex items-center">{extra}</div>}
      </div>

      {/* Content Body */}
      <div className={cn("p-3.5 flex-1 overflow-hidden relative min-h-0", contentClassName)}>
        {children}
      </div>
    </div>
  );
}

