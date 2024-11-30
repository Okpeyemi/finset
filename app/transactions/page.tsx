import Boutton from "@/components/Boutton";
import FilterBar from "@/components/FilterBar";
import ModeToggleMobile from "@/components/ModeToggleMobile";
import NavBar from "@/components/Navbar/NavBar";
import NavBarMobile from "@/components/Navbar/NavBarMobile";
import Profil from "@/components/Profil";
import Transactions2 from "@/components/Transactions2";
import {
  Bell,
  CalendarDays,
  FileUp,
  Plus,
  Search,
  SlidersHorizontal,
} from "lucide-react";
import React from "react";

const page = () => {
  return (
    <div className="flex h-screen">
      <NavBar />
      <div className="w-full h-full overflow-y-auto">
        <div className="mx-5 my-5">
          <div className="flex max-sm:flex-col-reverse md:items-start justify-between">
            <div>
              <h1 className="xl:text-[45px] lg:text-[35px] text-[25px]">
                Transactions
              </h1>
              <h5 className="text-[#82828C] max-xl:text-[15px]">
                Overview of your activities
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
                text="01 Jun - 01 Jul 2024"
              />
              <Boutton
                className="border border-border text-foreground rounded-[10px] mr-2 hover:bg-muted hover:border-secondary"
                Icon={SlidersHorizontal}
              />
            </div>
            <div className="flex my-5 items-center">
              <Boutton
                className="rounded-[10px] text-foreground border border-border mr-2 hover:bg-muted hover:border-secondary max-sm:hidden"
                text="Export CSV"
                Icon={FileUp}
              />
              <Boutton
                className="bg-primary rounded-[10px] text-white border border-primary hover:bg-secondary hover:border-secondary max-sm:hidden"
                text="Add new"
                Icon={Plus}
              />
              <Boutton
                className="border border-border text-foreground rounded-[10px] mr-2 hover:bg-muted hover:border-secondary hidden max-sm:block"
                Icon={FileUp}
              />
              <Boutton
                className="bg-primary rounded-[10px] text-white border border-primary hover:bg-secondary hover:border-secondary hidden max-sm:block"
                Icon={Plus}
              />
            </div>
          </div>
          <div>
            <FilterBar />
          </div>
          <div className="my-5 w-full">
            <Transactions2 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
