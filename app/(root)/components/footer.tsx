import Link from "next/link";
import { FaEnvelope, FaLocationArrow, FaPhoneAlt } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { Section } from "@/components/section";
import { Logo } from "@/components/logo";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { BsFacebook, BsInstagram, BsTelegram } from "react-icons/bs";

export const Footer = () => {
  return (
    <div className="border-t">
      <Section id="footer" className="space-y-5">
        <div className="flex justify-center items-center flex-col gap-10 md:justify-between md:flex-row">
          <Logo className="w-40" />
          <div className="flex items-center gap-5 w-fit px-8 py-2 border border-dashed rounded-md">
            <p>Stay Connected</p>
            <div>
              <Button size="icon" variant="ghost" asChild>
                <Link href="/">
                  <span className="sr-only">Instagram</span>
                  <BsInstagram className="h-4 w-4" />
                </Link>
              </Button>
              <Button size="icon" variant="ghost" asChild>
                <Link href="/">
                  <span className="sr-only">Facebook</span>
                  <BsFacebook className="h-4 w-4" />
                </Link>
              </Button>
              <Button size="icon" variant="ghost" asChild>
                <Link href="/">
                  <span className="sr-only">Telegram</span>
                  <BsTelegram className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <Separator />

        <div className="flex w-full justify-between items-center flex-col md:flex-row gap-10 ">
          <div className="flex items-center flex-wrap gap-2">
            <Button variant="link" asChild>
              <Link href="/">
                <FaEnvelope className="h-4 w-4 mr-2" />
                microtech.softteam.com
              </Link>
            </Button>
            <Button variant="link" asChild>
              <Link href="/">
                <FaPhoneAlt className="h-4 w-4 mr-2" />
                +963 996 697 253
              </Link>
            </Button>
            <Button variant="link" asChild>
              <Link href="/">
                <FaLocationArrow className="h-4 w-4 mr-2" />
                <p>Syria, Damascus</p>
              </Link>
            </Button>
          </div>
          <p>
            © 2024 <span className="font-semibold">MicroTech</span>. All rights
            reserved.
          </p>
          <ModeToggle />
        </div>
      </Section>
    </div>
  );
};
