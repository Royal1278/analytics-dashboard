import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { goals } from "@/lib/dashboard-data"

function formatValue(value: number, format: (typeof goals)[number]["format"]) {
  if (format === "currency") return `$${(value / 1000).toFixed(0)}k`
  if (format === "percent") return `${value}%`
  return value.toLocaleString("en-US")
}

export function GoalsCard() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Q4 goals</CardTitle>
        <CardDescription>Progress toward quarterly targets</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-5">
        {goals.map((goal) => {
          const pct = Math.min(100, Math.round((goal.current / goal.target) * 100))
          return (
            <div key={goal.label} className="flex flex-col gap-2">
              <div className="flex items-baseline justify-between gap-2 text-sm">
                <span className="font-medium">{goal.label}</span>
                <span className="tabular-nums text-muted-foreground">
                  {formatValue(goal.current, goal.format)} / {formatValue(goal.target, goal.format)}
                </span>
              </div>
              <div
                role="progressbar"
                aria-label={goal.label}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={pct}
                className="h-2 overflow-hidden rounded-full bg-muted"
              >
                <div className="h-full rounded-full bg-primary" style={{ width: `${pct}%` }} />
              </div>
              <span className="text-xs text-muted-foreground tabular-nums">{pct}% complete</span>
            </div>
          )
        })}
      </CardContent>
    </Card>
  )
}
