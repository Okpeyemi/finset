"use client";

import React from "react";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";
import { chartData } from "@/lib/utils";
import { ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { ChartLegend, ChartLegendContent } from "@/components/ui/chart";
import Dropdown from "./Dropdown";

export const chartConfig = {
  income: {
    label: "Income",
    color: "#7664E4",
  },
  expense: {
    label: "Expense",
    color: "#BFB7FF",
  },
} satisfies ChartConfig;

const Chart = () => {
  return (
    <div className="border border-border rounded-[10px] w-full p-5 my-5">
      <div className="flex my-3 items-center justify-between max-sm:flex-col">
        <h5 className="font-lufgaMedium">Money flow</h5>
        <div className="flex gap-2">
            <Dropdown
                title="All accounts"
                text1="Admin"
                text2="Manager"
                text3="User"
            />
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
        className="max-h-[300px] max-md:max-h-[200px] w-full font-lufgaRegular max-sm:w-[700px]"
      >
        <BarChart accessibilityLayer data={chartData}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <YAxis
          dataKey="income"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          />
          <ChartTooltip content={<ChartTooltipContent />} />
          <ChartLegend content={<ChartLegendContent />} />
          <Bar
            dataKey="income"
            fill="var(--color-income)"
            radius={10}
            barSize={30}
          />
          <Bar
            dataKey="expense"
            fill="var(--color-expense)"
            radius={10}
            barSize={30}
          />
        </BarChart>
      </ChartContainer>
      </div>
    </div>
  );
};

export default Chart;
