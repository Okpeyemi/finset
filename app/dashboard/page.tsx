import Boutton from "@/components/Boutton";
import Card from "@/components/Card";
import NavBar from "@/components/Navbar/NavBar";
import Profil from "@/components/Profil";
// import { Calendar } from "@/components/ui/calendar";
import { Bell, CalendarDays, Search } from "lucide-react";
import React from "react";

const page = () => {
  return (
    <div className="flex">
      <NavBar />
      <div className="mx-5 my-5 w-full">
        <div className="flex items-center justify-between">
          <div>
            <h1>Welcome back, Maqsoud!</h1>
            <h5 className="text-[#82828C]">
              It is the best time to manage your finances
            </h5>
          </div>
          <div className="flex">
            <Boutton
              className="border-2 border-border text-foreground rounded-full mr-2"
              Icon={Search}
            />
            <Boutton
              className="border-2 border-border text-foreground rounded-full mr-2"
              Icon={Bell}
            />
            <div className="flex border-2 border-border text-foreground rounded-full items-center px-1">
              <Profil />
              <div className="mx-3">
                <h6>Maqsoud TAWALIOU</h6>
                <p>maqsoudt9@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex my-5">
            <div className="px-4 py-3 border-2 border-border w-fit rounded-[10px] mr-2">
              <CalendarDays />
            </div>
            <div className="px-4 py-3 border-2 border-border w-fit rounded-[10px]">
              <h6>This month</h6>
            </div>
          </div>
          <div className="flex my-5 items-center">
            <div className="px-4 py-3 border-2 border-border w-fit rounded-[10px] mr-2">
              <h6>This month</h6>
            </div>
            <Boutton
              className="bg-primary rounded-[10px]"
              text="Add new widget"
            />
          </div>
        </div>
        <div className="flex justify-between">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default page;
