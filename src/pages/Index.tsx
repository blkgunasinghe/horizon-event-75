import { DashboardStats } from "@/components/dashboard/DashboardStats";
import { RevenueChart } from "@/components/dashboard/RevenueChart";
import { LiveFeed } from "@/components/dashboard/LiveFeed";
import { IncidentsOverview } from "@/components/dashboard/IncidentsOverview";

const Index = () => {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome back! Here's what's happening with your events today.
          </p>
        </div>
        <div className="text-sm text-muted-foreground">
          Last updated: {new Date().toLocaleTimeString()}
        </div>
      </div>

      {/* Stats Cards */}
      <DashboardStats />

      {/* Charts and Feed */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <RevenueChart />
        <LiveFeed />
      </div>

      {/* Incidents Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <IncidentsOverview />
        <div className="lg:col-span-2">
          {/* Placeholder for additional content */}
        </div>
      </div>
    </div>
  );
};

export default Index;
