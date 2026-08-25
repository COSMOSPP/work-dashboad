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
    <header className="relative w-full z-50 bg-[#05146A]/95 border-b border-[#1e3a8a]/70 shadow-[0_4px_20px_rgba(0,0,0,0.6)]">
      {/* Top Nav Line */}
      <div className="flex items-center justify-between px-6 py-2.5 bg-[#07197a]/80">
        {/* Top Left Logo & Title */}
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2.5">
            <div className="w-6 h-6 bg-cyan-500 rounded-sm transform rotate-45 flex items-center justify-center shadow-[0_0_12px_rgba(6,182,212,0.8)] flex-shrink-0">
              <div className="w-2.5 h-2.5 bg-[#020716] rounded-full" />
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-base font-extrabold text-white tracking-wide text-shadow-cyan">教育培训领导驾驶舱</span>
              <span className="text-slate-600 font-thin text-sm">|</span>
              <span className="text-xs font-bold text-cyan-400 font-mono tracking-wider">智云实训平台</span>
            </div>
          </div>

          <nav className="hidden xl:flex items-center space-x-1 pl-4 border-l border-[#1e3a8a]/60">
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
          </nav>
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
    </header>
  );
}

