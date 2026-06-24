import { createFileRoute } from "@tanstack/react-router";
import { Plus, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { PageHeader } from "@/components/page-header";
import { projects } from "@/lib/crm-data";

export const Route = createFileRoute("/projects")({
  head: () => ({ meta: [{ title: "Projects — Infriva Solutions CRM" }] }),
  component: ProjectsPage,
});

const statusColor: Record<string, string> = {
  "In Progress": "bg-primary/15 text-primary",
  "Review": "bg-warning/15 text-warning",
  "Completed": "bg-success/15 text-success",
  "On Hold": "bg-muted text-muted-foreground",
};

function ProjectsPage() {
  const columns = ["In Progress", "Review", "On Hold", "Completed"];
  return (
    <div className="p-6 max-w-[1400px] mx-auto">
      <PageHeader
        title="Projects"
        description="All active client engagements and deliverables."
        actions={<Button><Plus className="h-4 w-4 mr-1" /> New Project</Button>}
      />
      <div className="grid gap-4 lg:grid-cols-4">
        {columns.map(col => {
          const items = projects.filter(p => p.status === col);
          return (
            <div key={col} className="flex flex-col gap-3">
              <div className="flex items-center justify-between px-1">
                <h3 className="text-sm font-semibold text-foreground">{col}</h3>
                <span className="text-xs text-muted-foreground bg-muted rounded-full px-2 py-0.5">{items.length}</span>
              </div>
              {items.map(p => (
                <Card key={p.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <Badge variant="secondary" className={statusColor[p.status]}>{p.service}</Badge>
                    <p className="font-medium text-foreground mt-2">{p.name}</p>
                    <p className="text-xs text-muted-foreground">{p.client}</p>
                    <div className="mt-3">
                      <div className="flex justify-between text-xs text-muted-foreground mb-1">
                        <span>Progress</span><span className="tabular-nums">{p.progress}%</span>
                      </div>
                      <Progress value={p.progress} className="h-1.5" />
                    </div>
                    <div className="flex items-center justify-between mt-3 pt-3 border-t border-border text-xs">
                      <span className="text-muted-foreground flex items-center gap-1"><Calendar className="h-3 w-3" />{p.due}</span>
                      <span className="text-foreground font-medium">{p.lead}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
              {items.length === 0 && (
                <div className="border border-dashed border-border rounded-lg p-6 text-center text-xs text-muted-foreground">No projects</div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}