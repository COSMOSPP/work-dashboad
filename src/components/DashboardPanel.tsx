import React from "react";
import { cn } from "../utils";

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
      "bg-[#11234A] border border-[#274B9F] rounded-md relative flex flex-col shadow-[0_8px_30px_rgba(0,0,0,0.4)] backdrop-blur-sm",
      className
    )}>
      {/* Top subtle highlight */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#60A5FA]/60 to-transparent" />

      {/* Tech decorative corners */}
      <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-cyan-400 rounded-tl-[4px]" />
      <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-cyan-400 rounded-tr-[4px]" />
      <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-cyan-400 rounded-bl-[4px]" />
      <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-cyan-400 rounded-br-[4px]" />
      
      <div className="flex justify-between items-center px-4 py-3 border-b border-[#274B9F] bg-[#183163] rounded-t-md">
        <h3 className="text-slate-100 font-bold text-[15px] tracking-wide flex items-center">
          {title}
        </h3>
        {extra && <div className="flex items-center">{extra}</div>}
      </div>
      
      <div className={cn("p-4 flex-1 overflow-hidden relative min-h-0", contentClassName)}>
        {children}
      </div>
    </div>
  );
}
