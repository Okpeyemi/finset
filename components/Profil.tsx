import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Profil = () => {
  return (
    <Avatar className="w-10 h-10 max-lg:w-12 max-lg:h-12 rounded-[10px]">
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
};

export default Profil;
