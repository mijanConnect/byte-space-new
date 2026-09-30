import React from 'react';

export function StudentsCard() {
  return (
    <div className="bg-white rounded-2xl p-5 md:p-4 shadow-[0_20px_40px_rgba(0,0,0,0.1)]">
      <h3 className="label-m md:label-l text-neutral-900">Happy Students</h3>
      <div className="flex items-center gap-1 mb-2">
        <span className="label-s text-neutral-900">4.5</span>
        <span className="body-xs text-neutral-500">(240)</span>
        <span className="text-[#F5B50A] text-sm ml-1">★</span>
      </div>
      <div className="flex -space-x-3">
        {[1, 2, 3, 4, 5, 6, 7].map((i) => (
          <div
            key={i}
            className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white bg-neutral-200 flex-shrink-0"
            style={{ zIndex: 10 - i }}
          />
        ))}
        <div
          className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white bg-secondary-400 flex items-center justify-center flex-shrink-0 relative"
          style={{ zIndex: 11 }}
        >
          <span className="label-xs text-neutral-900">2K+</span>
        </div>
      </div>
    </div>
  );
}
