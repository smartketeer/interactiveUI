"use client";

import { useEffect, useState } from "react";
import { Activity, Server, Database, Key, Box } from "lucide-react";
import { cn } from "@/lib/utils";

type SystemStatus = {
  name: string;
  status: "operational" | "degraded" | "down";
  latency: number;
};

type GlobalStatus = {
  status: "healthy" | "degraded" | "down";
  timestamp: string;
  systems: SystemStatus[];
};

export function StatusWidget() {
  const [data, setData] = useState<GlobalStatus | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    const fetchStatus = async () => {
      try {
        const res = await fetch("/api/status");
        if (res.ok) {
          const json = await res.json();
          if (mounted) setData(json);
        }
      } catch (error) {
        console.error("Failed to fetch status");
      } finally {
        if (mounted) setLoading(false);
      }
    };

    fetchStatus();
    // Poll every 5 seconds for the live effect
    const interval = setInterval(fetchStatus, 5000);
    return () => {
      mounted = false;
      clearInterval(interval);
    };
  }, []);

  const getIcon = (name: string) => {
    switch (name) {
      case "Database": return <Database className="h-4 w-4" />;
      case "Redis Cache": return <Box className="h-4 w-4" />;
      case "Auth Service": return <Key className="h-4 w-4" />;
      case "Message Queue": return <Server className="h-4 w-4" />;
      default: return <Activity className="h-4 w-4" />;
    }
  };

  if (loading && !data) {
    return <div className="animate-pulse h-64 surface-structural bg-theme-surface/50" />;
  }

  return (
    <div className="surface-structural p-6 sm:p-8 flex flex-col gap-4 min-w-[300px]">
      <div className="flex items-center justify-between border-b border-theme-border pb-4">
        <div className="flex items-center gap-2">
          <Activity className="h-5 w-5 text-theme-primary" />
          <h3 className="font-semibold text-theme-text font-heading tracking-tight">Live Core Systems</h3>
        </div>
        <div className="flex items-center gap-2">
          <div className={cn("h-2.5 w-2.5 rounded-full animate-pulse", data?.status === "healthy" ? "bg-green-500" : "bg-yellow-500")} />
          <span className="text-xs font-medium uppercase tracking-wider text-theme-muted">{data?.status || "Unknown"}</span>
        </div>
      </div>
      
      <div className="grid gap-4">
        {data?.systems.map((sys) => (
          <div key={sys.name} className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2 text-theme-muted">
              {getIcon(sys.name)}
              <span>{sys.name}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-theme-muted">{sys.latency}ms</span>
              <span className={cn("text-xs font-medium", sys.status === "operational" ? "text-green-500/80" : "text-yellow-500/80")}>
                {sys.status === "operational" ? "Online" : "Degraded"}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-2 text-xs text-theme-muted/60 text-right font-mono">
        Last updated: {data ? new Date(data.timestamp).toLocaleTimeString() : "..."}
      </div>
    </div>
  );
}
