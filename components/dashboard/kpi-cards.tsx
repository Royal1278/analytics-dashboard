import { ArrowDownRight, ArrowUpRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { kpis } from "@/lib/dashboard-data"
import { cn } from "@/lib/utils"

export function KpiCards() {
  return (
    <section aria-label="Key performance indicators" className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {kpis.map((kpi) => {
        const positive = kpi.change >= 0
        const Icon = positive ? ArrowUpRight : ArrowDownRight
        return (
          <Card key={kpi.label}>
            <CardHeader>
              <CardDescription>{kpi.label}</CardDescription>
              <CardTitle className="text-3xl font-semibold tabular-nums tracking-tight">{kpi.value}</CardTitle>
            </CardHeader>
            <CardContent className="flex items-center gap-2 text-sm">
              <span
                className={cn(
                  "inline-flex items-center gap-0.5 rounded-md px-1.5 py-0.5 font-medium tabular-nums",
                  positive ? "bg-positive/10 text-positive" : "bg-destructive/10 text-destructive",
                )}
              >
                <Icon className="size-3.5" aria-hidden="true" />
                <span className="sr-only">{positive ? "Up" : "Down"}</span>
                {Math.abs(kpi.change)}%
              </span>
              <span className="text-muted-foreground">{kpi.hint}</span>
            </CardContent>
          </Card>
        )
      })}
    </section>
  )
}
