import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import { Toaster } from "@/components/ui/sonner";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "MicroTech",
  description:
    "At MicroTech, we're dedicated to transforming your ideas into powerful digital experiences. As a leading application design and development company, we specialize in creating customized, cutting-edge solutions that propel your business forward. Discover Our Expertise",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/logo-icon.svg",
        href: "/logo-icon.svg",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/logo-icon-dark.svg",
        href: "/logo-icon-dark.svg",
      },
    ],
  },
};

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={poppins.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
