"use client";

import { ArrowUpRight, TrendingUp } from "lucide-react";
import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import Boutton from "./Boutton";
const chartData = [
  {
    month: "january",
    cafeRestaurants: 1260,
    entertainment: 570,
    investments: 300,
    foodGroceries: 600,
    healthBeauty: 200,
    traveling: 300,
  },
];

const chartConfig = {
  cafeRestaurants: {
    label: "Cafe & Restaurants",
    color: "#7664E4",
  },
  entertainment: {
    label: "Entertainment",
    color: "#A498FF",
  },
  investments: {
    label: "Investments",
    color: "#D6D2FF",
  },
  foodGroceries: {
    label: "Food & Groceries",
    color: "#56565F",
  },
  healthBeauty: {
    label: "Health & Beauty",
    color: "#82828C",
  },
  traveling: {
    label: "Traveling",
    color: "#A1A1A9",
  },
} satisfies ChartConfig;

const RadioChart = () => {
  const totalVisitors =
    chartData[0].cafeRestaurants +
    chartData[0].entertainment +
    chartData[0].investments +
    chartData[0].foodGroceries +
    chartData[0].healthBeauty +
    chartData[0].traveling;

  return (
    <div className="h-full">
      <Card className="flex flex-col p-2 font-lufgaRegular w-full h-full">
        <div className="flex justify-between items-center">
          <CardHeader className="items-center">
            <CardTitle className="items-start font-lufgaMedium">
              Budget
            </CardTitle>
          </CardHeader>
          <div>
            <Boutton
              className="border border-border text-foreground rounded-[10px] m-2 hover:bg-primary hover:border-primary hover:text-white"
              Icon={ArrowUpRight}
            />
          </div>
        </div>
        <CardContent className="flex flex-1 items-center pb-0">
          <ChartContainer
            config={chartConfig}
            className="mx-auto aspect-square w-full max-h-[300px] max-md:max-h-[200px]"
          >
            <RadialBarChart
              data={chartData}
              endAngle={360}
              innerRadius={80}
              outerRadius={130}
            >
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
                <Label
                  content={({ viewBox }) => {
                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                      return (
                        <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
                          <tspan
                            x={viewBox.cx}
                            y={(viewBox.cy || 0) - 16}
                            className="fill-primary text-2xl font-bold"
                          >
                            {totalVisitors.toLocaleString()}
                          </tspan>
                          <tspan
                            x={viewBox.cx}
                            y={(viewBox.cy || 0) + 4}
                            className="fill-muted-foreground"
                          >
                            Visitors
                          </tspan>
                        </text>
                      );
                    }
                  }}
                />
              </PolarRadiusAxis>
              <RadialBar
                dataKey="cafeRestaurants"
                stackId="a"
                cornerRadius={10}
                fill="var(--color-cafeRestaurants)"
                className="stroke-transparent stroke-2"
              />
              <RadialBar
                dataKey="entertainment"
                fill="var(--color-entertainment)"
                stackId="a"
                cornerRadius={10}
                className="stroke-transparent stroke-2"
              />
              <RadialBar
                dataKey="investments"
                fill="var(--color-investments)"
                stackId="a"
                cornerRadius={10}
                className="stroke-transparent stroke-2"
              />
              <RadialBar
                dataKey="foodGroceries"
                fill="var(--color-foodGroceries)"
                stackId="a"
                cornerRadius={10}
                className="stroke-transparent stroke-2"
              />
              <RadialBar
                dataKey="healthBeauty"
                fill="var(--color-healthBeauty)"
                stackId="a"
                cornerRadius={10}
                className="stroke-transparent stroke-2"
              />
              <RadialBar
                dataKey="traveling"
                fill="var(--color-traveling)"
                stackId="a"
                cornerRadius={10}
                className="stroke-transparent stroke-2"
              />
            </RadialBarChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default RadioChart;
