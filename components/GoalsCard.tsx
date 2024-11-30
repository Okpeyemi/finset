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
          title="MacBook Pro"
          price="412.50"
          valuePercentage={25}
          dueDate="7 Oct 2024"
          goalPrice="1,650"
          leftToGoal="1,237.50"
        />
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
          title="MacBook Pro"
          price="412.50"
          valuePercentage={25}
          dueDate="7 Oct 2024"
          goalPrice="1,650"
          leftToGoal="1,237.50"
        />
      </div>
    </div>
  );
};

export default GoalsCard;
