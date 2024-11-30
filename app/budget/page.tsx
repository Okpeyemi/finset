import React from "react";
import FinSet from "@/app/images/FinSet.png";
import Image from "next/image";
import ModeToggleMobile from "@/components/ModeToggleMobile";
import Boutton from "@/components/Boutton";
import { Bell, Search } from "lucide-react";
import Profil from "@/components/Profil";
import onBuilding from "@/app/images/onBuilding.svg";

const page = () => {
  return (
    <div className="h-screen flex flex-col justify-between">
      <div className="flex justify-between items-center m-5">
        <div className="flex items-center">
          <Image className="w-12 h-12" src={FinSet} alt="FinSet" />
          <h5 className="ml-2 font-lufgaMedium">FinSet</h5>
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
        </div>
      </div>
      <div className="flex flex-col h-[90vh] items-center justify-around">
        <Image className="w-[500px]" src={onBuilding} alt="On Building" />
        <div className="flex flex-col items-center">
          <h6 className="my-10">Come later! This page is under construction</h6>
          <a href="/dashboard"><Boutton className="bg-primary text-white rounded-[10px]" text="Back to home" /></a>
        </div>
      </div>
    </div>
  );
};

export default page;
