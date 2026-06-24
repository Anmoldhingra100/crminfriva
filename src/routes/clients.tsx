import { createFileRoute } from "@tanstack/react-router";
import { Plus, Building2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/page-header";
import { clients, inr } from "@/lib/crm-data";

export const Route = createFileRoute("/clients")({
  head: () => ({ meta: [{ title: "Clients — Infriva Solutions CRM" }] }),
  component: ClientsPage,
});

const statusColor: Record<string, string> = {
  Active: "bg-success/15 text-success",
  Onboarding: "bg-chart-2/15 text-chart-2",
  Paused: "bg-warning/15 text-warning",
};

function ClientsPage() {
  return (
    <div className="p-6 max-w-[1400px] mx-auto">
      <PageHeader
        title="Clients"
        description="Active and ongoing accounts with Infriva Solutions."
        actions={<Button><Plus className="h-4 w-4 mr-1" /> Add Client</Button>}
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {clients.map(c => (
          <Card key={c.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-5">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                    <Building2 className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{c.name}</p>
                    <p className="text-xs text-muted-foreground">{c.contact}</p>
                  </div>
                </div>
                <Badge variant="secondary" className={statusColor[c.status]}>{c.status}</Badge>
              </div>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {c.services.map(s => (
                  <span key={s} className="text-xs px-2 py-0.5 rounded-md bg-muted text-muted-foreground">{s}</span>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-border flex justify-between text-sm">
                <div>
                  <p className="text-xs text-muted-foreground">MRR</p>
                  <p className="font-semibold text-foreground tabular-nums">{inr(c.mrr)}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-muted-foreground">Client since</p>
                  <p className="font-medium text-foreground">{c.since}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}