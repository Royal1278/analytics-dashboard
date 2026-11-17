"use client"

import { Label, Pie, PieChart } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { trafficSources } from "@/lib/dashboard-data"

const chartConfig = {
  visitors: { label: "Visitors" },
  organic: { label: "Organic search", color: "var(--chart-1)" },
  direct: { label: "Direct", color: "var(--chart-2)" },
  referral: { label: "Referral", color: "var(--chart-3)" },
  social: { label: "Social", color: "var(--chart-4)" },
  email: { label: "Email", color: "var(--chart-5)" },
} satisfies ChartConfig

const totalVisitors = trafficSources.reduce((sum, item) => sum + item.visitors, 0)

export function TrafficSourcesChart() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Traffic sources</CardTitle>
        <CardDescription>Where visitors came from this month</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <ChartContainer config={chartConfig} className="mx-auto aspect-square h-[200px]">
          <PieChart>
            <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel nameKey="source" />} />
            <Pie data={trafficSources} dataKey="visitors" nameKey="source" innerRadius={62} strokeWidth={4}>
              <Label
                content={({ viewBox }) => {
                  if (!viewBox || !("cx" in viewBox) || !("cy" in viewBox)) return null
                  return (
                    <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle" dominantBaseline="middle">
                      <tspan x={viewBox.cx} y={viewBox.cy} className="fill-foreground text-2xl font-semibold">
                        {(totalVisitors / 1000).toFixed(1)}k
                      </tspan>
                      <tspan x={viewBox.cx} y={(viewBox.cy ?? 0) + 22} className="fill-muted-foreground text-xs">
                        Visitors
                      </tspan>
                    </text>
                  )
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
        <ul className="flex flex-col gap-2 text-sm">
          {trafficSources.map((item) => {
            const config = chartConfig[item.source as keyof typeof chartConfig]
            const share = ((item.visitors / totalVisitors) * 100).toFixed(1)
            return (
              <li key={item.source} className="flex items-center gap-2">
                <span
                  className="size-2.5 shrink-0 rounded-sm"
                  style={{ backgroundColor: "color" in config ? config.color : undefined }}
                  aria-hidden="true"
                />
                <span className="flex-1 text-muted-foreground">{config.label}</span>
                <span className="font-medium tabular-nums">{share}%</span>
              </li>
            )
          })}
        </ul>
      </CardContent>
    </Card>
  )
}
