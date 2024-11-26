import Boutton from "@/components/Boutton";
import NavBar from "@/components/Navbar/NavBar";
import { Calendar } from "@/components/ui/calendar";
import { CalendarDays } from "lucide-react";
import React from "react";

const page = () => {
  return (
    <div className="flex">
      <NavBar />
      <div className="mx-5 my-5 w-full">
        <h1>Welcome back, Maqsoud!</h1>
        <h5 className="text-[#82828C]">
          It is the best time to manage your finances
        </h5>
        <div className="flex justify-between">
          <div className="flex my-5">
            <div className="p-4 border-2 border-border w-fit rounded-full">
              <CalendarDays />
              {/* <Calendar
              mode="single"
              className="rounded-md border"
            /> */}
            </div>
            <div className="p-4 border-2 border-border w-fit rounded-full">
              <h6>This month</h6>
            </div>
          </div>
          <div className="flex my-5 items-center">
            <div className="p-4 border-2 border-border w-fit rounded-full mr-2">
              <h6>This month</h6>
            </div>
            <Boutton 
              text="Add new widget"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
