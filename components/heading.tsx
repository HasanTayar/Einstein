import { HeadingProps } from "@/constants/interfaces";
import { cn } from "@/lib/utils";
import React from "react";

const Heading = ({
  title,
  description,
  icon: Icon,
  bgColor,
  iconColor,
}: HeadingProps) => {
  return (
    <div className="flex items-center gap-x-3 mb-8">
      {" "}
      <div className={cn("p-2 w-fit rounded-md", bgColor)}>
        <Icon className={cn("w-10 h-10", iconColor)} />
      </div>
      <div>
        <h2 className="text-3xl font-bold">{title}</h2>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

export default Heading;
