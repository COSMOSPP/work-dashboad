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
    <div className="min-h-screen bg-[#03091A] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#0D245A] via-[#03091A] to-[#01040A] text-slate-200 font-sans flex flex-col overflow-x-hidden selection:bg-cyan-500/30">
      <Header />
      
      <main className="flex-1 w-full max-w-[1920px] mx-auto p-[20px] flex flex-col">
        
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
