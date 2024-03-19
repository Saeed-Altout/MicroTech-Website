import { LucideIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export interface FeatureCardProps {
  title: string;
  description?: string;
  icon?: LucideIcon | any;
}

export const FeatureCard = ({
  title,
  description,
  icon: Icon,
}: FeatureCardProps) => {
  return (
    <Card className="flex flex-col justify-between hover:scale-105 hover:-translate-y-4 ease-in-out duration-300 hover:bg-primary-foreground">
      <div>
        <CardHeader className="!flex flex-row">
          <Icon className="h-8 w-8 mr-2" />
          <CardTitle className="font-medium">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{description}</p>
        </CardContent>
      </div>
    </Card>
  );
};
