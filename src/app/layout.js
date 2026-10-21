import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Fati — CRM and business management for SaaS teams",
  description:
    "Manage leads, customers, projects and revenue in one workspace. Fati is the CRM and business management platform for SaaS teams.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
