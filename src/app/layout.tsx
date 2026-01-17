import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Sonu Sharma - Portfolio",
  description: "Freelance Web Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <div className="container relative mx-auto max-w-4xl bg-background px-4 pt-4 pb-8 md:px-6 md:pt-8 md:pb-12 min-h-screen flex flex-col">
            <div className="absolute left-0 top-0 bottom-0 w-px hidden md:block border-l border-dotted border-muted-foreground/30 opacity-100 z-50 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-px hidden md:block border-r border-dotted border-muted-foreground/30 opacity-100 z-50 pointer-events-none"></div>
            <Navbar />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
