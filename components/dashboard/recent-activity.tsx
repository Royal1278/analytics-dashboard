import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { type ActivityItem, recentActivity } from "@/lib/dashboard-data"
import { cn } from "@/lib/utils"

const statusStyles: Record<ActivityItem["status"], string> = {
  completed: "bg-positive/10 text-positive",
  pending: "bg-warning/15 text-warning-foreground",
  refunded: "bg-destructive/10 text-destructive",
}

export function RecentActivity() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Recent activity</CardTitle>
        <CardDescription>Latest customer events</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="flex flex-col gap-4">
          {recentActivity.map((item) => (
            <li key={item.id} className="flex items-center gap-3">
              <Avatar className="size-9">
                <AvatarFallback className="text-xs">{item.initials}</AvatarFallback>
              </Avatar>
              <div className="flex min-w-0 flex-1 flex-col">
                <span className="truncate text-sm font-medium">{item.name}</span>
                <span className="truncate text-xs text-muted-foreground">
                  {item.action} · {item.time}
                </span>
              </div>
              <div className="flex flex-col items-end gap-1">
                {item.amount && <span className="text-sm font-medium tabular-nums">{item.amount}</span>}
                <Badge className={cn("capitalize", statusStyles[item.status])}>{item.status}</Badge>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
