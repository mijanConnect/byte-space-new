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
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundSize: "80px 80px",
          backgroundImage: `
            linear-gradient(to right, #ffffff 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff 1px, transparent 1px)
          `,
          backgroundPosition: "center top"
        }}
      />

      <div className="page-layout relative z-10 w-full py-12 lg:py-16 items-center">
        {/* Logo - Takes the full top row */}
        <div className="hidden lg:block col-span-12">
          <Link href="/" className="inline-block hover:opacity-80 transition-opacity">
            <LogoMarkIcon className="text-[#D4FB20] w-[29px] h-[32px]" />
          </Link>
        </div>

        {/* Left side (Branding & Art) */}
        <div className="hidden lg:flex col-span-12 lg:col-span-6 flex-col h-full lg:-mt-4">
          <div className="max-w-lg text-white mb-10 lg:mb-12">
            <h1 className="heading-s md:heading-m mb-4">{title}</h1>
            <p className="body-s md:body-m text-white/80 leading-relaxed">
              {subtitle}
            </p>
          </div>

          <div className="relative w-full min-h-[350px] lg:min-h-[550px] flex-grow">
            <Image
              src="/images/register/register-art.png"
              alt="Authentication Artwork"
              fill
              className="object-contain object-left lg:object-left"
              priority
            />
          </div>
        </div>

        {/* Right side (Form) */}
        <div className="col-span-12 lg:col-span-6 flex items-center justify-center lg:justify-end mt-12 lg:mt-0">
          <div className="bg-white rounded-[32px] w-full max-w-[500px] p-8 md:p-12 shadow-2xl">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
