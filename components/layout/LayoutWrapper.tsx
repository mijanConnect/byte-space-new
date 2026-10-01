"use client";

import { usePathname } from "next/navigation";

interface LayoutWrapperProps {
  navbar: React.ReactNode;
  footer: React.ReactNode;
  children: React.ReactNode;
}

export function LayoutWrapper({ navbar, footer, children }: LayoutWrapperProps) {
  const pathname = usePathname();
  const isAuthPage = pathname === "/login" || pathname === "/register";

  return (
    <>
      {!isAuthPage && navbar}
      <main className="flex-grow flex flex-col">
        {children}
      </main>
      {!isAuthPage && footer}
    </>
  );
}
