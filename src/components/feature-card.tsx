import React from "react";
import {
  Typography,
  Card,
  CardBody,
} from "@material-tailwind/react";

interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
}
export function FeatureCard({ icon: Icon, title, children }: FeatureCardProps) {
  return (
    <Card color="transparent" shadow={false} {...(undefined as any)}>
      <CardBody className="grid place-items-start px-0" {...(undefined as any)}>
        <div className="mb-3 grid place-content-center rounded-lg text-left text-blue-gray-900">
          <Icon className="h-6 w-6" />
        </div>
        <Typography variant="h5" color="blue-gray" className="mb-2" {...(undefined as any)}>
          {title}
        </Typography>
        <Typography className="text-gray-500 font-normal" {...(undefined as any)}>
          {children}
        </Typography>
      </CardBody>
    </Card>
  );
}


export default FeatureCard;
