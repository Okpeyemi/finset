import React from "react";
import Boutton from "./Boutton";
import { ChevronDown, RotateCw, X } from "lucide-react";

const FilterBar2 = () => {
  return (
    <div
      className="flex w-full overflow-x-auto"
      style={{ msOverflowStyle: "none", scrollbarWidth: "none" }}
    >
      <Boutton
        className="rounded-[10px] text-primary bg-muted border mr-2 border-primary max-sm:hidden"
        text="In progress"
        Icon2={X}
      />
      <Boutton
        className="rounded-[10px] text-foreground border border-border mr-2 hover:bg-muted hover:border-secondary max-sm:hidden"
        text="Due date"
        Icon2={ChevronDown}
      />
      <Boutton
        className="rounded-[10px] text-foreground border border-border mr-2 hover:bg-muted hover:border-secondary max-sm:hidden"
        text="Amount"
        Icon2={ChevronDown}
      />
      <Boutton
        className="rounded-[10px] text-primary mr-2 hover:bg-muted hover:border-secondary max-sm:hidden"
        text="Reset all"
        Icon={RotateCw}
      />
    </div>
  );
};

export default FilterBar2;
