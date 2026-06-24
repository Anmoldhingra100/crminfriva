export const services = [
  { id: "web", name: "Web & App Development", desc: "Custom web and mobile applications built for scale.", price: "From ₹80,000", color: "bg-chart-1/15 text-chart-1" },
  { id: "uiux", name: "UI/UX Design", desc: "Research-driven product design and design systems.", price: "From ₹45,000", color: "bg-chart-2/15 text-chart-2" },
  { id: "ads", name: "Paid Advertising", desc: "Google, Meta & LinkedIn ad campaigns that convert.", price: "From ₹25,000/mo", color: "bg-chart-4/15 text-chart-4" },
  { id: "seo", name: "SEO", desc: "Technical and content SEO for sustainable growth.", price: "From ₹30,000/mo", color: "bg-chart-5/15 text-chart-5" },
  { id: "graphic", name: "Graphic Design", desc: "Brand identity, social creatives, and marketing assets.", price: "From ₹15,000", color: "bg-primary/15 text-primary" },
  { id: "video", name: "Video Editing", desc: "Reels, ads, explainers and long-form video production.", price: "From ₹20,000", color: "bg-accent-foreground/15 text-accent-foreground" },
  { id: "leads", name: "Lead Generation", desc: "Outbound campaigns and qualified sales pipelines.", price: "From ₹35,000/mo", color: "bg-success/15 text-success" },
];

export type LeadStatus = "New" | "Contacted" | "Qualified" | "Proposal" | "Won" | "Lost";

export const leads: {
  id: string; name: string; company: string; email: string; phone: string;
  service: string; value: number; status: LeadStatus; owner: string; created: string;
}[] = [
  { id: "L-1042", name: "Rohit Sharma", company: "Brightline Foods", email: "rohit@brightline.in", phone: "+91 98200 11220", service: "Web & App Development", value: 250000, status: "Qualified", owner: "Aarav K.", created: "2026-05-28" },
  { id: "L-1041", name: "Sara Mathew", company: "Nova Health", email: "sara@novahealth.com", phone: "+91 99876 44521", service: "UI/UX Design", value: 120000, status: "Proposal", owner: "Priya R.", created: "2026-05-26" },
  { id: "L-1040", name: "Vikram Singh", company: "Trail & Track", email: "vikram@trailtrack.co", phone: "+91 90123 99001", service: "SEO", value: 90000, status: "Contacted", owner: "Aarav K.", created: "2026-05-24" },
  { id: "L-1039", name: "Meera Iyer", company: "Lumen Studio", email: "meera@lumen.studio", phone: "+91 98777 21134", service: "Graphic Design", value: 45000, status: "New", owner: "Dev S.", created: "2026-05-23" },
  { id: "L-1038", name: "Harsh Patel", company: "Quickship Logistics", email: "harsh@quickship.in", phone: "+91 93456 78021", service: "Lead Generation", value: 180000, status: "Won", owner: "Priya R.", created: "2026-05-19" },
  { id: "L-1037", name: "Ananya Gupta", company: "Bloom Beauty", email: "ananya@bloombeauty.com", phone: "+91 98090 12233", service: "Paid Advertising", value: 75000, status: "Qualified", owner: "Dev S.", created: "2026-05-17" },
  { id: "L-1036", name: "Karan Mehta", company: "Skyline Realty", email: "karan@skylinerealty.in", phone: "+91 99110 23344", service: "Video Editing", value: 60000, status: "Lost", owner: "Aarav K.", created: "2026-05-12" },
  { id: "L-1035", name: "Neha Verma", company: "Edusprint", email: "neha@edusprint.com", phone: "+91 90909 88776", service: "Web & App Development", value: 320000, status: "Proposal", owner: "Priya R.", created: "2026-05-08" },
];

