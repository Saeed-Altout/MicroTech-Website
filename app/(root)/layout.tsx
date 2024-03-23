import { Footer } from "./components/footer";
import { Navbar } from "./components/navbar";

import { ScrollTop } from "@/components/scroll-top";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <header className="w-full">
        <Navbar />
      </header>
      <main className="flex-1 w-full">
        <ScrollTop />
        {children}
      </main>
      <footer className="w-full">
        <Footer />
      </footer>
    </>
  );
}
