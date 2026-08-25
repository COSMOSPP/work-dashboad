import React from 'react';
import { filterOptions } from '../mockData';
import { FilterState } from '../types';

interface FilterBarProps {
  filter: FilterState;
  onChange: (filter: FilterState) => void;
}

export function FilterBar({ filter, onChange }: FilterBarProps) {
  const handleChange = (key: keyof FilterState, value: string) => {
    onChange({ ...filter, [key]: value });
  };

  const selectClasses = "appearance-none bg-[#0a1532] border border-[#1e3a8a] text-slate-200 text-sm focus:outline-none focus:border-cyan-500 block w-40 px-3 py-1.5 pr-8 hover:border-[#2563eb] transition-colors";
  
  const SelectArrow = () => (
    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-cyan-500">
      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
      </svg>
    </div>
  );

  return (
    <div className="flex flex-col md:flex-row justify-between items-center px-2 text-sm z-40">
      
      {/* Left: Dimension */}
      <div className="flex items-center space-x-3">
        <span className="text-slate-400 font-medium">统计维度</span>
        <div className="relative group">
          <select 
            value={filter.dimension} 
            onChange={(e) => handleChange('dimension', e.target.value)}
            className={selectClasses}
          >
            {filterOptions.dimensions.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
          </select>
          <SelectArrow />
        </div>
      </div>

      {/* Right: Filters & Action Buttons */}
      <div className="flex items-center space-x-3 bg-[#0a1532]/50 p-1 rounded-sm">
        <span className="text-slate-400 font-medium ml-2">筛选条件</span>
        
        <div className="relative group">
          <select 
            value={filter.term} 
            onChange={(e) => handleChange('term', e.target.value)}
            className={selectClasses}
          >
            {filterOptions.terms.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
          </select>
          <SelectArrow />
        </div>

        <div className="relative group">
          <select 
            value={filter.classId} 
            onChange={(e) => handleChange('classId', e.target.value)}
            className={selectClasses}
          >
            {filterOptions.classes.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
          </select>
          <SelectArrow />
        </div>

        <div className="relative group">
          <select 
            value={filter.courseId} 
            onChange={(e) => handleChange('courseId', e.target.value)}
            className={selectClasses}
          >
            {filterOptions.courses.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
          </select>
          <SelectArrow />
        </div>

        <button className="px-5 py-1.5 bg-[#0ea5e9] hover:bg-[#0284c7] text-white font-medium transition-colors shadow-[0_0_8px_rgba(14,165,233,0.5)]">
          查询
        </button>
        <button className="px-5 py-1.5 bg-transparent border border-[#1e3a8a] hover:bg-[#1e3a8a]/50 text-slate-300 font-medium transition-colors">
          重置
        </button>
      </div>
    </div>
  );
}
