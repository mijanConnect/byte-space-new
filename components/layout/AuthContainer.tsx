import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { LogoMarkIcon } from "../icons/LogoMarkIcon";

interface AuthContainerProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

export function AuthContainer({ title, subtitle, children }: AuthContainerProps) {
  return (
    <div className="min-h-screen w-full bg-primary-700 relative overflow-hidden flex flex-col justify-center">
      {/* Background Grid */}
      <div
        className="absolute inset-0 opacity-[0.15] pointer-events-none"
        style={{
          backgroundSize: "80px 80px",
          backgroundImage: `
            linear-gradient(to right, #ffffff 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff 1px, transparent 1px)
          `,
          backgroundPosition: "center top"
        }}
      />

      {/* Mobile: simple centered card */}
      <div className="flex lg:hidden flex-col relative z-10 w-full flex-grow items-center justify-center px-5 py-8 gap-6">
        {/* Back to Home Button (Mobile) */}
        <div className="w-full max-w-[500px] flex justify-start">
          <Link href="/" className="flex items-center gap-2 text-white/90 hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            <span className="label-m">Back to Home</span>
          </Link>
        </div>

        <div className="bg-white rounded-[32px] w-full max-w-[500px] p-8 md:p-12 shadow-2xl">
          {children}
        </div>
      </div>

      {/* Desktop: two-column grid layout */}
      <div className="hidden lg:grid page-layout relative z-10 w-full py-12 lg:py-16 items-center">
        {/* Logo */}
        <div className="col-span-12">
          <Link href="/" className="inline-block hover:opacity-80 transition-opacity">
            <LogoMarkIcon className="text-[#D4FB20] w-[29px] h-[32px]" />
          </Link>
        </div>

        {/* Left side (Branding & Art) */}
        <div className="col-span-6 flex flex-col h-full -mt-4">
          <div className="max-w-lg text-white mb-10 lg:mb-12">
            <h1 className="heading-m mb-4">{title}</h1>
            <p className="body-m text-white/80 leading-relaxed">
              {subtitle}
            </p>
          </div>

          <div className="relative w-full min-h-[550px] flex-grow">
            <Image
              src="/images/register/register-art.png"
              alt="Authentication Artwork"
              fill
              sizes="50vw"
              className="object-contain object-left"
              priority
            />
          </div>
        </div>

        {/* Right side (Form) */}
        <div className="col-span-6 flex items-center justify-end">
          <div className="bg-white rounded-[32px] w-full max-w-[500px] p-12 shadow-2xl">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
