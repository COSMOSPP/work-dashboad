import React, { useState } from 'react';
import {
  LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, PieChart, Pie, Cell, Legend
} from 'recharts';
import { DashboardPanel } from './DashboardPanel';
import { employmentDestinationsData, employmentRolesData, employmentRegionsData } from '../mockData';

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#051025]/95 border border-[#1e3a8a] p-3 rounded-lg shadow-[0_10px_25px_rgba(0,0,0,0.7)] backdrop-blur-md z-[9999] relative pointer-events-none">
        {label && <p className="text-slate-300 font-medium text-xs mb-2 border-b border-[#1e3a8a]/50 pb-1">{label}</p>}
        {payload.map((entry: any, index: number) => (
          <p key={index} className="text-xs font-bold flex justify-between items-center space-x-6 py-0.5" style={{ color: entry.color || entry.fill }}>
            <span>{entry.name}</span>
            <span className="font-mono text-slate-100 ml-4">
              {entry.value}{entry.unit || (entry.name && entry.name.includes('率') ? '%' : '')}
            </span>
          </p>
        ))}
      </div>
    );
  }
  return null;
};

const PeriodSelect = () => (
  <select className="bg-[#0a1532] border border-[#1e3a8a] text-slate-300 text-xs px-2 py-1 outline-none">
    <option>近6期</option>
  </select>
);

