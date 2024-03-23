import Link from "next/link";
import { FaEnvelope, FaLocationArrow, FaPhoneAlt } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { Section } from "@/components/section";
import { Logo } from "@/components/logo";
import { ModeToggle } from "@/components/ui/mode-toggle";
import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsTelegram,
} from "react-icons/bs";

export const Footer = () => {
  return (
    <div className="border-t">
      <Section id="footer" className="space-y-5">
        <div className="flex justify-center items-center flex-col gap-10 md:justify-between md:flex-row">
          <Logo className="w-40" />
          <div className="flex items-center gap-5 w-fit px-8 py-2 border border-dashed rounded-md">
            <p>Stay Connected</p>
            <div>
              <Button asChild variant="ghost" size="icon">
                <Link href="https://t.me/microtechdev" target="_blank">
                  <span className="sr-only">Telegram</span>
                  <BsTelegram className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="ghost" size="icon">
                <Link
                  href="https://www.facebook.com/microtechdev/"
                  target="_blank"
                >
                  <span className="sr-only">Facebook</span>
                  <BsFacebook className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="ghost" size="icon">
                <Link
                  href="https://www.linkedin.com/company/microtechdev"
                  target="_blank"
                >
                  <span className="sr-only">Linkedin</span>
                  <BsLinkedin className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="flex w-full justify-between items-center flex-col md:flex-row gap-10 ">
          <div className="flex flex-1 items-center justify-center md:justify-start flex-wrap gap-5">
            <Button variant="link" asChild className="px-0">
              <Link href="mailto:contact@microtechdev.com" target="_blank">
                <FaEnvelope className="h-4 w-4 mr-2" />
                contact@microtechdev.com
              </Link>
            </Button>
            <Button variant="link" asChild className="px-0">
              <Link href="https://wa.me/+963994736473" target="_blank">
                <FaPhoneAlt className="h-4 w-4 mr-2" />
                +963 994 736 473
              </Link>
            </Button>
            <Button variant="link" asChild className="px-0">
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
