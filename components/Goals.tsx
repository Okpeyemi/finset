import React from "react";
import Badge from "./Badge";
import Boutton from "./Boutton";
import { ArrowUpRight } from "lucide-react";
import { Progress } from "./ui/progress";

type GoalsProps = {
  title: string;
  subtitle1?: string;
  subtitle2?: string;
  subtitle3?: string;
  subtitle4?: string;
  percentage1?: number;
  percentage2?: number;
  percentage3?: number;
  percentage4?: number;
  price1?: string;
  price2?: string;
  price3?: string;
  price4?: string;
  className?: string;
  className2?: string;
};

const Goals: React.FC<GoalsProps> = ({
  title,
  subtitle1,
  subtitle2,
  subtitle3,
  subtitle4,
  percentage1,
  percentage2,
  percentage3,
  percentage4,
  price1,
  price2,
  price3,
  price4,
  className = "",
  className2 = "",
}) => {
  return (
    <div
      className={`w-full h-full rounded-[10px] border border-border p-2 hover:bg-popover hover:border-secondary max-lg:wrap ${className}`}
    >
      <div className="flex justify-between items-center">
        <h5 className="m-5 font-lufgaMedium">{title}</h5>
        <Boutton
          className="border border-border text-foreground rounded-[10px] m-2 hover:bg-primary hover:border-primary hover:text-white"
          Icon={ArrowUpRight}
        />
      </div>
      <div className="mx-5 flex flex-col">
        <div className="mb-2">
          <div className="flex justify-between items-center">
            <h6 className="mb-1 font-lufgaMedium">
              {subtitle1} <span className="font-lufgaRegular bg-secondary text-white px-1 rounded-[10px]">{percentage1}%</span>
            </h6>
            <span className="font-lufgaRegular text-primary">${price1}</span>
          </div>
          <Progress value={percentage1} />
        </div>
        <div className="mb-2">
          <div className="flex justify-between items-center">
            <h6 className="mb-1 font-lufgaMedium">
              {subtitle2} <span className="font-lufgaRegular bg-secondary text-white px-1 rounded-[10px]">{percentage2}%</span>
            </h6>
            <span className="font-lufgaRegular text-primary">${price2}</span>
          </div>
          <Progress value={percentage2} />
        </div>
        <div className="mb-2">
          <div className="flex justify-between items-center">
            <h6 className="mb-1 font-lufgaMedium">
              {subtitle3} <span className="font-lufgaRegular bg-secondary text-white px-1 rounded-[10px]">{percentage3}%</span>
            </h6>
            <span className="font-lufgaRegular text-primary">${price3}</span>
          </div>
          <Progress value={percentage3} />
        </div>
        <div className="mb-2">
          <div className="flex justify-between items-center">
            <h6 className="mb-1 font-lufgaMedium">
              {subtitle4} <span className="font-lufgaRegular bg-secondary text-white px-1 rounded-[10px]">{percentage4}%</span>
            </h6>
            <span className="font-lufgaRegular text-primary">${price4}</span>
          </div>
          <Progress value={percentage4} />
        </div>
      </div>
    </div>
  );
};

export default Goals;
