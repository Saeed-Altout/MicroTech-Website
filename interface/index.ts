import { MotionProps } from "framer-motion";
import { LucideIcon } from "lucide-react";
import * as React from "react";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;
  container?: boolean;
  children?: React.ReactNode;
}
export interface DivProps extends MotionProps {
  children?: React.ReactNode;
}

export interface TextProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
}

export interface HeadingProps extends React.HTMLAttributes<HTMLElement> {
  title?: string;
  description?: string;
  children?: React.ReactNode;
}
