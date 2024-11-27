import { MoveUp } from "lucide-react";
import React from "react";

type BadgeProps = {
  text: string;
  Icon?: React.ElementType;
};

const Badge: React.FC<BadgeProps> = ({ text, Icon = MoveUp }) => {
  return (
    <div className="bg-success-foreground text-success flex w-fit items-center px-2 py-1 text-[15px] rounded-full">
      <Icon className="w-[15px] h-[15px]" />
      {text}
    </div>
  );
};

export default Badge;
