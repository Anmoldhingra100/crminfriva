import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Plus, Search, Mail, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PageHeader } from "@/components/page-header";
import { leads, inr, type LeadStatus } from "@/lib/crm-data";

export const Route = createFileRoute("/leads")({
  head: () => ({ meta: [{ title: "Leads — Infriva Solutions CRM" }] }),
  component: LeadsPage,
});

const statusColor: Record<LeadStatus, string> = {
  New: "bg-muted text-muted-foreground",
  Contacted: "bg-chart-2/15 text-chart-2",
  Qualified: "bg-primary/15 text-primary",
  Proposal: "bg-warning/15 text-warning",
  Won: "bg-success/15 text-success",
  Lost: "bg-destructive/15 text-destructive",
};

const filters: (LeadStatus | "All")[] = ["All", "New", "Contacted", "Qualified", "Proposal", "Won", "Lost"];

function LeadsPage() {
  const [filter, setFilter] = useState<LeadStatus | "All">("All");
  const [q, setQ] = useState("");
  const filtered = leads.filter(l =>
    (filter === "All" || l.status === filter) &&
    (q === "" || `${l.name} ${l.company} ${l.email}`.toLowerCase().includes(q.toLowerCase()))
  );

  return (
    <div className="p-6 max-w-[1400px] mx-auto">
      <PageHeader
        title="Leads"
        description="Track and convert prospects across all Infriva services."
        actions={<Button><Plus className="h-4 w-4 mr-1" /> Add Lead</Button>}
      />

      <div className="flex flex-col sm:flex-row gap-3 mb-4">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search leads..." className="pl-9" />
        </div>
        <div className="flex gap-1.5 flex-wrap">
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-3 h-9 rounded-md text-sm font-medium transition-colors ${
                filter === f ? "bg-primary text-primary-foreground" : "bg-card border border-border text-foreground hover:bg-muted"
              }`}
            >{f}</button>
          ))}
        </div>
      </div>

      <Card>
        <CardContent className="p-0 overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-muted/50 text-muted-foreground">
              <tr>
                <th className="text-left font-medium px-4 py-3">Lead</th>
                <th className="text-left font-medium px-4 py-3">Service</th>
                <th className="text-left font-medium px-4 py-3">Contact</th>
                <th className="text-right font-medium px-4 py-3">Value</th>
                <th className="text-left font-medium px-4 py-3">Status</th>
                <th className="text-left font-medium px-4 py-3">Owner</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {filtered.map(l => (
                <tr key={l.id} className="hover:bg-muted/30 transition-colors">
                  <td className="px-4 py-3">
                    <div className="font-medium text-foreground">{l.name}</div>
                    <div className="text-xs text-muted-foreground">{l.company} · {l.id}</div>
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">{l.service}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground"><Mail className="h-3 w-3" />{l.email}</div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mt-0.5"><Phone className="h-3 w-3" />{l.phone}</div>
                  </td>
                  <td className="px-4 py-3 text-right tabular-nums font-medium">{inr(l.value)}</td>
                  <td className="px-4 py-3"><Badge variant="secondary" className={statusColor[l.status]}>{l.status}</Badge></td>
                  <td className="px-4 py-3 text-muted-foreground">{l.owner}</td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr><td colSpan={6} className="text-center py-10 text-muted-foreground">No leads match your filters.</td></tr>
              )}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
}