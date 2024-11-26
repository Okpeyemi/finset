import React from "react";
import Badge from "./Badge";
import Boutton from "./Boutton";
import { ArrowUpRight } from "lucide-react";

const Card = () => {
  return (
    <div className="flex w-[400px] justify-between rounded-[30px] border-2 border-border p-1">
      <div className="m-3">
        <h5 className="font-lufgaMedium mb-5">Total balance</h5>
        <h3 className="my-2">$15,700.00</h3>
        <div className="flex items-center">
          <Badge text="12.1%" />
          <p className="ml-2">vs last month</p>
        </div>
      </div>
      <div>
        <Boutton
          className="border-2 border-border text-foreground rounded-full"
          Icon={ArrowUpRight}
        />
      </div>
    </div>
  );
};

export default Card;
