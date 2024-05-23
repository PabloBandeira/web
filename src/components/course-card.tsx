import { Typography, Card, CardBody, CardHeader, Button } from "@material-tailwind/react";
import Image from "next/image";

interface CourseCardProps {
  img: string;
  title: string;
  desc: string;
  buttonLabel: string;
}

export function CourseCard({ img, title, desc, buttonLabel }: CourseCardProps) {
  return (
    <Card color="transparent" shadow={false} {...(undefined as any)}>
      <CardHeader floated={false} className="mx-0 mt-0 mb-6 h-48" {...(undefined as any)}>
        <Image width={768} height={768} src={img} alt={title} className="h-full w-full object-cover" />
      </CardHeader>
      <CardBody className="p-0" {...(undefined as any)}>
        <a
          href="#"
          className="text-blue-gray-900 transition-colors hover:text-gray-800"
        >
          <Typography variant="h5" className="mb-2" {...(undefined as any)}>
            {title}
          </Typography>
        </a>
        <Typography className="mb-6 font-normal !text-gray-500" {...(undefined as any)}>
          {desc}
        </Typography>
        <Button color="gray" size="sm" {...(undefined as any)}>
          {buttonLabel}
        </Button>
      </CardBody>
    </Card>
  );
}

export default CourseCard;