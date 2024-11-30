import React from 'react'
import Dropdown from './Dropdown';

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
    className
}) => {
  return (
    <div className="border border-border rounded-[10px] p-1 w-full">
        <div className="flex justify-between m-5">
            <h5>{title}</h5>
            <Dropdown
                title="This year"
                text1="Admin"
                text2="Manager"
                text3="User"
            />
        </div>
        <h3 className="my-3">{number}</h3>

    </div>
  )
}

export default GoalsTotal