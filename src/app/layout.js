import { Inter, DM_Sans, Geist, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Landing typography: DM Sans for display, Geist for text. Inter stays for the dashboard.
const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm",
  display: "swap",
  axes: ["opsz"],
});

// Used only for the large footer wordmark.
const wordmark = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-wordmark",
  display: "swap",
  axes: ["opsz", "wdth"],
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-text",
  display: "swap",
});

export const metadata = {
  title: "Fati — CRM and business management for SaaS teams",
  description:
    "Manage leads, customers, projects and revenue in one workspace. Fati is the CRM and business management platform for SaaS teams.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${dmSans.variable} ${geist.variable} ${wordmark.variable}`}>
      <body>{children}</body>
    </html>
  );
}
