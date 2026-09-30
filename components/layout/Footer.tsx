import Link from "next/link";
import { LogoIconBlack } from "../icons/LogoIconBlack";
import { FooterSearchBar } from "./FooterSearchBar";

export function Footer() {
  return (
    <footer className="bg-background border-t border-neutral-200 mt-auto pt-16 pb-8">
      <div className="page-layout">
        {/* Top Section */}
        <div className="col-span-12 lg:col-span-5 flex flex-col gap-6">
          <Link href="/" className="flex items-center gap-2">
            <LogoIconBlack className="w-[171px] h-[37px]" />
          </Link>
          <p className="body-l text-neutral-600 mt-2">
            Stay Up to date with our latest features and releases by joining our newsletter.
          </p>
          <div className="mt-4">
            <FooterSearchBar />
          </div>
          <p className="body-xs text-neutral-500 mt-2">
            By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
          </p>
        </div>

        {/* Links Section */}
        <div className="col-span-12 lg:col-span-6 lg:col-start-7 grid grid-cols-2 md:grid-cols-3 gap-8 mt-12 lg:mt-0">
          {/* Column 1 */}
          <div className="flex flex-col gap-4">
            <Link href="#" className="body-m text-neutral-600 hover:text-primary-500 transition-colors">Featured Courses</Link>
            <Link href="#" className="body-m text-neutral-600 hover:text-primary-500 transition-colors">Featured Categories</Link>
            <Link href="#" className="body-m text-neutral-600 hover:text-primary-500 transition-colors">Business</Link>
            <Link href="#" className="body-m text-neutral-600 hover:text-primary-500 transition-colors">IT</Link>
            <Link href="#" className="body-m text-neutral-600 hover:text-primary-500 transition-colors">Design</Link>
          </div>
          {/* Column 2 */}
          <div className="flex flex-col gap-4">
            <Link href="#" className="body-m text-neutral-600 hover:text-primary-500 transition-colors">Development</Link>
            <Link href="#" className="body-m text-neutral-600 hover:text-primary-500 transition-colors">Marketing</Link>
            <Link href="#" className="body-m text-neutral-600 hover:text-primary-500 transition-colors">Photography</Link>
            <Link href="#" className="body-m text-neutral-600 hover:text-primary-500 transition-colors">Finance</Link>
            <Link href="#" className="body-m text-neutral-600 hover:text-primary-500 transition-colors">Sport</Link>
          </div>
          {/* Column 3 */}
          <div className="flex flex-col gap-4">
            <Link href="#" className="body-m text-neutral-600 hover:text-primary-500 transition-colors">Become a Creator</Link>
            <Link href="#" className="body-m text-neutral-600 hover:text-primary-500 transition-colors">Affiliate Program</Link>
            <Link href="#" className="body-m text-neutral-600 hover:text-primary-500 transition-colors">Contact</Link>
            <Link href="#" className="body-m text-neutral-600 hover:text-primary-500 transition-colors">Help</Link>
            <Link href="#" className="body-m text-neutral-600 hover:text-primary-500 transition-colors">About</Link>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="col-span-12 mt-16 pt-8 border-t border-neutral-300 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="body-s text-neutral-600">
            @ 2023 ByteSpace. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="body-s text-neutral-600 hover:text-primary-500 transition-colors">Privacy Policy</Link>
            <Link href="#" className="body-s text-neutral-600 hover:text-primary-500 transition-colors">Terms of Service</Link>
            <Link href="#" className="body-s text-neutral-600 hover:text-primary-500 transition-colors">Cookies Settings</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
