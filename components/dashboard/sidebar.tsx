import { BarChart3, FileText, LayoutDashboard, Settings, Users, Zap } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { label: "Overview", icon: LayoutDashboard, active: true },
  { label: "Reports", icon: BarChart3 },
  { label: "Audience", icon: Users },
  { label: "Content", icon: FileText },
  { label: "Settings", icon: Settings },
]

export function Sidebar() {
  return (
    <aside className="hidden w-60 shrink-0 flex-col border-r bg-sidebar text-sidebar-foreground lg:flex">
      <div className="flex h-16 items-center gap-2 border-b px-5">
        <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
          <Zap className="size-4" aria-hidden="true" />
        </span>
        <span className="font-semibold tracking-tight">Pulse Analytics</span>
      </div>
      <nav aria-label="Main" className="flex flex-col gap-1 p-3">
        {navItems.map((item) => (
          <a
            key={item.label}
            href="#"
            aria-current={item.active ? "page" : undefined}
            className={cn(
              "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
              item.active
                ? "bg-sidebar-accent text-sidebar-accent-foreground"
                : "text-muted-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
            )}
          >
            <item.icon className="size-4" aria-hidden="true" />
            {item.label}
          </a>
        ))}
      </nav>
    </aside>
  )
}
