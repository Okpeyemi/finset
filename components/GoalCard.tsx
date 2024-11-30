import React from "react";
import Boutton from "./Boutton";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { Progress } from "./ui/progress";

type GoalCardProps = {
  title: string;
  price: string;
  goalPrice: string;
  dueDate: string;
  valuePercentage: number;
  leftToGoal?: string;
  className?: string;
};

const GoalCard: React.FC<GoalCardProps> = ({
  title,
  price,
  valuePercentage,
  dueDate,
  goalPrice,
  leftToGoal,
  className = "",
}) => {
  return (
    <div
      className={`flex flex-col w-full items-center rounded-[10px] border border-border p-1 hover:bg-popover hover:border-secondary max-lg:wrap ${className}`}
    >
      <span className="h-1 w-20 mt-[-5px] bg-success rounded-b-[10px]"></span>
      <div className="flex justify-between w-full">
        <div className="w-full m-3 font-lufgaRegular">
          <div>
            <div className="flex justify-between">
              <h5 className="font-lufgaMedium">{title}</h5>
              <Boutton
                className="border border-border text-foreground rounded-[10px] m-2 hover:bg-primary hover:border-primary hover:text-white"
                Icon={ArrowUpRight}
              />
            </div>
            <div className="flex items-center">
              <p>Due Date - {dueDate}</p>
              <ChevronDown />
            </div>
          </div>
          <div className="flex items-center">
            <h3 className="my-2">${price}</h3>
            <span className="text-[10px] text-primary mt-5">/${goalPrice}</span>
          </div>
          <div className="flex flex-col justify-between">
            <Progress value={valuePercentage} />
            <div className="flex justify-between mt-2">
              <p>Left to complete the goal</p>
              <span className="">{leftToGoal}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoalCard;