export const EnrollmentTrendChart = ({ data }: { data: any[] }) => (
  <DashboardPanel 
    title="报名 / 在训人数趋势" 
    className="min-h-[300px] h-full"
    extra={
      <div className="flex space-x-2 items-center">
        <span className="text-xs text-slate-500">期次对比</span>
        <PeriodSelect />
      </div>
    }
  >
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data} margin={{ top: 20, right: 20, left: -10, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#1e3a8a" vertical={false} opacity={0.4} />
        <XAxis dataKey="name" stroke="#64748b" fontSize={10} tickLine={false} axisLine={false} />
        <YAxis stroke="#64748b" fontSize={10} tickLine={false} axisLine={false} />
        <Tooltip wrapperStyle={{ zIndex: 9999, outline: 'none' }} content={<CustomTooltip />} />
        <Legend iconType="plainline" wrapperStyle={{ fontSize: '11px', color: '#94a3b8', top: 0, left: 0 }} />
        <Line type="linear" dataKey="报名人数" stroke="#3b82f6" strokeWidth={2} dot={{ r: 4, fill: '#3b82f6', strokeWidth: 0 }} activeDot={{ r: 6 }} />
        <Line type="linear" dataKey="在训人数" stroke="#10b981" strokeWidth={2} dot={{ r: 4, fill: '#10b981', strokeWidth: 0 }} activeDot={{ r: 6 }} />
      </LineChart>
    </ResponsiveContainer>
  </DashboardPanel>
);

export const PassRateTrendChart = ({ data }: { data: any[] }) => (
  <DashboardPanel title="完课率 / 通过率趋势" extra={<PeriodSelect />} className="min-h-[300px] h-full">
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data} margin={{ top: 20, right: 20, left: -20, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#1e3a8a" vertical={false} opacity={0.4} />
        <XAxis dataKey="name" stroke="#64748b" fontSize={10} tickLine={false} axisLine={false} />
        <YAxis stroke="#64748b" fontSize={10} tickLine={false} axisLine={false} tickFormatter={(v) => `${v}%`} />
        <Tooltip wrapperStyle={{ zIndex: 9999, outline: 'none' }} content={<CustomTooltip />} />
        <Legend iconType="plainline" wrapperStyle={{ fontSize: '11px', color: '#94a3b8', top: 0, left: 0 }} />
        <Line type="linear" dataKey="完课率" stroke="#3b82f6" strokeWidth={2} dot={{ r: 4, fill: '#3b82f6', strokeWidth: 0 }} />
        <Line type="linear" dataKey="通过率" stroke="#10b981" strokeWidth={2} dot={{ r: 4, fill: '#10b981', strokeWidth: 0 }} />
      </LineChart>
    </ResponsiveContainer>
  </DashboardPanel>
);

export const EmploymentDestinationsChart = () => {
  const [activeTab, setActiveTab] = useState<'industry' | 'role' | 'region'>('industry');

  const getData = () => {
    switch (activeTab) {
      case 'role': return employmentRolesData;
      case 'region': return employmentRegionsData;
      default: return employmentDestinationsData;
    }
  };

  const data = getData();
  const tabButtonClasses = (isActive: boolean) => 
    `px-3 py-1.5 text-[11px] transition-colors rounded-sm ${isActive 
      ? 'bg-[#1e3a8a]/40 text-slate-200 border border-[#3b82f6]/50' 
      : 'bg-[#0a1532]/40 text-slate-400 border border-transparent hover:bg-[#1e3a8a]/20'
    }`;

  return (
    <DashboardPanel title="基础就业去向分布" extra={<PeriodSelect />} className="min-h-[300px] h-full">
      <div className="flex space-x-1.5 mt-1 px-1">
        <button className={tabButtonClasses(activeTab === 'industry')} onClick={() => setActiveTab('industry')}>行业分布</button>
        <button className={tabButtonClasses(activeTab === 'role')} onClick={() => setActiveTab('role')}>岗位分布</button>
        <button className={tabButtonClasses(activeTab === 'region')} onClick={() => setActiveTab('region')}>地区分布</button>
      </div>
      
      <div className="flex w-full h-full pb-10 pt-2 items-center">
        {/* Left: Chart Container */}
        <div className="w-1/2 h-full relative">
          {/* Center text set to z-0 so Tooltip floats above it */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none mt-1 z-0">
            <p className="text-[10px] text-slate-400 mb-0.5">就业人数</p>
            <p className="text-lg font-bold text-white tracking-tight">1,256<span className="text-[10px] font-normal ml-0.5 text-slate-300">人</span></p>
          </div>

          <ResponsiveContainer width="100%" height="100%" className="relative z-10">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius="55%"
                outerRadius="85%"
                paddingAngle={0}
                dataKey="value"
                stroke="none"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip wrapperStyle={{ zIndex: 9999, outline: 'none' }} content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>
        </div>
        
        {/* Right: Custom Legend */}
        <div className="w-1/2 flex flex-col justify-center space-y-3.5 pr-4">
          {data.map((item, index) => (
            <div key={index} className="flex items-center text-xs">
              <span 
                className="w-3 h-3 rounded-sm mr-3 flex-shrink-0" 
                style={{ backgroundColor: item.color }} 
              />
              <span className="text-slate-300 flex-1 truncate">{item.name}</span>
              <span className="text-slate-200 font-mono tracking-wide w-12 text-right">{item.value}%</span>
            </div>
          ))}
        </div>
      </div>
    </DashboardPanel>
  );
};

export const CourseEvaluationChart = ({ data }: { data: any[] }) => (
  <DashboardPanel title="课程评价分布" extra={<PeriodSelect />} className="min-h-[300px] h-full">
    <p className="text-[10px] text-slate-400 mb-2">课程数 (门)</p>
    <ResponsiveContainer width="100%" height="90%">
      <BarChart data={data} margin={{ top: 0, right: 0, left: -25, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#1e3a8a" vertical={false} opacity={0.4} />
        <XAxis dataKey="subject" stroke="#64748b" fontSize={10} tickLine={false} axisLine={false} />
        <YAxis stroke="#64748b" fontSize={10} tickLine={false} axisLine={false} />
        <Tooltip wrapperStyle={{ zIndex: 9999, outline: 'none' }} cursor={{fill: '#1e3a8a', opacity: 0.2}} content={<CustomTooltip />} />
        <Bar dataKey="value" fill="#3b82f6" barSize={30}>
           {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill="url(#colorBar)" />
           ))}
        </Bar>
        <defs>
          <linearGradient id="colorBar" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity={1}/>
            <stop offset="100%" stopColor="#2563eb" stopOpacity={0.2}/>
          </linearGradient>
        </defs>
      </BarChart>
    </ResponsiveContainer>
  </DashboardPanel>
);

export const WorksTrendChart = ({ data }: { data: any[] }) => (
  <DashboardPanel title="作品数量趋势" extra={<PeriodSelect />} className="min-h-[300px] h-full">
    <p className="text-[10px] text-slate-400 mb-2">作品数量 (个)</p>
    <ResponsiveContainer width="100%" height="90%">
      <AreaChart data={data} margin={{ top: 0, right: 10, left: -20, bottom: 0 }}>
        <defs>
          <linearGradient id="colorWorks" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.5}/>
            <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="#1e3a8a" vertical={false} opacity={0.4} />
        <XAxis dataKey="name" stroke="#64748b" fontSize={10} tickLine={false} axisLine={false} />
        <YAxis stroke="#64748b" fontSize={10} tickLine={false} axisLine={false} />
        <Tooltip wrapperStyle={{ zIndex: 9999, outline: 'none' }} content={<CustomTooltip />} />
        <Area type="linear" dataKey="作品数量" stroke="#3b82f6" strokeWidth={2} fillOpacity={1} fill="url(#colorWorks)" activeDot={{ r: 6 }} dot={{ r: 4, fill: '#3b82f6', strokeWidth: 0 }} />
      </AreaChart>
    </ResponsiveContainer>
  </DashboardPanel>
);

