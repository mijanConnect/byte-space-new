import React from 'react';

export function RevenueCard() {
  return (
    <div className="flex flex-col gap-6">
      {/* Top Card */}
      <div className="bg-blue-700 rounded-xl p-4 shadow-xl w-52 md:w-64">
        <p className="text-white/80 text-xs mb-1">Total Revenue</p>
        <p className="text-white/60 text-xs mb-2 font-medium tracking-wide uppercase">July 1-28</p>
        <p className="text-white font-bold text-2xl mb-3">$120.29</p>
        <div className="w-full bg-white/20 rounded-full h-1.5">
          <div className="bg-lime-400 h-1.5 rounded-full w-2/3 shadow-md shadow-lime-400/50"></div>
        </div>
      </div>

      {/* Bottom Card */}
      <div className="bg-blue-700 rounded-xl p-4 shadow-xl self-start">
        <p className="text-white/80 text-xs mb-1">Year to Date</p>
        <p className="text-white/60 text-xs mb-3 font-medium tracking-wide uppercase">2023</p>
        <div className="flex flex-col items-start gap-2">
          <p className="text-white font-bold text-xl md:text-2xl leading-none">$1,200.38</p>
          <div className="bg-lime-400 text-neutral-900 text-xs font-bold px-3 py-1 rounded-full inline-flex">
            +12%
          </div>
        </div>
      </div>
    </div>
  );
}
