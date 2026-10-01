import React, { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export function Input({ label, className = "", ...props }: InputProps) {
  return (
    <div className="flex flex-col gap-2 w-full">
      <label className="label-xs text-neutral-900 font-semibold">{label}</label>
      <input
        className={`w-full px-4 py-3.5 rounded-2xl border border-neutral-200 bg-white text-neutral-900 body-s placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-all ${className}`}
        {...props}
      />
    </div>
  );
}
