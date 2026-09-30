"use client";

import Link from "next/link";
import { useState } from "react";
import { LogoIcon } from "../icons/LogoIcon";
import { CartIcon } from "../icons/CartIcon";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 w-full z-50 border-b border-primary-400/20">
      <div className="page-layout py-4 md:py-6 items-center">
        {/* Left: Logo */}
        <div className="col-span-6 md:col-span-3 flex items-center">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <LogoIcon className="w-[120px] h-auto md:w-[171px] md:h-[37px]" />
          </Link>
        </div>

        {/* Center: Navigation (Desktop) */}
        <nav className="hidden md:flex col-span-6 justify-center gap-8 items-center">
          <Link href="/" className="label-m text-neutral-50 hover:text-neutral-200 transition-colors">Home</Link>
          <Link href="/courses" className="label-m text-neutral-50 hover:text-neutral-200 transition-colors">Courses</Link>
          <Link href="/creators" className="label-m text-neutral-50 hover:text-neutral-200 transition-colors">Creators</Link>
        </nav>

        {/* Right: Auth & Cart (Desktop) */}
        <div className="hidden md:flex col-span-3 justify-end items-center gap-8">
          <Link href="/signin" className="label-m text-neutral-50 hover:text-neutral-200 transition-colors">Sign In</Link>
          <Link href="/join" className="label-m text-neutral-50 hover:text-neutral-200 transition-colors">Join Us</Link>
          <button className="text-neutral-50 hover:text-neutral-200 transition-colors">
            <CartIcon className="w-6 h-6" fill="currentColor" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="col-span-6 md:hidden flex justify-end items-center">
          <button
            className="text-neutral-50 p-2 -mr-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-6 pb-6 pt-2 flex flex-col gap-4 bg-primary-600">
          <Link href="/" className="label-m text-neutral-50">Home</Link>
          <Link href="/courses" className="label-m text-neutral-50">Courses</Link>
          <Link href="/creators" className="label-m text-neutral-50">Creators</Link>
          <div className="h-px bg-primary-500 my-2" />
          <Link href="/signin" className="label-m text-neutral-50">Sign In</Link>
          <Link href="/join" className="label-m text-neutral-50">Join Us</Link>
          <button className="flex items-center gap-2 label-m text-neutral-50 mt-2">
            <CartIcon className="w-6 h-6" fill="currentColor" />
            <span>Cart</span>
          </button>
        </div>
      )}
    </header>
  );
}
