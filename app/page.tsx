import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { GoalsCard } from "@/components/dashboard/goals-card"
import { KpiCards } from "@/components/dashboard/kpi-cards"
import { RecentActivity } from "@/components/dashboard/recent-activity"
import { RevenueChart } from "@/components/dashboard/revenue-chart"
import { Sidebar } from "@/components/dashboard/sidebar"
import { TopPagesTable } from "@/components/dashboard/top-pages-table"
import { TrafficSourcesChart } from "@/components/dashboard/traffic-sources-chart"
import { WeeklyActivityChart } from "@/components/dashboard/weekly-activity-chart"

export default function Page() {
  return (
    <div className="flex min-h-screen bg-muted/40">
      <Sidebar />
      <main className="flex min-w-0 flex-1 flex-col gap-6 p-4 sm:p-6 lg:p-8">
        <DashboardHeader />
        <KpiCards />
        <div className="grid gap-6 xl:grid-cols-3">
          <div className="xl:col-span-2">
            <RevenueChart />
          </div>
          <TrafficSourcesChart />
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          <WeeklyActivityChart />
          <TopPagesTable />
        </div>
        <div className="grid gap-6 xl:grid-cols-3">
          <div className="xl:col-span-2">
            <RecentActivity />
          </div>
          <GoalsCard />
        </div>
      </main>
    </div>
  )
}
