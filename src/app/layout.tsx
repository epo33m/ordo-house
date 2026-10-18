import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { ThemeSync } from "@/components/theme-toggle";
import "./globals.css";

// Variable weight, latin subset, self-hosted by next/font at build time. The
// generated fallback metrics keep the first paint from shifting, which is why
// this is preferred over a <link> to a font CDN.
const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "ORDO",
  description: "Strategy, design, and technology turned into considered digital systems.",
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#1F1F1F" },
    { media: "(prefers-color-scheme: light)", color: "#F4F1EC" },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${jakarta.variable} h-full`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col bg-canvas text-text font-body">
        {children}
        {/*
          Applies the stored theme before the browser paints, so there is no
          flash. Reading it here rather than in the layout's render keeps every
          route statically prerenderable, which reading cookies() would not.
        */}
        <ThemeSync />
      </body>
    </html>
  );
}
