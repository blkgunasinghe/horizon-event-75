import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const chartData = [
  { name: "Jan", revenue: 12000 },
  { name: "Feb", revenue: 18000 },
  { name: "Mar", revenue: 25000 },
  { name: "Apr", revenue: 32000 },
  { name: "May", revenue: 45000 },
  { name: "Jun", revenue: 55000 },
  { name: "Jul", revenue: 65000 },
  { name: "Aug", revenue: 75000 },
];

export function RevenueChart() {
  return (
    <Card className="col-span-1 lg:col-span-2">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">Revenue Overview</CardTitle>
        <p className="text-sm text-muted-foreground">
          Monthly revenue growth this year
        </p>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <XAxis 
                dataKey="name" 
                axisLine={false}
                tickLine={false}
                className="text-sm text-muted-foreground"
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                className="text-sm text-muted-foreground"
                tickFormatter={(value) => `$${value / 1000}k`}
              />
              <Tooltip
                content={({ active, payload, label }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="bg-card border border-card-border rounded-lg p-3 shadow-lg">
                        <p className="text-sm font-medium">{label}</p>
                        <p className="text-sm text-primary">
                          Revenue: ${payload[0].value?.toLocaleString()}
                        </p>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Line
                type="monotone"
                dataKey="revenue"
                stroke="hsl(var(--primary))"
                strokeWidth={3}
                dot={{ fill: "hsl(var(--primary))", strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, stroke: "hsl(var(--primary))", strokeWidth: 2 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}