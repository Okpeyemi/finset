import React from "react";
import Badge from "./Badge";
import Boutton from "./Boutton";
import { ArrowUpRight, MoveUp } from "lucide-react";

type CardProps = {
  title: string;
  price: string;
  valuePercentage: string;
  vs: string;
  className?: string;
  className2?: string;
}

const Card: React.FC<CardProps> = ({ title, price, valuePercentage, vs, className="", className2="" }) => {
  return (
    <div className={`flex justify-between w-full rounded-[10px] border border-border p-1 hover:bg-popover hover:border-secondary max-lg:wrap ${className}`}>
      <div className="m-3">
        <h5 className="font-lufgaMedium mb-5">{title}</h5>
        <h3 className="my-2 lg:w-[150px]">${price}</h3>
        <div className="flex items-center">
          <Badge text={valuePercentage} className={className2} Icon={MoveUp} />
          <p className="ml-2">{vs}</p>
        </div>
      </div>
      <div>
        <Boutton
          className="border border-border text-foreground rounded-[10px] m-2 hover:bg-primary hover:border-primary hover:text-white"
          Icon={ArrowUpRight}
        />
      </div>
    </div>
  );
};

export default Card;
