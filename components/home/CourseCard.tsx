import React from 'react';

export function CourseCard() {
  return (
    <div className="bg-white rounded-2xl p-4 md:p-4 shadow-[0_20px_40px_rgba(0,0,0,0.1)] w-[200px] md:w-[260px]">
      <h3 className="label-m md:label-l text-neutral-900 mb-1 md:mb-2">UI/UX Design</h3>
      <p className="body-xs text-neutral-500">200 Courses &bull; 1000+ Students</p>
    </div>
  );
}
