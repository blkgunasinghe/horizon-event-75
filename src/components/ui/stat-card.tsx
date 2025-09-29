import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string | number;
  change?: number;
  changeLabel?: string;
  icon: LucideIcon;
  className?: string;
  variant?: "default" | "success" | "warning" | "error";
}

export function StatCard({ 
  title, 
  value, 
  change, 
  changeLabel,
  icon: Icon, 
  className,
  variant = "default"
}: StatCardProps) {
  const getVariantStyles = () => {
    switch (variant) {
      case "success":
        return "border-success/20 bg-success-light/20";
      case "warning":
        return "border-warning/20 bg-warning-light/20";
      case "error":
        return "border-error/20 bg-error-light/20";
      default:
        return "border-card-border bg-gradient-card";
    }
  };

  const getIconStyles = () => {
    switch (variant) {
      case "success":
        return "bg-success text-white";
      case "warning":
        return "bg-warning text-white";
      case "error":
        return "bg-error text-white";
      default:
        return "bg-gradient-primary text-white";
    }
  };

  const formatChange = (change: number) => {
    const sign = change >= 0 ? "+" : "";
    return `${sign}${change}%`;
  };

  return (
    <Card className={cn(
      "border transition-all duration-200 hover:shadow-md",
      getVariantStyles(),
      className
    )}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <p className="text-sm font-medium text-muted-foreground">
              {title}
            </p>
            <p className="text-3xl font-bold text-foreground">
              {typeof value === "number" ? value.toLocaleString() : value}
            </p>
            {change !== undefined && (
              <div className="flex items-center space-x-1">
                <span className={cn(
                  "text-sm font-medium",
                  change >= 0 ? "text-success" : "text-error"
                )}>
                  {formatChange(change)}
                </span>
                {changeLabel && (
                  <span className="text-sm text-muted-foreground">
                    {changeLabel}
                  </span>
                )}
              </div>
            )}
          </div>
          <div className={cn(
            "w-12 h-12 rounded-lg flex items-center justify-center",
            getIconStyles()
          )}>
            <Icon className="w-6 h-6" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}