import React from "react";
import Dropdown from "./Dropdown";
import Boutton from "./Boutton";
import { AlarmClock, AlarmClockMinus, AlarmClockOff } from "lucide-react";

type GoalsTotalProps = {
  title: string;
  number: string;
  notStarted: string;
  inProgress: string;
  canceled: string;
  finished: string;
  className?: string;
};

const GoalsTotal: React.FC<GoalsTotalProps> = ({
  title,
  number,
  notStarted,
  inProgress,
  canceled,
  finished,
}) => {
  return (
    <div className="border border-border rounded-[10px] p-1 w-[full]">
      <div className="m-5">
      <div className="flex justify-between">
        <h5 className="font-lufgaMedium max-sm:text-[20px]">{title}</h5>
        <Dropdown
          className="max-sm:w-[100px]"
          title="This year"
          text1="Admin"
          text2="Manager"
          text3="User"
        />
      </div>
      <h3 className="my-2">{number}</h3>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4 max-sm:flex-col justify-between">
          <div className="flex border border-border rounded-[10px] w-full p-1">
            <Boutton
              className="text-warning bg-[#FEF4E1] rounded-[10px]"
              Icon={AlarmClockOff}
            />
            <div className="flex mx-8 max-sm:mx-1 items-center justify-between w-full">
              <h6 className="text-warning font-lufgaMedium">Not started</h6>
              <h5>{notStarted}</h5>
            </div>
          </div>
          <div className="flex border border-border rounded-[10px] w-full p-1">
            <Boutton
              className="text-success bg-success-foreground rounded-[10px]"
              Icon={AlarmClock}
            />
            <div className="flex mx-8 max-sm:mx-1 items-center justify-between w-full">
              <h6 className="text-success font-lufgaMedium">In progress</h6>
              <h5>{inProgress}</h5>
            </div>
          </div>
        </div>
        <div className="flex gap-4 max-sm:flex-col justify-between">
          <div className="flex border border-border rounded-[10px] w-full p-1">
            <Boutton
              className="text-destructive bg-destructive-foreground rounded-[10px]"
              Icon={AlarmClockMinus}
            />
            <div className="flex mx-8 max-sm:mx-1 items-center justify-between w-full">
              <h6 className="text-destructive font-lufgaMedium">Canceled</h6>
              <h5>{canceled}</h5>
            </div>
          </div>
          <div className="flex border border-border rounded-[10px] w-full p-1">
            <Boutton
              className="text-primary bg-muted rounded-[10px]"
              Icon={AlarmClockOff}
            />
            <div className="flex mx-8 max-sm:mx-1 items-center justify-between w-full">
              <h6 className="text-primary font-lufgaMedium">Finished</h6>
              <h5>{finished}</h5>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default GoalsTotal;
