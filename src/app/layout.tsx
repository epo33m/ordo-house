import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { ThemeSync } from "@/components/theme-toggle";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
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
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full`}
      suppressHydrationWarning
    >
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
