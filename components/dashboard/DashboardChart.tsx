"use client"
 
import { Bar, BarChart, CartesianGrid, XAxis,YAxis } from "recharts";
import { 
    ChartConfig, ChartContainer, ChartTooltip,
    ChartTooltipContent,ChartLegend, ChartLegendContent  
} from "@/components/ui/chart";
import analytics from "@/data/analytics";

const chartConfig = {
    uv: {
      label: "UV",
      color: "#2563eb",
    },
    pv: {
      label: "PV",
      color: "#60a5fa",
    },
    amt:{
        label: "Amount",
        color: "#861D26"
    }
} satisfies ChartConfig

const DashboardChart = () => {
    return ( 
    <div>
        <h3>Analytics data per month</h3>
        <ChartContainer config={chartConfig} className="h-[300px] w-full">
            <BarChart accessibilityLayer data={analytics}>
             <CartesianGrid vertical={false} />
              <XAxis
                dataKey="name"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value) => value.slice(0,3)}
               />
               <YAxis />
               <ChartTooltip content={<ChartTooltipContent />} />
               <ChartLegend content={<ChartLegendContent />} />
              <Bar dataKey="uv" fill="var(--color-uv)" radius={2} />
              <Bar dataKey="pv" fill="var(--color-pv)" radius={2} />
              <Bar dataKey="amt" fill="var(--color-amt)" radius={2} />
            </BarChart>
        </ChartContainer>
    </div> 
);
}
 
export default DashboardChart;