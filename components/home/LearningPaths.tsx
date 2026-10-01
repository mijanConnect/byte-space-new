import React from 'react';
import { LearningPathCard, LearningPathData } from './LearningPathCard';
import { DesignIcon } from '../icons/DesignIcon';
import { DevelopmentIcon } from '../icons/DevelopmentIcon';
import { ITIcon } from '../icons/ITIcon';
import { BusinessIcon } from '../icons/BusinessIcon';
import { MarketingIcon } from '../icons/MarketingIcon';
import { PhotographyIcon } from '../icons/PhotographyIcon';

const paths: LearningPathData[] = [
  {
    name: 'Design',
    icon: <DesignIcon />
  },
  {
    name: 'Development',
    icon: <DevelopmentIcon />
  },
  {
    name: 'IT & Software',
    icon: <ITIcon />
  },
  {
    name: 'Business',
    icon: <BusinessIcon />
  },
  {
    name: 'Marketing',
    icon: <MarketingIcon />
  },
  {
    name: 'Photography',
    icon: <PhotographyIcon />
  }
];

export function LearningPaths() {
  return (
    <section className="w-full bg-white py-16 md:py-24 border-t border-neutral-100">
      <div className="page-layout">
        {/* Header */}
        <div className="col-span-12 md:col-span-8 md:col-start-3 text-center mb-14">
          <h2 className="text-3xl md:text-[40px] font-bold text-neutral-900 mb-6 leading-tight">
            Explore Diverse Learning Paths at Bytespace
          </h2>
          <p className="text-neutral-500 text-sm md:text-base leading-relaxed max-w-3xl mx-auto">
            At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories.
          </p>
        </div>

        {/* Grid of Cards */}
        <div className="col-span-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {paths.map((path, index) => (
            <LearningPathCard key={index} path={path} />
          ))}
        </div>
      </div>
    </section>
  );
}
