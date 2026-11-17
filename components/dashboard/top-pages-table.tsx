import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { topPages } from "@/lib/dashboard-data"
import { cn } from "@/lib/utils"

export function TopPagesTable() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Top pages</CardTitle>
        <CardDescription>Most viewed pages in the last 30 days</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Page</TableHead>
              <TableHead className="text-right">Views</TableHead>
              <TableHead className="text-right">Bounce</TableHead>
              <TableHead className="text-right">Change</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {topPages.map((page) => (
              <TableRow key={page.path}>
                <TableCell className="font-mono text-xs">{page.path}</TableCell>
                <TableCell className="text-right tabular-nums">{page.views.toLocaleString("en-US")}</TableCell>
                <TableCell className="text-right tabular-nums text-muted-foreground">{page.bounce}%</TableCell>
                <TableCell
                  className={cn(
                    "text-right font-medium tabular-nums",
                    page.change >= 0 ? "text-positive" : "text-destructive",
                  )}
                >
                  {page.change >= 0 ? "+" : ""}
                  {page.change}%
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
