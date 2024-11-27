import Boutton from "@/components/Boutton";
import Card from "@/components/Card";
import Chart from "@/components/Chart";
import NavBar from "@/components/Navbar/NavBar";
import Profil from "@/components/Profil";
// import { Calendar } from "@/components/ui/calendar";
import { Bell, CalendarDays, LayoutGrid, Search } from "lucide-react";
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
              className="border border-border text-foreground rounded-full mr-2 hover:bg-muted hover:border-secondary"
              Icon={Search}
            />
            <Boutton
              className="border border-border text-foreground rounded-full mr-2 hover:bg-muted hover:border-secondary"
              Icon={Bell}
            />
            <div className="flex border border-border text-foreground rounded-full items-center px-1">
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
            <Boutton
              className="border border-border text-foreground rounded-[10px] mr-2 hover:bg-muted hover:border-secondary"
              Icon={CalendarDays}
            />
            <Boutton
              className="border border-border text-foreground rounded-[10px] mr-2 hover:bg-muted hover:border-secondary"
              text="This month"
            />
          </div>
          <div className="flex my-5 items-center">
            <Boutton
              className="rounded-[10px] text-foreground border border-border mr-2 hover:bg-muted hover:border-secondary"
              text="Manage widgets"
              Icon={LayoutGrid}
            />
            <Boutton
              className="bg-primary rounded-[10px] text-white border border-primary hover:bg-secondary hover:border-secondary"
              text="Add new widget"
            />
          </div>
        </div>
        <div className="flex gap-4 justify-between w-full">
          <Card
            className="w-full"
            title="Total balance"
            price="15,700.00"
            valuePercentage="12.1%"
            vs="vs last month"
          />
          <Card
            className="w-full"
            title="Total balance"
            price="15,700.00"
            valuePercentage="12.1%"
            vs="vs last month"
          />
          <Card
            className="w-full"
            title="Total balance"
            price="15,700.00"
            valuePercentage="12.1%"
            vs="vs last month"
          />
          <Card
            className="w-full"
            title="Total balance"
            price="15,700.00"
            valuePercentage="12.1%"
            vs="vs last month"
          />
        </div>
        <div className="w-full gap-2">
          <div className="w-[70%]">
            <Chart />
          </div>
          <div className="w-[30%]">

          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
