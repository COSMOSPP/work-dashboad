import React from "react";
import { MetricData } from "../types";
import { cn } from "../utils";
import * as Icons from "lucide-react";
import { motion } from "motion/react";

interface MetricCardProps {
  key?: React.Key;
  data: MetricData;
  index: number;
}

export function MetricCard({ data, index }: MetricCardProps) {
  // @ts-ignore - dynamic icon
  const Icon = Icons[data.icon.split('-').map(part => part.charAt(0).toUpperCase() + part.slice(1)).join('')] || Icons.Activity;
  
  const isPositive = data.trend >= 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.04, duration: 0.4 }}
      className="relative flex flex-col justify-center px-3 py-2.5 bg-[#061434]/90 border border-[#1d4ed8]/60 rounded-md shadow-[0_0_20px_rgba(29,78,216,0.2),inset_0_0_15px_rgba(29,78,216,0.15)] group hover:border-cyan-400/80 transition-all duration-300 overflow-hidden"
    >
      {/* Top subtle cyan line */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent group-hover:via-cyan-400 transition-colors" />

      {/* Futuristic Corner Brackets */}
      <div className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-cyan-400/80" />
      <div className="absolute top-0 right-0 w-1.5 h-1.5 border-t border-r border-cyan-400/80" />
      <div className="absolute bottom-0 left-0 w-1.5 h-1.5 border-b border-l border-cyan-400/80" />
      <div className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-cyan-400/80" />

      <div className="flex flex-col items-center relative z-10">
        {/* Title */}
        <h3 className="text-slate-200 text-xs font-semibold mb-1 tracking-wider text-center flex items-center space-x-1">
          <span className="w-1 h-1 rounded-full bg-cyan-400 inline-block shadow-[0_0_6px_rgba(6,182,212,0.8)]" />
          <span>{data.title}</span>
        </h3>
        
        {/* Metric Value */}
        <div className="flex items-center justify-center space-x-2 mb-1 w-full">
          <div className="w-6 h-6 rounded bg-[#1e3a8a]/60 border border-cyan-500/40 flex items-center justify-center shadow-[0_0_8px_rgba(6,182,212,0.3)] flex-shrink-0">
            <Icon size={13} style={{ color: data.color }} strokeWidth={2.5} />
          </div>
          <div className="flex items-baseline">
            <span className="text-xl sm:text-2xl font-black text-cyan-300 tabular-nums tracking-tight font-mono text-shadow-cyan italic">
              {data.value}
            </span>
            {data.unit && (
              <span className="text-slate-300 text-[10px] ml-1 font-sans font-medium">{data.unit}</span>
            )}
          </div>
        </div>

        {/* Trend Indicator */}
        <div className="text-[10px] text-slate-400 flex items-center font-sans">
          <span>较上期</span>
          <span className={cn(
            "ml-1 flex items-center font-bold font-mono text-[10px]",
            isPositive ? "text-[#10b981]" : "text-[#ef4444]"
          )}>
            {isPositive ? '▲' : '▼'} {Math.abs(data.trend)}{data.trendIsPercent ? '%' : ''}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
