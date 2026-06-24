import { createFileRoute } from "@tanstack/react-router";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/page-header";

export const Route = createFileRoute("/settings")({
  head: () => ({ meta: [{ title: "Settings — Infriva Solutions CRM" }] }),
  component: SettingsPage,
});

function SettingsPage() {
  return (
    <div className="p-6 max-w-[900px] mx-auto">
      <PageHeader title="Settings" description="Manage your organization profile and CRM preferences." />
      <div className="space-y-6">
        <Card>
          <CardHeader><CardTitle className="text-base">Organization</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label>Company name</Label>
                <Input defaultValue="Infriva Solutions" />
              </div>
              <div className="space-y-1.5">
                <Label>Website</Label>
                <Input defaultValue="infrivasolutions.com" />
              </div>
              <div className="space-y-1.5">
                <Label>Contact email</Label>
                <Input defaultValue="infrivasolutions@gmail.com" />
              </div>
              <div className="space-y-1.5">
                <Label>Default currency</Label>
                <Input defaultValue="INR (₹)" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader><CardTitle className="text-base">Profile</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label>Full name</Label>
                <Input defaultValue="Shalini  Bhadouria" />
              </div>
              <div className="space-y-1.5">
                <Label>Role</Label>
                <Input defaultValue="Founder & CEO" />
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-end gap-2">
          <Button variant="outline">Cancel</Button>
          <Button>Save changes</Button>
        </div>
      </div>
    </div>
  );
}