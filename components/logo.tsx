import Link from "next/link";
import Image from "next/image";

import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

export const Logo = ({ className, ...props }: HTMLAttributes<HTMLElement>) => {
  return (
    <Link href="/" className={cn("relative w-36 h-10", className)} {...props}>
      <Image src="./logo.svg" alt="Logo" fill className="block dark:hidden" />
      <Image
        src="./logo-dark.svg"
        alt="Logo"
        fill
        className="hidden dark:block"
      />
    </Link>
  );
};
