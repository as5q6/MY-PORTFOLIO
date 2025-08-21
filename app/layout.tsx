import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Analytics } from '@vercel/analytics/react';
import "./globals.css";

const poppins = Poppins({
  weight: ['300', '400', '500', '600'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Website Under Maintenance - Shaik Afrid Ali",
  description: "Website temporarily unavailable for maintenance and updates",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.className}>
      <body>
        <div className="background-effects">
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
          <div className="gradient-orb orb-3"></div>
          <div className="noise-overlay"></div>
        </div>
        {children}
        <Analytics />
      </body>
    </html>
  );
}