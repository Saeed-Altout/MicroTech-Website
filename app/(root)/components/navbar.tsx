"use client";

import { cn } from "@/lib/utils";

import { Logo } from "@/components/logo";
import { Toggle } from "@/components/toggle";
import { NavItems } from "@/components/nav-items";

import { UserButton } from "@/components/auth/user-button";
import { Sheet, SheetContent } from "@/components/ui/sheet";

import { useMenu } from "@/hooks/use-menu";
import { useScrollTop } from "@/hooks/use-scroll-top";

export const Navbar = () => {
  const menu = useMenu();
  const scrolled = useScrollTop();

  const onChange = (open: boolean) => {
    if (!open) {
      menu.onClose();
    }
  };

  return (
    <>
      <nav
        className={cn(
          "fixed w-full h-16 top-0 left-0 bg-background z-20",
          scrolled && "border-b"
        )}
      >
        <div className="container h-full flex justify-between items-center">
          <Logo />
          <Toggle />
          <ul className="hidden md:flex items-center justify-end gap-x-2">
            <NavItems />
            <UserButton />
          </ul>

          <Sheet open={menu.isOpen} onOpenChange={onChange}>
            <SheetContent>
              <ul className="flex flex-col justify-start gap-y-2 w-full h-full">
                <NavItems />
                <div className="mt-auto ml-auto">
                  <UserButton />
                </div>
              </ul>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
      <div className="h-10 w-full block" />
    </>
  );
};
