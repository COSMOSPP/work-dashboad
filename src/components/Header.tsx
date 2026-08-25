import React, { useState, useEffect } from 'react';
import { Bell, CloudSun } from 'lucide-react';

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
    <div className="relative h-16 w-full flex items-center justify-between px-6 bg-[#03091A]/90 backdrop-blur-md border-b border-[#1e3a8a]/50 text-slate-300 z-50">
      {/* Left Nav */}
      <div className="flex items-center space-x-8">
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 bg-cyan-500 rounded-sm transform rotate-45 flex items-center justify-center shadow-[0_0_10px_rgba(6,182,212,0.5)]">
            <div className="w-3 h-3 bg-[#03091A] rounded-full" />
          </div>
          <span className="text-lg font-bold text-white tracking-wider">智云实训平台</span>
        </div>
        
        <nav className="hidden lg:flex space-x-1">
          {['综合总览', '资源管理', '教学管理', '实训管理', '就业管理', '运营分析', '系统管理'].map((item, idx) => (
            <button 
              key={item} 
              className={`px-4 py-2 text-sm font-medium transition-colors relative ${
                idx === 0 ? 'text-white' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {item}
              {idx === 0 && (
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
              )}
            </button>
          ))}
        </nav>
      </div>

      {/* Right Info */}
      <div className="flex items-center space-x-6 text-sm">
        <div className="text-cyan-400 font-mono tracking-wide tabular-nums hidden xl:block">
          {formatDate(time)}
        </div>
        <div className="hidden sm:flex items-center text-slate-300">
          <CloudSun size={18} className="mr-2 text-cyan-300" />
          多云 26°C
        </div>
        
        <div className="flex items-center space-x-4 ml-4 pl-4 border-l border-slate-700">
          <button className="relative p-1.5 text-slate-400 hover:text-white transition-colors rounded-full border border-slate-700 bg-slate-900">
            <Bell size={16} />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-[9px] flex items-center justify-center text-white border-2 border-[#03091A]">
              12
            </span>
          </button>
          <div className="flex items-center space-x-2 cursor-pointer">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 border border-slate-600" />
            <div className="flex flex-col">
              <span className="text-sm font-medium text-white leading-tight">张校长</span>
              <span className="text-[10px] text-slate-400 leading-tight">校级领导</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
