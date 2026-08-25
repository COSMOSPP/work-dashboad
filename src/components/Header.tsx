import React, { useState, useEffect } from 'react';
import { Bell, CloudSun, Shield, Sparkles } from 'lucide-react';

export function Header() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatDate = (d: Date) => {
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    const hours = String(d.getHours()).padStart(2, '0');
    const mins = String(d.getMinutes()).padStart(2, '0');
    const secs = String(d.getSeconds()).padStart(2, '0');
    const days = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
    return `${year}-${month}-${day} ${hours}:${mins}:${secs} ${days[d.getDay()]}`;
  };

  return (
    <header className="relative w-full z-50 bg-[#020716]/95 border-b border-[#1e3a8a]/70 shadow-[0_10px_35px_rgba(0,0,0,0.8)]">
      {/* Top Nav Line */}
      <div className="flex items-center justify-between px-6 py-1.5 border-b border-[#1e3a8a]/40 bg-[#05112c]/60">
        {/* Top Left Menu Tabs */}
        <div className="flex items-center space-x-1">
          <div className="flex items-center space-x-2 mr-4">
            <div className="w-5 h-5 bg-cyan-500 rounded-sm transform rotate-45 flex items-center justify-center shadow-[0_0_12px_rgba(6,182,212,0.8)]">
              <div className="w-2.5 h-2.5 bg-[#020716] rounded-full" />
            </div>
            <span className="text-xs font-bold text-cyan-300 tracking-wider font-mono">智云实训平台</span>
          </div>

          {['综合总览', '资源管理', '教学管理', '实训管理', '就业管理', '运营分析', '系统管理'].map((item, idx) => (
            <button
              key={item}
              className={`px-3 py-1 text-xs font-medium transition-all duration-200 rounded-xs relative cursor-pointer ${
                idx === 0
                  ? 'text-cyan-300 font-bold bg-[#1e3a8a]/60 border border-cyan-500/60 shadow-[0_0_10px_rgba(6,182,212,0.3)]'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-[#1e3a8a]/30'
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Top Right Controls */}
        <div className="flex items-center space-x-5 text-xs text-slate-300">
          <div className="text-cyan-400 font-mono tracking-wide tabular-nums hidden md:block">
            {formatDate(time)}
          </div>
          <div className="hidden sm:flex items-center text-slate-300">
            <CloudSun size={15} className="mr-1.5 text-cyan-300" />
            <span>多云 26°C</span>
          </div>

          <div className="flex items-center space-x-3 ml-2 pl-3 border-l border-[#1e3a8a]">
            <button className="relative p-1 text-slate-400 hover:text-white transition-colors rounded bg-[#09183d] border border-[#1e3a8a]">
              <Bell size={14} />
              <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-rose-500 rounded-full text-[8px] flex items-center justify-center text-white font-mono font-bold">
                12
              </span>
            </button>
            <div className="flex items-center space-x-1.5 cursor-pointer">
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 border border-cyan-300 flex items-center justify-center text-[10px] font-bold text-white shadow-[0_0_8px_rgba(6,182,212,0.5)]">
                张
              </div>
              <span className="text-xs font-medium text-slate-200">张校长</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Futuristic Center Title Banner */}
      <div className="relative flex flex-col items-center justify-center pt-2 pb-3 overflow-hidden">
        {/* Background Glowing Lines & Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/40 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_12px_rgba(6,182,212,0.8)]" />

        {/* Center Trapezoid Title Banner */}
        <div className="relative flex items-center justify-center">
          {/* Left Wing Line */}
          <div className="hidden md:flex items-center space-x-1 mr-4">
            <div className="w-16 h-[2px] bg-gradient-to-r from-transparent to-cyan-400" />
            <div className="w-2 h-2 border-t-2 border-r-2 border-cyan-400 transform rotate-45" />
          </div>

          {/* Main Title Shield Badge */}
          <div className="relative px-12 py-1.5 bg-gradient-to-r from-[#0d2861] via-[#1e40af] to-[#0d2861] border-x-2 border-cyan-400 shadow-[0_0_25px_rgba(37,99,235,0.6)] rounded-sm flex items-center justify-center">
            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-cyan-300" />
            <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-cyan-300" />
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-cyan-300" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-cyan-300" />

            <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-white tracking-widest text-shadow-cyan uppercase">
              教育培训领导驾驶舱
            </h1>
          </div>

          {/* Right Wing Line */}
          <div className="hidden md:flex items-center space-x-1 ml-4">
            <div className="w-2 h-2 border-b-2 border-l-2 border-cyan-400 transform rotate-45" />
            <div className="w-16 h-[2px] bg-gradient-to-l from-transparent to-cyan-400" />
          </div>
        </div>

        {/* Subtitle Tech Line */}
        <div className="mt-1 flex items-center space-x-2 text-[10px] sm:text-xs font-mono tracking-widest text-cyan-400/90 font-semibold">
          <span className="text-cyan-500">///</span>
          <span className="tracking-widest uppercase">智云数字化实训与全域教学决策中心</span>
          <span className="text-cyan-500">///</span>
        </div>
      </div>
    </header>
  );
}

