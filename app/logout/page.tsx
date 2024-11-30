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
      <div className="flex justify-center items-center m-5">
        <div className="flex items-center">
          <Image className="w-12 h-12" src={FinSet} alt="FinSet" />
          <h5 className="ml-2 font-lufgaMedium">FinSet</h5>
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
