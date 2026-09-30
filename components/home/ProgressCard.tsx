import React from 'react';

export function ProgressCard() {
  return (
    <div className="bg-white rounded-2xl p-4 md:p-4 shadow-[0_20px_40px_rgba(0,0,0,0.1)] w-[220px] md:w-[280px]">
      <h3 className="body-s md:body-m text-neutral-700 mb-1">Learning Progress</h3>
      <div className="font-poppins font-semibold text-4xl md:text-5xl text-neutral-900 mb-4">55%</div>
      <div className="w-full bg-neutral-100 rounded-full h-2 md:h-3">
        <div className="bg-secondary-400 h-2 md:h-3 rounded-full w-[55%]"></div>
      </div>
    </div>
  );
}
