import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import TripAdvisor from "@/app/images/tripadvisor.png";
import Youtube from "@/app/images/youtube.png";
import LinkedIn from "@/app/images/linkedin.png";
import Airbnb from "@/app/images/airbnb.png";
import eBay from "@/app/images/ebay.png";
import iTunes from "@/app/images/itunes.png";
import Netflix from "@/app/images/netflix.png";
import Amazon from "@/app/images/social.png";
import Spotify from "@/app/images/spotify.png";
import Starbucks from "@/app/images/starbucks.png";
import Twitch from "@/app/images/twitch.png";
import Uber from "@/app/images/uber.png";
import Walmart from "@/app/images/walmart.png";
import McDonalds from "@/app/images/mcdonalds.png";
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

export const transactions = [
  {
    paymentId: "01",
    paymentDate: "25 Jul 12:30",
    paymentAmount: "+ $10",
    paymentImage: Youtube.src,
    paymentName: "Youtube",
    paymentMethod: "VISA **3254",
    paymentCategory: "Subscription",
  },
  {
    paymentId: "02",
    paymentDate: "26 Jul 15:00",
    paymentAmount: "+ $150",
    paymentImage: TripAdvisor.src,
    paymentName: "TripAdvisor",
    paymentMethod: "Mastercard **2154",
    paymentCategory: "Reservation",
  },
  {
    paymentId: "03",
    paymentDate: "27 Jul 9:00",
    paymentAmount: "+ $80",
    paymentImage: LinkedIn.src,
    paymentName: "LinkedIn",
    paymentMethod: "Mastercard **2154",
    paymentCategory: "Subscription",
  }
]

