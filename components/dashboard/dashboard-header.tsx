import { CalendarDays, Download } from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

export function DashboardHeader() {
  return (
    <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-semibold tracking-tight text-balance">Overview</h1>
        <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
          <CalendarDays className="size-4" aria-hidden="true" />
          Oct 18 – Nov 16, 2026
        </p>
      </div>
      <div className="flex items-center gap-3">
        <Button variant="outline">
          <Download aria-hidden="true" />
          Export
        </Button>
        <Avatar>
          <AvatarFallback className="text-xs">RS</AvatarFallback>
        </Avatar>
      </div>
    </header>
  )
}
