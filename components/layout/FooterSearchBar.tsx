import React from 'react';

interface SearchBarProps {
  placeholder?: string;
  buttonText?: string;
  type?: string;
  hasIcon?: boolean;
  variant?: 'hero' | 'footer';
}

export function SearchBar({
  placeholder = "Search...",
  buttonText = "Search",
  type = "text",
  hasIcon = false,
  variant = 'footer'
}: SearchBarProps) {
  const isHero = variant === 'hero';

  return (
    <div className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-3xl mx-auto">
      <div className="relative flex-grow w-full">
        {hasIcon && (
          <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        )}
        <input
          type={type}
          placeholder={placeholder}
          className={`w-full bg-white body-l text-neutral-900 outline-none transition-colors rounded-full py-4 ${isHero ? 'border-none shadow-sm' : 'border border-neutral-300 focus:border-primary-500'
            } ${hasIcon ? 'pl-16 pr-6' : 'px-6'}`}
        />
      </div>
      <button className="w-full sm:w-auto bg-secondary-400 hover:bg-secondary-500 text-neutral-900 label-l px-10 py-4 rounded-full transition-colors whitespace-nowrap">
        {buttonText}
      </button>
    </div>
  );
}
