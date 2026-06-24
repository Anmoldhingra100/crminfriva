import { createFileRoute } from "@tanstack/react-router";
import { Plus, Download } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/page-header";
import { invoices, inr } from "@/lib/crm-data";

export const Route = createFileRoute("/invoices")({
  head: () => ({ meta: [{ title: "Invoices — Infriva Solutions CRM" }] }),
  component: InvoicesPage,
});

const statusColor: Record<string, string> = {
  Paid: "bg-success/15 text-success",
  Pending: "bg-warning/15 text-warning",
  Overdue: "bg-destructive/15 text-destructive",
};

function InvoicesPage() {
  const total = invoices.reduce((s, i) => s + i.amount, 0);
  const paid = invoices.filter(i => i.status === "Paid").reduce((s, i) => s + i.amount, 0);
  const overdue = invoices.filter(i => i.status === "Overdue").reduce((s, i) => s + i.amount, 0);

  return (
    <div className="p-6 max-w-[1400px] mx-auto">
      <PageHeader
        title="Invoices"
        description="Billing, payments and outstanding amounts."
        actions={<Button><Plus className="h-4 w-4 mr-1" /> New Invoice</Button>}
      />

      <div className="grid gap-4 sm:grid-cols-3 mb-6">
        {[
          { label: "Total Billed", value: inr(total), tone: "text-foreground" },
          { label: "Paid", value: inr(paid), tone: "text-success" },
          { label: "Overdue", value: inr(overdue), tone: "text-destructive" },
        ].map(s => (
          <Card key={s.label}>
            <CardContent className="p-5">
              <p className="text-sm text-muted-foreground">{s.label}</p>
              <p className={`text-2xl font-semibold mt-1 tabular-nums ${s.tone}`}>{s.value}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardContent className="p-0 overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-muted/50 text-muted-foreground">
              <tr>
                <th className="text-left font-medium px-4 py-3">Invoice</th>
                <th className="text-left font-medium px-4 py-3">Client</th>
                <th className="text-right font-medium px-4 py-3">Amount</th>
                <th className="text-left font-medium px-4 py-3">Issued</th>
                <th className="text-left font-medium px-4 py-3">Due</th>
                <th className="text-left font-medium px-4 py-3">Status</th>
                <th className="text-right font-medium px-4 py-3"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {invoices.map(i => (
                <tr key={i.id} className="hover:bg-muted/30">
                  <td className="px-4 py-3 font-medium text-foreground">{i.id}</td>
                  <td className="px-4 py-3 text-muted-foreground">{i.client}</td>
                  <td className="px-4 py-3 text-right tabular-nums font-medium">{inr(i.amount)}</td>
                  <td className="px-4 py-3 text-muted-foreground">{i.issued}</td>
                  <td className="px-4 py-3 text-muted-foreground">{i.due}</td>
                  <td className="px-4 py-3"><Badge variant="secondary" className={statusColor[i.status]}>{i.status}</Badge></td>
                  <td className="px-4 py-3 text-right">
                    <Button variant="ghost" size="sm"><Download className="h-4 w-4" /></Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
}