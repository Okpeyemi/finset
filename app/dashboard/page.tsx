import Boutton from "@/components/Boutton";
import Card from "@/components/Card";
import Chart from "@/components/Chart";
import ModeToggleMobile from "@/components/ModeToggleMobile";
import NavBar from "@/components/Navbar/NavBar";
import NavBarMobile from "@/components/Navbar/NavBarMobile";
import Profil from "@/components/Profil";
import { Bell, CalendarDays, LayoutGrid, Plus, Search } from "lucide-react";
import React from "react";

const page = () => {
  return (
    <div className="flex h-screen">
      <NavBar />
      <div className="overflow-y-auto w-full">
        <div className="mx-5 my-5">
          <div className="flex max-sm:flex-col-reverse md:items-start justify-between">
            <div>
              <h1 className="xl:text-[45px] lg:text-[35px] text-[25px]">Welcome back, Maqsoud!</h1>
              <h5 className="text-[#82828C] max-xl:text-[15px]">
                It is the best time to manage your finances
              </h5>
            </div>
            <div className="flex items-center max-sm:justify-end max-sm:mb-3">
              <ModeToggleMobile />
              <Boutton
                className="border border-border text-foreground rounded-[10px] mr-2 hover:bg-muted hover:border-secondary"
                Icon={Search}
              />
              <Boutton
                className="border border-border text-foreground rounded-[10px] mr-2 hover:bg-muted hover:border-secondary"
                Icon={Bell}
              />
              <div className="">
                <div className="hidden lg:flex border border-border text-foreground rounded-[10px] items-center px-1 cursor-pointer">
                  <Profil />
                  <div className="ml-3 my-[2px]">
                    <h6>Maqsoud TAWALIOU</h6>
                    <p>maqsoudt9@gmail.com</p>
                  </div>
                </div>
              </div>
              <NavBarMobile />
            </div>
          </div>
          <div className="flex justify-end md:justify-between">
            <div className="flex my-5">
              <Boutton
                className="border border-border text-foreground rounded-[10px] mr-2 hover:bg-muted hover:border-secondary"
                Icon={CalendarDays}
              />
              <Boutton
                className="border border-border text-foreground rounded-[10px] mr-2 hover:bg-muted hover:border-secondary max-sm:hidden"
                text="This month"
              />
            </div>
            <div className="flex my-5 items-center">
              <Boutton
                className="rounded-[10px] text-foreground border border-border mr-2 hover:bg-muted hover:border-secondary max-sm:hidden"
                text="Manage widgets"
                Icon={LayoutGrid}
              />
              <Boutton
                className="bg-primary rounded-[10px] text-white border border-primary hover:bg-secondary hover:border-secondary max-sm:hidden"
                text="Add new widget"
                Icon={Plus}
              />
              <Boutton
                className="bg-primary rounded-[10px] text-white border border-primary hover:bg-secondary hover:border-secondary hidden max-sm:block"
                Icon={Plus}
              />
            </div>
          </div>
          <div className="flex gap-1 justify-between w-full flex-wrap">
            <Card
              className="xl:w-[24%] md:w-[49%]"
              title="Total balance"
              price="15,700.00"
              valuePercentage="12.1%"
              vs="vs last month"
            />
            <Card
              className="xl:w-[24%] md:w-[49%]"
              title="Total balance"
              price="15,700.00"
              valuePercentage="12.1%"
              vs="vs last month"
            />
            <Card
              className="xl:w-[24%] md:w-[49%]"
              title="Total balance"
              price="15,700.00"
              valuePercentage="12.1%"
              vs="vs last month"
            />
            <Card
              className="xl:w-[24%] md:w-[49%]"
              title="Total balance"
              price="15,700.00"
              valuePercentage="12.1%"
              vs="vs last month"
            />
          </div>
          <div className="w-full gap-2">
            <div className="w-[65%] max-md:w-[60%] max-sm:w-full">
              <Chart />
            </div>
            <div className="w-[35%] max-md:w-[30%] max-sm:w-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
