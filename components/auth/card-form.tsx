"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface CardFormProps {
  children: React.ReactNode;
  title: string;
  description: string;
  label: string;
  labelButtonBack: string;
  hrefButtonBack: string;
}

export const CardForm = ({
  children,
  title,
  description,
  label,
  labelButtonBack,
  hrefButtonBack = "/auth/login",
}: CardFormProps) => {
  return (
    <div className="border p-10 rounded-md w-full max-w-sm space-y-5 ">
      <div className="space-y-2">
        <h1 className="text-3xl">{title}</h1>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      <div className="w-[250px] md:w-[300px]">{children}</div>
      <div className="flex justify-start items-center gap-x-2">
        <p className="text-sm text-muted-foreground">{label}</p>
        <Button variant="link" className="px-0" asChild>
          <Link href={hrefButtonBack}>{labelButtonBack}</Link>
        </Button>
      </div>
    </div>
  );
};
