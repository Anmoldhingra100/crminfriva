import { createFileRoute } from "@tanstack/react-router";
import { Plus, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/page-header";
import { services } from "@/lib/crm-data";

export const Route = createFileRoute("/services")({
  head: () => ({ meta: [{ title: "Services — Infriva Solutions CRM" }] }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <div className="p-6 max-w-[1400px] mx-auto">
      <PageHeader
        title="Services"
        description="The full suite of services Infriva Solutions offers."
        actions={<Button><Plus className="h-4 w-4 mr-1" /> Add Service</Button>}
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map(s => (
          <Card key={s.id} className="group hover:shadow-md transition-shadow">
            <CardContent className="p-5">
              <div className={`inline-flex px-2.5 h-7 items-center rounded-md text-xs font-medium ${s.color}`}>{s.name}</div>
              <p className="text-sm text-muted-foreground mt-3">{s.desc}</p>
              <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
                <span className="text-sm font-semibold text-foreground">{s.price}</span>
                <button className="text-sm font-medium text-primary inline-flex items-center gap-1 opacity-70 group-hover:opacity-100 transition-opacity">
                  Details <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}