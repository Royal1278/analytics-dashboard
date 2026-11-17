export type Kpi = {
  label: string
  value: string
  change: number
  hint: string
}

export const kpis: Kpi[] = [
  { label: "Total revenue", value: "$248,920", change: 12.4, hint: "vs. last 30 days" },
  { label: "Active users", value: "18,342", change: 8.1, hint: "vs. last 30 days" },
  { label: "Conversion rate", value: "3.62%", change: -0.4, hint: "vs. last 30 days" },
  { label: "Avg. session", value: "4m 12s", change: 5.7, hint: "vs. last 30 days" },
]

export type RevenuePoint = { date: string; revenue: number; expenses: number }

function buildRevenueSeries(days: number): RevenuePoint[] {
  const end = new Date("2026-11-16T00:00:00Z")
  return Array.from({ length: days }, (_, i) => {
    const d = new Date(end)
    d.setUTCDate(end.getUTCDate() - (days - 1 - i))
    const trend = 6200 + i * (days > 30 ? 18 : 45)
    const wave = Math.sin(i / 3.2) * 900 + Math.cos(i / 7) * 500
    const revenue = Math.round(trend + wave)
    const expenses = Math.round(revenue * (0.52 + Math.sin(i / 5) * 0.06))
    return { date: d.toISOString().slice(0, 10), revenue, expenses }
  })
}

export const revenueSeries = buildRevenueSeries(90)

export const trafficSources = [
  { source: "organic", visitors: 8240, fill: "var(--color-organic)" },
  { source: "direct", visitors: 4610, fill: "var(--color-direct)" },
  { source: "referral", visitors: 2980, fill: "var(--color-referral)" },
  { source: "social", visitors: 1720, fill: "var(--color-social)" },
  { source: "email", visitors: 792, fill: "var(--color-email)" },
]

export const weeklyActivity = [
  { day: "Mon", sessions: 2840, signups: 182 },
  { day: "Tue", sessions: 3120, signups: 214 },
  { day: "Wed", sessions: 3490, signups: 247 },
  { day: "Thu", sessions: 3260, signups: 229 },
  { day: "Fri", sessions: 2980, signups: 198 },
  { day: "Sat", sessions: 1840, signups: 121 },
  { day: "Sun", sessions: 1620, signups: 104 },
]

export const topPages = [
  { path: "/pricing", views: 24812, bounce: 32.1, change: 14.2 },
  { path: "/", views: 21450, bounce: 41.8, change: 6.3 },
  { path: "/features/reports", views: 12904, bounce: 28.4, change: 22.9 },
  { path: "/blog/q4-benchmarks", views: 9318, bounce: 54.6, change: -3.8 },
  { path: "/docs/getting-started", views: 7764, bounce: 24.9, change: 9.1 },
]

export const goals = [
  { label: "Quarterly revenue", current: 248920, target: 320000, format: "currency" as const },
  { label: "New customers", current: 1294, target: 1500, format: "number" as const },
  { label: "Retention target", current: 87, target: 92, format: "percent" as const },
]

export type ActivityItem = {
  id: string
  name: string
  initials: string
  action: string
  amount?: string
  time: string
  status: "completed" | "pending" | "refunded"
}

export const recentActivity: ActivityItem[] = [
  { id: "1", name: "Maya Chen", initials: "MC", action: "Upgraded to Pro", amount: "$499.00", time: "4 min ago", status: "completed" },
  { id: "2", name: "Jonas Weber", initials: "JW", action: "New subscription", amount: "$129.00", time: "18 min ago", status: "completed" },
  { id: "3", name: "Priya Raman", initials: "PR", action: "Invoice issued", amount: "$2,340.00", time: "42 min ago", status: "pending" },
  { id: "4", name: "Diego Alvarez", initials: "DA", action: "Refund processed", amount: "$89.00", time: "1 hr ago", status: "refunded" },
  { id: "5", name: "Hana Sato", initials: "HS", action: "New subscription", amount: "$129.00", time: "2 hr ago", status: "completed" },
]
