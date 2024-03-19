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
      <header>
        <Navbar />
      </header>
      <main>
        <ScrollTop />
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