export const clients = [
  { id: "C-201", name: "Brightline Foods", contact: "Rohit Sharma", since: "2025-11-12", services: ["Web & App Development", "SEO"], mrr: 45000, status: "Active" },
  { id: "C-202", name: "Quickship Logistics", contact: "Harsh Patel", since: "2025-08-04", services: ["Lead Generation", "Paid Advertising"], mrr: 95000, status: "Active" },
  { id: "C-203", name: "Lumen Studio", contact: "Meera Iyer", since: "2026-01-22", services: ["Graphic Design"], mrr: 18000, status: "Active" },
  { id: "C-204", name: "Nova Health", contact: "Sara Mathew", since: "2025-06-30", services: ["UI/UX Design", "Web & App Development"], mrr: 60000, status: "Onboarding" },
  { id: "C-205", name: "Edusprint", contact: "Neha Verma", since: "2024-12-15", services: ["Video Editing", "SEO"], mrr: 32000, status: "Active" },
  { id: "C-206", name: "Bloom Beauty", contact: "Ananya Gupta", since: "2025-03-18", services: ["Paid Advertising", "Graphic Design"], mrr: 40000, status: "Paused" },
];

export const projects = [
  { id: "P-501", name: "Brightline E-commerce Revamp", client: "Brightline Foods", service: "Web & App Development", progress: 72, due: "2026-06-20", status: "In Progress", lead: "Aarav K." },
  { id: "P-502", name: "Nova Health Mobile App", client: "Nova Health", service: "UI/UX + Development", progress: 35, due: "2026-08-10", status: "In Progress", lead: "Priya R." },
  { id: "P-503", name: "Quickship Q3 Ad Campaign", client: "Quickship Logistics", service: "Paid Advertising", progress: 88, due: "2026-06-05", status: "Review", lead: "Dev S." },
  { id: "P-504", name: "Lumen Brand Refresh", client: "Lumen Studio", service: "Graphic Design", progress: 100, due: "2026-05-25", status: "Completed", lead: "Priya R." },
  { id: "P-505", name: "Edusprint YouTube Series", client: "Edusprint", service: "Video Editing", progress: 50, due: "2026-07-01", status: "In Progress", lead: "Aarav K." },
  { id: "P-506", name: "Bloom SEO Audit", client: "Bloom Beauty", service: "SEO", progress: 20, due: "2026-06-30", status: "On Hold", lead: "Dev S." },
];

export const invoices = [
  { id: "INV-2026-041", client: "Brightline Foods", amount: 125000, issued: "2026-05-15", due: "2026-06-14", status: "Paid" },
  { id: "INV-2026-040", client: "Quickship Logistics", amount: 95000, issued: "2026-05-10", due: "2026-06-09", status: "Paid" },
  { id: "INV-2026-039", client: "Nova Health", amount: 180000, issued: "2026-05-05", due: "2026-06-04", status: "Pending" },
  { id: "INV-2026-038", client: "Edusprint", amount: 60000, issued: "2026-04-28", due: "2026-05-28", status: "Overdue" },
  { id: "INV-2026-037", client: "Lumen Studio", amount: 45000, issued: "2026-04-20", due: "2026-05-20", status: "Paid" },
  { id: "INV-2026-036", client: "Bloom Beauty", amount: 75000, issued: "2026-04-15", due: "2026-05-15", status: "Pending" },
];

export const team = [
  { name: "Shalini  Bhadouria", role: "Founder & CEO", email: "aarav@infriva.com", deals: 14, won: 9 },
  { name: "Priya Raghavan", role: "Head of Design", email: "priya@infriva.com", deals: 11, won: 7 },
  { name: "Dev Saxena", role: "Growth Lead", email: "dev@infriva.com", deals: 18, won: 12 },
  { name: "Ishita Bose", role: "Project Manager", email: "ishita@infriva.com", deals: 9, won: 6 },
  { name: "Rahul Nair", role: "Senior Developer", email: "rahul@infriva.com", deals: 5, won: 4 },
  { name: "Tanvi Joshi", role: "Video Producer", email: "tanvi@infriva.com", deals: 6, won: 5 },
];

export const inr = (n: number) =>
  new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(n);