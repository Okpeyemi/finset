import React from "react";

type BouttonProps = {
  text?: string;
  Icon?: React.ElementType;
  Icon2?: React.ElementType;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
};

const Boutton: React.FC<BouttonProps> = ({
  text,
  Icon,
  Icon2,
  className = "",
  onClick,
}) => {
  return (
    <div
      className={`font-lufgaRegular flex items-center max-sm:px-2 max-sm:py-[6px] px-4 py-3 w-fit cursor-pointer ${className}`}
      onClick={onClick}
    >
      {text ? (
        <>
          {Icon && <Icon className="mr-2" />}
          {text}
          {Icon2 && <Icon2 className="ml-2" />}
        </>
      ) : (
        <>
          {Icon && <Icon className="max-sm:w-6 max-sm:h-6" />}
          {Icon2 && <Icon2 />}
        </>
      )}
    </div>
  );
};

export default Boutton;
