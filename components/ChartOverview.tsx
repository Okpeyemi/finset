"use client";

import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import Dropdown from "./Dropdown";
const chartData = [
  { month: "January", income: 186, expense: 80, y: 500 },
  { month: "February", income: 305, expense: 200, y: 500 },
  { month: "March", income: 237, expense: 120, y: 500 },
  { month: "April", income: 73, expense: 190, y: 500 },
  { month: "May", income: 209, expense: 130, y: 500 },
  { month: "June", income: 214, expense: 140, y: 500 },
];

const chartConfig = {
  income: {
    label: "Income",
    color: "#7664E4",
  },
  expense: {
    label: "Expense",
    color: "#BFB7FF",
  },
} satisfies ChartConfig;

const ChartOverview = () => {
  return (
    <div className="border border-border rounded-[10px] w-full p-5 h-full">
      <div className="flex my-3 items-center justify-between max-sm:flex-col">
        <h5 className="font-lufgaMedium">Saving overview</h5>
        <div className="flex">
          <Dropdown
            title="This year"
            text1="Admin"
            text2="Manager"
            text3="User"
          />
        </div>
      </div>
      <div className="w-full overflow-x-auto">
        <ChartContainer
          config={chartConfig}
          className="max-h-[400px] max-md:max-h-[200px] w-full font-lufgaRegular max-sm:w-[700px]"
        >
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={10}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis
              dataKey="y"
              tickLine={false}
              axisLine={false}
              tickMargin={10}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <defs>
              <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-income)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-income)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-expense)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-expense)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <Area
              dataKey="expense"
              type="natural"
              fill="url(#fillMobile)"
              fillOpacity={0.4}
              stroke="var(--color-expense)"
              stackId="a"
            />
            <Area
              dataKey="income"
              type="natural"
              fill="url(#fillDesktop)"
              fillOpacity={0.4}
              stroke="var(--color-income)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </div>
    </div>
  );
};

export default ChartOverview;
