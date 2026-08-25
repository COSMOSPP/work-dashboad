import React, { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { FilterBar } from './components/FilterBar';
import { MetricCard } from './components/MetricCard';
import { 
  EnrollmentTrendChart, 
  PassRateTrendChart, 
  EmploymentDestinationsChart, 
  CourseEvaluationChart,
  WorksTrendChart
} from './components/Charts';
import { ClassTable } from './components/ClassTable';
import { 
  generateMetrics, 
  trendChartData, 
  passRateChartData, 
  courseEvaluationsData,
  worksTrendData,
  classTableData
} from './mockData';
import { FilterState } from './types';

export default function App() {
  const [filter, setFilter] = useState<FilterState>({
    dimension: 'all',
    term: '2025-spring-3',
    classId: 'all',
    courseId: 'all'
  });

  const metrics = useMemo(() => generateMetrics(), []);

  return (
    <div className="min-h-screen bg-[#020716] bg-cyber-grid text-slate-200 font-sans flex flex-col overflow-x-hidden selection:bg-cyan-500/30 relative">
      {/* Background Ambient Glow Orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[360px] bg-gradient-to-b from-cyan-500/20 via-blue-600/12 to-transparent blur-3xl pointer-events-none z-0" />
      <div className="absolute top-[380px] -left-32 w-[650px] h-[550px] bg-cyan-500/12 rounded-full blur-[130px] pointer-events-none z-0" />
      <div className="absolute top-[320px] -right-32 w-[650px] h-[550px] bg-indigo-600/12 rounded-full blur-[130px] pointer-events-none z-0" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1200px] h-[400px] bg-blue-600/12 blur-[120px] pointer-events-none z-0" />

      {/* Atmospheric Laser Scanline Beam */}
      <div className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent animate-scanline pointer-events-none z-0" />

      <Header />
      
      <main className="flex-1 w-full max-w-[1920px] mx-auto p-[20px] flex flex-col relative z-10">
        
        {/* Top Controls */}
        <div className="mb-[20px]">
          <FilterBar filter={filter} onChange={setFilter} />
        </div>
        
        <div className="flex flex-col space-y-[20px]">
          {/* Metric Cards Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-9 gap-[20px]">
            {metrics.map((metric, index) => (
              <MetricCard 
                key={metric.id} 
                data={metric} 
                index={index} 
              />
            ))}
          </div>

          {/* Middle Row: Trend & Donut Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-[20px] lg:h-[340px]">
            <EnrollmentTrendChart data={trendChartData} />
            <PassRateTrendChart data={passRateChartData} />
            <EmploymentDestinationsChart />
          </div>

          {/* Bottom Row: Table & Remaining Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-[20px] lg:h-[380px]">
            <ClassTable data={classTableData} />
            <CourseEvaluationChart data={courseEvaluationsData} />
            <WorksTrendChart data={worksTrendData} />
          </div>
        </div>
      </main>
    </div>
  );
}
