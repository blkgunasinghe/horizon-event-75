import { AlertTriangle, Clock, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Incident {
  id: string;
  title: string;
  severity: "low" | "medium" | "high" | "critical";
  status: "open" | "in-progress" | "resolved";
  assignee?: string;
  createdAt: string;
}

const activeIncidents: Incident[] = [
  {
    id: "INC-001",
    title: "Audio System Malfunction",
    severity: "high",
    status: "in-progress",
    assignee: "Tech Team",
    createdAt: "2 min ago"
  },
  {
    id: "INC-002", 
    title: "Security Alert - Gate B",
    severity: "critical",
    status: "open",
    createdAt: "32 min ago"
  },
  {
    id: "INC-003",
    title: "Catering Delay",
    severity: "medium",
    status: "in-progress",
    assignee: "Event Coordinator",
    createdAt: "1 hour ago"
  }
];

const getSeverityColor = (severity: string) => {
  switch (severity) {
    case "critical":
      return "destructive";
    case "high":
      return "secondary";
    case "medium":
      return "outline";
    case "low":
      return "default";
    default:
      return "default";
  }
};

const getStatusIcon = (status: string) => {
  switch (status) {
    case "open":
      return AlertTriangle;
    case "in-progress":
      return Clock;
    case "resolved":
      return CheckCircle;
    default:
      return AlertTriangle;
  }
};

export function IncidentsOverview() {
  return (
    <Card className="col-span-1 lg:col-span-1">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-xl font-semibold">Active Incidents</CardTitle>
        <Badge variant="destructive" className="text-xs">
          {activeIncidents.length}
        </Badge>
      </CardHeader>
      <CardContent className="space-y-4">
        {activeIncidents.map((incident) => {
          const StatusIcon = getStatusIcon(incident.status);
          
          return (
            <div
              key={incident.id}
              className="flex items-start space-x-3 p-3 rounded-lg border border-card-border hover:bg-surface transition-colors"
            >
              <StatusIcon className="w-5 h-5 text-warning mt-0.5" />
              
              <div className="flex-1 min-w-0 space-y-2">
                <div className="flex items-start justify-between">
                  <h4 className="text-sm font-medium text-foreground line-clamp-1">
                    {incident.title}
                  </h4>
                  <Badge 
                    variant={getSeverityColor(incident.severity)} 
                    className="text-xs ml-2"
                  >
                    {incident.severity}
                  </Badge>
                </div>
                
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>{incident.id}</span>
                  <span>{incident.createdAt}</span>
                </div>
                
                {incident.assignee && (
                  <p className="text-xs text-muted-foreground">
                    Assigned to: {incident.assignee}
                  </p>
                )}
                
                <div className="flex items-center space-x-2">
                  <Button size="sm" variant="outline" className="text-xs h-7">
                    View Details
                  </Button>
                  {incident.status === "open" && (
                    <Button size="sm" variant="default" className="text-xs h-7">
                      Assign
                    </Button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
        
        <Button variant="outline" className="w-full mt-4">
          View Incident Console
        </Button>
      </CardContent>
    </Card>
  );
}