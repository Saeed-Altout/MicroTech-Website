import { cn } from "@/lib/utils";
import { SectionProps } from "@/interface";

export const Section = ({
  id,
  children,
  className,
  container = true,
  ...props
}: SectionProps) => {
  return (
    <section
      id={id}
      className={cn(
        "py-20 overflow-x-hidden",
        container && "container",
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
};
