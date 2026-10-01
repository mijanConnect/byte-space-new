import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Byte Space New",
  description: "This is a landing page of Byte Space.",
};

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LayoutWrapper } from "@/components/layout/LayoutWrapper";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className="h-full antialiased font-sans"
    >
      <body className="min-h-full flex flex-col font-sans">
        <LayoutWrapper navbar={<Navbar />} footer={<Footer />}>
          {children}
        </LayoutWrapper>
      </body>
    </html>
  );
}
