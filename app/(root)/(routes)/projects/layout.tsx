import * as React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MicroTech - Projects",
  description: "At MicroTech, we're dedicated to transforming your ideas.",
};

export default function ProjectsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <React.Fragment>{children}</React.Fragment>;
}