export const allTransactions = [
  {
    paymentId: "01",
    paymentDate: "25 Jul 12:30",
    paymentAmount: "+ $10",
    paymentImage: Youtube.src,
    paymentName: "Youtube",
    paymentMethod: "VISA **3254",
    paymentCategory: "Subscription",
    paymentStatus: "Succesful"
  },
  {
    paymentId: "02",
    paymentDate: "26 Jul 15:00",
    paymentAmount: "+ $150",
    paymentImage: TripAdvisor.src,
    paymentName: "TripAdvisor",
    paymentMethod: "Mastercard **2154",
    paymentCategory: "Reservation",
    paymentStatus: "Succesful"
  },
  {
    paymentId: "03",
    paymentDate: "27 Jul 9:00",
    paymentAmount: "+ $80",
    paymentImage: LinkedIn.src,
    paymentName: "LinkedIn",
    paymentMethod: "Mastercard **2154",
    paymentCategory: "Subscription",
    paymentStatus: "Succesful"
  },
  {
    paymentId: "04",
    paymentDate: "28 Jul 11:00",
    paymentAmount: "+ $50",
    paymentImage: Spotify.src,
    paymentName: "Spotify",
    paymentMethod: "VISA **2251",
    paymentCategory: "Subscription",
    paymentStatus: "Succesful"
  },
  {
    paymentId: "05",
    paymentDate: "29 Jul 14:15",
    paymentAmount: "+ $20",
    paymentImage: Netflix.src,
    paymentName: "Netflix",
    paymentMethod: "VISA **7890",
    paymentCategory: "Subscription",
    paymentStatus: "Succesful"
  },
  {
    paymentId: "06",
    paymentDate: "30 Jul 8:45",
    paymentAmount: "+ $200",
    paymentImage: Airbnb.src,
    paymentName: "Airbnb",
    paymentMethod: "Mastercard **4567",
    paymentCategory: "Reservation",
    paymentStatus: "Succesful"
  },
  {
    paymentId: "07",
    paymentDate: "31 Jul 16:30",
    paymentAmount: "+ $5",
    paymentImage: Starbucks.src,
    paymentName: "Starbucks",
    paymentMethod: "VISA **3254",
    paymentCategory: "Food & Drinks",
    paymentStatus: "Succesful"
  },
  {
    paymentId: "08",
    paymentDate: "01 Aug 10:00",
    paymentAmount: "+ $300",
    paymentImage: Airbnb.src,
    paymentName: "Airbnb",
    paymentMethod: "Mastercard **1111",
    paymentCategory: "Reservation",
    paymentStatus: "Succesful"
  },
  {
    paymentId: "09",
    paymentDate: "02 Aug 19:45",
    paymentAmount: "+ $15",
    paymentImage: Uber.src,
    paymentName: "Uber",
    paymentMethod: "VISA **9876",
    paymentCategory: "Transport",
    paymentStatus: "Succesful"
  },
  {
    paymentId: "10",
    paymentDate: "03 Aug 14:30",
    paymentAmount: "+ $60",
    paymentImage: Amazon.src,
    paymentName: "Amazon",
    paymentMethod: "VISA **3254",
    paymentCategory: "Shopping",
    paymentStatus: "Succesful"
  },
  {
    paymentId: "11",
    paymentDate: "04 Aug 9:20",
    paymentAmount: "+ $25",
    paymentImage: eBay.src,
    paymentName: "eBay",
    paymentMethod: "Mastercard **2154",
    paymentCategory: "Shopping",
    paymentStatus: "Succesful"
  },
  {
    paymentId: "12",
    paymentDate: "05 Aug 18:00",
    paymentAmount: "+ $12",
    paymentImage: Uber.src,
    paymentName: "Uber",
    paymentMethod: "VISA **4567",
    paymentCategory: "Food Delivery",
    paymentStatus: "Succesful"
  },
  {
    paymentId: "13",
    paymentDate: "06 Aug 20:15",
    paymentAmount: "+ $40",
    paymentImage: iTunes.src,
    paymentName: "iTunes",
    paymentMethod: "Mastercard **2154",
    paymentCategory: "Entertainment",
    paymentStatus: "Succesful"
  },
  {
    paymentId: "14",
    paymentDate: "07 Aug 7:45",
    paymentAmount: "+ $85",
    paymentImage: Airbnb.src,
    paymentName: "Airbnb",
    paymentMethod: "VISA **2251",
    paymentCategory: "Travel",
    paymentStatus: "Succesful"
  },
  {
    paymentId: "15",
    paymentDate: "08 Aug 12:30",
    paymentAmount: "+ $8",
    paymentImage: Twitch.src,
    paymentName: "Twitch",
    paymentMethod: "Mastercard **4567",
    paymentCategory: "Entertainment",
    paymentStatus: "Succesful"
  },
  {
    paymentId: "16",
    paymentDate: "09 Aug 14:00",
    paymentAmount: "+ $90",
    paymentImage: Walmart.src,
    paymentName: "Walmart",
    paymentMethod: "VISA **7890",
    paymentCategory: "Groceries",
    paymentStatus: "Succesful"
  },
  {
    paymentId: "17",
    paymentDate: "10 Aug 16:45",
    paymentAmount: "+ $10",
    paymentImage: Youtube.src,
    paymentName: "Youtube",
    paymentMethod: "VISA **3254",
    paymentCategory: "Subscription",
    paymentStatus: "Succesful"
  },
  {
    paymentId: "18",
    paymentDate: "11 Aug 13:10",
    paymentAmount: "+ $250",
    paymentImage: Twitch.src,
    paymentName: "Twitch",
    paymentMethod: "Mastercard **2154",
    paymentCategory: "Entertainment",
    paymentStatus: "Succesful"
  },
  {
    paymentId: "19",
    paymentDate: "12 Aug 8:00",
    paymentAmount: "+ $5",
    paymentImage: McDonalds.src,
    paymentName: "McDonalds",
    paymentMethod: "VISA **9876",
    paymentCategory: "Food & Drinks",
    paymentStatus: "Succesful"
  },
  {
    paymentId: "20",
    paymentDate: "13 Aug 17:50",
    paymentAmount: "+ $7",
    paymentImage: Youtube.src,
    paymentName: "Youtube",
    paymentMethod: "VISA **2251",
    paymentCategory: "Subscription",
    paymentStatus: "Succesful"
  },
  {
    paymentId: "21",
    paymentDate: "14 Aug 11:20",
    paymentAmount: "+ $70",
    paymentImage: Walmart.src,
    paymentName: "Walmart",
    paymentMethod: "Mastercard **4567",
    paymentCategory: "Shopping",
    paymentStatus: "Succesful"
  },
  {
    paymentId: "22",
    paymentDate: "15 Aug 19:30",
    paymentAmount: "+ $6",
    paymentImage: Uber.src,
    paymentName: "Uber",
    paymentMethod: "VISA **3254",
    paymentCategory: "Food Delivery",
    paymentStatus: "Succesful"
  },
];
