import Image from "next/image";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export interface ServiceCardProps {
  title: string;
  description?: string;
  image?: any;
}

export const ServiceCard = ({
  title,
  description,
  image,
}: ServiceCardProps) => {
  return (
    <Card>
      <CardHeader>
        <Image src={image} alt={title} width={60} />
        <CardTitle className="pt-2 font-medium">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{description}</p>
      </CardContent>
    </Card>
  );
};
