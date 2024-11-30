import React from "react";
import GoalCard from "./GoalCard";

const GoalsCard = () => {
  return (
    <div>
      <h6 className="text-[#82828C] mb-2">4 items</h6>
      <div className="flex gap-4 md:gap-[14px] lg:gap-3 xl:gap-1 justify-between w-full flex-wrap">
        <GoalCard
          className="xl:w-[24%] md:w-[49%]"
          title="MacBook Pro"
          price="412.50"
          valuePercentage={25}
          dueDate="7 Oct 2024"
          goalPrice="1,650"
          leftToGoal="1,237.50"
        />
        <GoalCard
          className="xl:w-[24%] md:w-[49%]"
          title="New car"
          price="25,000.50"
          valuePercentage={42}
          dueDate="25 Sep 2025"
          goalPrice="60,000"
          leftToGoal="34,999.50"
        />
        <GoalCard
          className="xl:w-[24%] md:w-[49%]"
          title="New house"
          price="5,000.50"
          valuePercentage={3}
          dueDate="20 Apr 2027"
          goalPrice="1,650"
          leftToGoal="145,000.50"
        />
        <GoalCard
          className="xl:w-[24%] md:w-[49%]"
          title="Vocation"
          price="2,500.50"
          valuePercentage={71}
          dueDate="7 Oct 2024"
          goalPrice="3,500"
          leftToGoal="1,000.00"
        />
      </div>
    </div>
  );
};

export default GoalsCard;
