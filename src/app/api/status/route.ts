import { NextResponse } from "next/server";

export async function GET() {
  // Simulate checking various systems for the "Senior Flex" widget
  const systems = [
    { name: "Database", status: "operational", latency: Math.floor(Math.random() * 50) + 10 },
    { name: "Redis Cache", status: "operational", latency: Math.floor(Math.random() * 20) + 5 },
    { name: "Auth Service", status: "operational", latency: Math.floor(Math.random() * 100) + 20 },
    { name: "Message Queue", status: Math.random() > 0.95 ? "degraded" : "operational", latency: Math.floor(Math.random() * 200) + 50 },
  ];

  const allOperational = systems.every(s => s.status === "operational");

  return NextResponse.json(
    {
      status: allOperational ? "healthy" : "degraded",
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      systems
    },
    { status: 200, headers: { "Cache-Control": "no-store" } }
  );
}
