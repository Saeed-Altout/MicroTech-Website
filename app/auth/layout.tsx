import type { Metadata } from "next";
import { Logo } from "@/components/logo";

export const metadata: Metadata = {
  title: "Auth",
  description: "",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <nav className="fixed w-full h-16 top-0 left-0 bg-background z-20">
        <div className="container h-full flex justify-between items-center">
          <Logo />
        </div>
      </nav>

      <div className="h-full flex justify-center items-center">{children}</div>
    </>
  );
}
