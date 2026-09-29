import Link from "next/link";
import { LogoIcon } from "../icons/LogoIcon";

export function Footer() {
  return (
    <footer className="page-layout py-12 bg-neutral-50 border-t border-neutral-200 mt-auto">
      <div className="col-span-12 md:col-span-4 flex flex-col gap-4">
        <Link href="/" className="flex items-center gap-2 text-primary-500">
          <LogoIcon className="w-6 h-6" />
        </Link>
        <p className="body-s text-neutral-500">
          We ignite opportunity by setting the world in motion. Building the future of digital experiences.
        </p>
      </div>
      <div className="col-span-12 md:col-span-2 md:col-start-9 flex flex-col gap-4">
        <h4 className="label-l text-neutral-900">Links</h4>
        <Link href="#" className="body-s text-neutral-500 hover:text-primary-500">Home</Link>
        <Link href="#" className="body-s text-neutral-500 hover:text-primary-500">Features</Link>
        <Link href="#" className="body-s text-neutral-500 hover:text-primary-500">Pricing</Link>
      </div>
      <div className="col-span-12 md:col-span-2 flex flex-col gap-4">
        <h4 className="label-l text-neutral-900">Legal</h4>
        <Link href="#" className="body-s text-neutral-500 hover:text-primary-500">Privacy Policy</Link>
        <Link href="#" className="body-s text-neutral-500 hover:text-primary-500">Terms of Service</Link>
      </div>
    </footer>
  );
}
