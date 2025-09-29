import { AlertTriangle, CheckCircle, Clock, User } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface FeedItem {
  id: string;
  type: "incident" | "vendor" | "ticket" | "system";
  title: string;
  description: string;
  timestamp: string;
  severity?: "low" | "medium" | "high" | "critical";
  status?: "open" | "in-progress" | "resolved";
}

const mockFeedData: FeedItem[] = [
  {
    id: "1",
    type: "incident",
    title: "Audio System Malfunction",
    description: "Main stage experiencing intermittent sound issues",
    timestamp: "2 minutes ago",
    severity: "high",
    status: "open"
  },
  {
    id: "2",
    type: "vendor",
    title: "Catering Vendor Update",
    description: "Food stations ready for lunch service",
    timestamp: "15 minutes ago",
    severity: "low",
    status: "resolved"
  },
  {
    id: "3",
    type: "incident",
    title: "Security Alert",
    description: "Unauthorized access attempt at Gate B",
    timestamp: "32 minutes ago",
    severity: "critical",
    status: "in-progress"
  },
  {
    id: "4",
    type: "ticket",
    title: "High Ticket Volume",
    description: "Ticket sales spike detected - 45 sold in last hour",
    timestamp: "1 hour ago",
    severity: "medium",
    status: "open"
  },
  {
    id: "5",
    type: "system",
    title: "Backup System Check",
    description: "All backup systems operational",
    timestamp: "2 hours ago",
    severity: "low",
    status: "resolved"
  }
];

const getTypeIcon = (type: string) => {
  switch (type) {
    case "incident":
      return AlertTriangle;
    case "vendor":
      return User;
    case "ticket":
      return CheckCircle;
    default:
      return Clock;
  }
};

const getSeverityColor = (severity?: string) => {
  switch (severity) {
    case "critical":
      return "bg-error text-error-foreground";
    case "high":
      return "bg-warning text-warning-foreground";
    case "medium":
      return "bg-info text-info-foreground";
    case "low":
      return "bg-success text-success-foreground";
    default:
      return "bg-muted text-muted-foreground";
  }
};

export function LiveFeed() {
  return (
    <Card className="col-span-1 lg:col-span-1">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-xl font-semibold">Live Feed</CardTitle>
        <div className="flex items-center space-x-1">
          <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
          <span className="text-sm text-muted-foreground">Live</span>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {mockFeedData.map((item) => {
          const IconComponent = getTypeIcon(item.type);
          
          return (
            <div
              key={item.id}
              className="flex items-start space-x-3 p-3 rounded-lg border border-card-border hover:bg-surface transition-colors"
            >
              <div className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0",
                getSeverityColor(item.severity)
              )}>
                <IconComponent className="w-4 h-4" />
              </div>
              
              <div className="flex-1 min-w-0 space-y-1">
                <div className="flex items-start justify-between">
                  <h4 className="text-sm font-medium text-foreground line-clamp-1">
                    {item.title}
                  </h4>
                  <span className="text-xs text-muted-foreground whitespace-nowrap ml-2">
                    {item.timestamp}
                  </span>
                </div>
                
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {item.description}
                </p>
                
                <div className="flex items-center justify-between">
                  {item.status && (
                    <Badge 
                      variant={item.status === "resolved" ? "default" : "secondary"}
                      className="text-xs"
                    >
                      {item.status.replace("-", " ")}
                    </Badge>
                  )}
                  
                  {item.type === "incident" && item.status === "open" && (
                    <Button size="sm" variant="outline" className="text-xs">
                      Assign
                    </Button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
        
        <Button variant="outline" className="w-full mt-4">
          View All Activity
        </Button>
      </CardContent>
    </Card>
  );
}