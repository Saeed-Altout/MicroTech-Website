"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { useMenu } from "@/hooks/use-menu";

export interface NavItemProps {
  label: string;
  href: string;
  active: boolean;
}

export const NavItems = () => {
  const pathname = usePathname();
  const menu = useMenu();

  const routes: NavItemProps[] = [
    {
      label: "home",
      href: "/",
      active: pathname === "/",
    },
    {
      label: "projects",
      href: "/projects",
      active: pathname === "/projects",
    },
    {
      label: "contact us",
      href: "/contact-us",
      active: pathname === "/contact-us",
    },
  ];
  return (
    <>
      {routes?.map(
        ({ label, href, active }: NavItemProps, index: React.Key) => (
          <li key={index}>
            <Button
              variant="link"
              size="sm"
              className={cn(
                "capitalize text-muted-foreground font-medium text-sm",
                active && "text-primary"
              )}
              onClick={() => menu.onClose()}
              asChild
            >
              <Link href={href}>{label}</Link>
            </Button>
          </li>
        )
      )}
    </>
  );
};
