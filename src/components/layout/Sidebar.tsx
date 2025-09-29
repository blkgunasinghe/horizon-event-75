import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { 
  BarChart3, 
  Calendar, 
  CreditCard, 
  FileText, 
  Home, 
  MessageSquare, 
  PieChart, 
  Settings, 
  Ticket, 
  Users,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Dashboard", href: "/", icon: Home },
  { name: "Events", href: "/events", icon: Calendar },
  { name: "Ticketing", href: "/ticketing", icon: Ticket },
  { name: "Vendors", href: "/vendors", icon: Users },
  { name: "Incidents", href: "/incidents", icon: MessageSquare },
  { name: "Content", href: "/content", icon: FileText },
  { name: "Finance", href: "/finance", icon: CreditCard },
  { name: "Analytics", href: "/analytics", icon: PieChart },
  { name: "Settings", href: "/settings", icon: Settings },
];

interface SidebarProps {
  collapsed: boolean;
  onToggle: () => void;
}

export function Sidebar({ collapsed, onToggle }: SidebarProps) {
  const location = useLocation();

  return (
    <div className={cn(
      "flex flex-col bg-card border-r border-card-border transition-all duration-300",
      collapsed ? "w-16" : "w-64"
    )}>
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-card-border">
        {!collapsed && (
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gradient">EventPro</span>
          </div>
        )}
        <Button
          variant="ghost"
          size="sm"
          onClick={onToggle}
          className="p-1.5 h-auto"
        >
          {collapsed ? (
            <ChevronRight className="w-4 h-4" />
          ) : (
            <ChevronLeft className="w-4 h-4" />
          )}
        </Button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {navigation.map((item) => {
          const isActive = location.pathname === item.href || 
            (item.href !== "/" && location.pathname.startsWith(item.href));
          
          return (
            <NavLink
              key={item.name}
              to={item.href}
              className={({ isActive: navIsActive }) =>
                cn(
                  "flex items-center px-3 py-2.5 rounded-lg text-sm font-medium transition-colors group",
                  (isActive || navIsActive)
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "text-muted-foreground hover:bg-surface hover:text-foreground"
                )
              }
            >
              <item.icon className={cn(
                "w-5 h-5 flex-shrink-0",
                !collapsed && "mr-3"
              )} />
              {!collapsed && (
                <span className="truncate">{item.name}</span>
              )}
            </NavLink>
          );
        })}
      </nav>

      {/* Footer */}
      {!collapsed && (
        <div className="p-4 border-t border-card-border">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
              <span className="text-sm font-medium text-white">JD</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground truncate">
                John Doe
              </p>
              <p className="text-xs text-muted-foreground truncate">
                Event Organizer
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}