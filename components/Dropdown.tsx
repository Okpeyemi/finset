"use client"
import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { ChevronDown } from 'lucide-react'

type DropdownProps = {
    title: string;
    text1: string;
    text2: string;
    text3: string;
}

const Dropdown: React.FC<DropdownProps> = ({ title, text1, text2, text3 }) => {
  return (
    <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <div className="flex cursor-pointer border border-border px-3 py-1 rounded-[10px]">
                <h6 className="mr-1">{title}</h6>
                <ChevronDown />
            </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
            <DropdownMenuItem>{text1}</DropdownMenuItem>
            <DropdownMenuItem>{text2}</DropdownMenuItem>
            <DropdownMenuItem>{text3}</DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default Dropdown