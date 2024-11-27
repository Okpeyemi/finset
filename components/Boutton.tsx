import { Plus } from "lucide-react";
import React from "react";

type BouttonProps = {
  text?: string;
  Icon?: React.ElementType;
  Icon2?: React.ElementType;
  className?: string;
};

const Boutton: React.FC<BouttonProps> = ({
  text,
  Icon,
  Icon2,
  className = "",
}) => {
  return (
    <div
      className={`font-lufgaRegular flex items-center px-4 py-3 w-fit cursor-pointer ${className}`}
    >
      {text ? (
        <>
          {Icon && <Icon className="mr-2" />}
          {text}
          {Icon2 && <Icon2 className="ml-2" />}
        </>
      ) : (
        <>
          {Icon && <Icon />}
          {Icon2 && <Icon2 />}
        </>
      )}
    </div>
  );
};

export default Boutton;
