import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { ArchiveHeader } from "@/components/layout/ArchiveHeader";
import { ArchiveFooter } from "@/components/layout/ArchiveFooter";
import { monumentExtended, gtSuper, wildYouth, southampton } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "VISHWAS // THE ARCHIVE",
  description:
    "The personal digital archive of Vishwas S K — full-stack software engineer, visual creator, and cinephile.",
  keywords: [
    "Vishwas S K",
    "Portfolio",
    "The Archive",
    "Full-Stack Developer",
    "Next.js",
    "TypeScript",
    "Bangalore",
    "Photography",
    "Color Grading",
    "Cinema",
  ],
  authors: [{ name: "Vishwas S K" }],
  openGraph: {
    title: "VISHWAS // THE ARCHIVE",
    description:
      "A digital exhibition exploring code, landscape photography, color grading, and cinema.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${monumentExtended.variable} ${gtSuper.variable} ${wildYouth.variable} ${southampton.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-[#f9f9f7] dark:bg-[#090a0d] text-neutral-900 dark:text-neutral-100 antialiased selection:bg-blue-600 selection:text-white">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ArchiveHeader />
          <main className="flex-1 w-full">{children}</main>
          <ArchiveFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
