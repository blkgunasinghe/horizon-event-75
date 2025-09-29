import { Ticket, Users, DollarSign, CheckCircle } from "lucide-react";
import { StatCard } from "@/components/ui/stat-card";

export function DashboardStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <StatCard
        title="Tickets Sold"
        value={1250}
        change={12}
        changeLabel="from last month"
        icon={Ticket}
        variant="success"
      />
      <StatCard
        title="Live Attendees"
        value={980}
        change={-3}
        changeLabel="from yesterday"
        icon={Users}
        variant="default"
      />
      <StatCard
        title="Total Revenue"
        value="$75,000"
        change={18}
        changeLabel="from last month"
        icon={DollarSign}
        variant="success"
      />
      <StatCard
        title="Vendor Confirmations"
        value="12/15"
        change={-5}
        changeLabel="pending"
        icon={CheckCircle}
        variant="warning"
      />
    </div>
  );
}