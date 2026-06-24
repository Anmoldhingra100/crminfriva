import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, TrendingUp, Users, IndianRupee, Target, Plus } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { PageHeader } from "@/components/page-header";
import { leads, projects, invoices, inr, services } from "@/lib/crm-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dashboard — Infriva Solutions CRM" },
      { name: "description", content: "Overview of leads, revenue, projects and pipeline for Infriva Solutions." },
    ],
  }),
  component: Dashboard,
});

const stats = [
  { label: "Open Leads", value: leads.filter(l => !["Won","Lost"].includes(l.status)).length.toString(), delta: "+12%", icon: Target },
  { label: "Pipeline Value", value: inr(leads.filter(l => !["Won","Lost"].includes(l.status)).reduce((s,l) => s + l.value, 0)), delta: "+8%", icon: TrendingUp },
  { label: "Active Clients", value: "12", delta: "+2", icon: Users },
  { label: "Revenue (MTD)", value: inr(invoices.filter(i => i.status === "Paid").reduce((s,i) => s + i.amount, 0)), delta: "+18%", icon: IndianRupee },
];

const statusColor: Record<string, string> = {
  New: "bg-muted text-muted-foreground",
  Contacted: "bg-chart-2/15 text-chart-2",
  Qualified: "bg-primary/15 text-primary",
  Proposal: "bg-warning/15 text-warning",
  Won: "bg-success/15 text-success",
  Lost: "bg-destructive/15 text-destructive",
};

function Dashboard() {
  const recentLeads = leads.slice(0, 5);
  const activeProjects = projects.filter(p => p.status !== "Completed").slice(0, 4);

  return (
    <div className="p-6 max-w-[1400px] mx-auto">
      <PageHeader
        title="Welcome back, Shalini!"
        description="Here's what's happening at Infriva Solutions today."
        actions={
          <Button asChild>
            <Link to="/leads"><Plus className="h-4 w-4 mr-1" /> New Lead</Link>
          </Button>
        }
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-6">
        {stats.map((s) => (
          <Card key={s.label} className="border-border/60">
            <CardContent className="p-5">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{s.label}</p>
                  <p className="text-2xl font-semibold mt-1 text-foreground">{s.value}</p>
                </div>
                <div className="h-10 w-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                  <s.icon className="h-5 w-5" />
                </div>
              </div>
              <div className="flex items-center gap-1 mt-3 text-xs text-success font-medium">
                <ArrowUpRight className="h-3 w-3" /> {s.delta} vs last month
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-base">Recent Leads</CardTitle>
            <Button variant="ghost" size="sm" asChild>
              <Link to="/leads">View all</Link>
            </Button>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y divide-border">
              {recentLeads.map((l) => (
                <div key={l.id} className="flex items-center justify-between px-6 py-3 hover:bg-muted/40 transition-colors">
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-foreground truncate">{l.name} · <span className="text-muted-foreground">{l.company}</span></p>
                    <p className="text-xs text-muted-foreground truncate">{l.service}</p>
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    <span className="text-sm font-medium tabular-nums">{inr(l.value)}</span>
                    <Badge variant="secondary" className={statusColor[l.status]}>{l.status}</Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Active Projects</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {activeProjects.map((p) => (
              <div key={p.id}>
                <div className="flex justify-between mb-1.5">
                  <p className="text-sm font-medium text-foreground truncate pr-2">{p.name}</p>
                  <span className="text-xs text-muted-foreground tabular-nums">{p.progress}%</span>
                </div>
                <Progress value={p.progress} className="h-1.5" />
                <p className="text-xs text-muted-foreground mt-1">{p.client} · due {p.due}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle className="text-base">Services Snapshot</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {services.slice(0, 4).map((s) => (
              <div key={s.id} className="p-4 rounded-lg border border-border hover:shadow-sm transition-shadow">
                <div className={`inline-flex h-8 px-2.5 rounded-md items-center text-xs font-medium ${s.color}`}>{s.name}</div>
                <p className="text-xs text-muted-foreground mt-2 line-clamp-2">{s.desc}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
