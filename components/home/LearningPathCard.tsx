import React from 'react';

export interface LearningPathData {
  name: string;
  icon: React.ReactNode;
}

export function LearningPathCard({ path }: { path: LearningPathData }) {
  return (
    <div className="flex flex-col items-center justify-center bg-white rounded-3xl border border-neutral-200 p-6 md:p-8 hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300 w-full aspect-square cursor-pointer">
      <div className="w-16 h-16 rounded-full bg-[#CCFF00] flex items-center justify-center mb-5 text-neutral-900">
        {path.icon}
      </div>
      <h3 className="text-neutral-900 label-xl">
        {path.name}
      </h3>
    </div>
  );
}
