import { MoveUp } from "lucide-react";
import React from "react";

type BadgeProps = {
  text: string;
  Icon?: React.ElementType;
  className?: string;
};

const Badge: React.FC<BadgeProps> = ({ text, Icon = MoveUp, className = "" }) => {
  return (
    <div className={`${className} flex w-fit items-center px-2 py-1 text-[15px] rounded-full`}>
      <Icon className="w-[15px] h-[15px]" />
      {text}
    </div>
  );
};

export default Badge;
