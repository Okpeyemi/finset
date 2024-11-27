import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import {
  LayoutDashboard,
  ArrowLeftRight,
  Wallet,
  Goal,
  CircleDollarSign,
  ChartLine,
  Settings,
  BadgeHelp,
  LogOut,
} from "lucide-react";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type NavItem = {
  label: string;
  link: string;
  icon?: React.ComponentType;
  keyword: string;
};

export const navbarTop: NavItem[] = [
  {
    label: "Dashboard",
    link: "/dashboard",
    icon: LayoutDashboard,
    keyword: "d",
  },
  {
    label: "Transactions",
    link: "/transactions",
    icon: ArrowLeftRight,
    keyword: "t",
  },
  {
    label: "Wallet",
    link: "/wallet",
    icon: Wallet,
    keyword: "w",
  },
  {
    label: "Goals",
    link: "/goals",
    icon: Goal,
    keyword: "g",
  },
  {
    label: "Budget",
    link: "/budget",
    icon: CircleDollarSign,
    keyword: "b",
  },
  {
    label: "Analytics",
    link: "/analytics",
    icon: ChartLine,
    keyword: "a",
  },
  {
    label: "Settings",
    link: "/settings",
    icon: Settings,
    keyword: "s",
  },
];

export const navbarBottom: NavItem[] = [
  {
    label: "Help",
    link: "/help",
    icon: BadgeHelp,
    keyword: "h",
  },
  {
    label: "Log Out",
    link: "/logout",
    icon: LogOut,
    keyword: "l",
  },
];

export const chartData = [
  { month: "Jan", income: 12000, expense: 8000 },
  { month: "Feb", income: 10000, expense: 7000 },
  { month: "Mar", income: 15000, expense: 10000 },
  { month: "Apr", income: 11000, expense: 9000 },
  { month: "May", income: 13000, expense: 9500 },
  { month: "Jun", income: 9000, expense: 6000 },
  { month: "Jul", income: 8000, expense: 7000 },
];
