"use client"

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  type ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { weeklyActivity } from "@/lib/dashboard-data"

const chartConfig = {
  sessions: { label: "Sessions", color: "var(--chart-1)" },
  signups: { label: "Sign-ups (x10)", color: "var(--chart-2)" },
} satisfies ChartConfig

const data = weeklyActivity.map((d) => ({ ...d, signups: d.signups * 10 }))

export function WeeklyActivityChart() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Weekly activity</CardTitle>
        <CardDescription>Sessions and sign-ups by day of week</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="aspect-auto h-[300px] w-full">
          <BarChart data={data} margin={{ top: 8 }}>
            <CartesianGrid vertical={false} />
            <XAxis dataKey="day" tickLine={false} axisLine={false} tickMargin={8} />
            <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="dashed" />} />
            <Bar dataKey="sessions" fill="var(--color-sessions)" radius={4} />
            <Bar dataKey="signups" fill="var(--color-signups)" radius={4} />
            <ChartLegend content={<ChartLegendContent />} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
