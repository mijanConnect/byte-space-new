import React from 'react';

export function FooterSearchBar() {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-4 w-full">
      <input
        type="email"
        placeholder="Enter your email"
        className="flex-grow w-full border border-neutral-300 rounded-full px-6 py-3 body-m text-neutral-900 outline-none focus:border-primary-500 transition-colors"
      />
      <button className="w-full sm:w-auto bg-[#CBFC01] hover:bg-[#b5e301] text-neutral-900 label-l px-8 py-3 rounded-full transition-colors whitespace-nowrap">
        Search
      </button>
    </div>
  );
}
