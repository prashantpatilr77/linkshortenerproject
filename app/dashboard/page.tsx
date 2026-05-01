import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default async function Dashboard() {
  const { userId } = await auth();

  if (!userId) {
    redirect('/');
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="space-y-8">
        <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
          <div className="space-y-3">
            <Badge variant="secondary">Dashboard</Badge>
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Your short links, analytics, and campaign insights
              </h1>
              <p className="mt-3 max-w-2xl text-base leading-7 text-muted-foreground">
                Manage your links and monitor performance from one secure dashboard.
              </p>
            </div>
          </div>
          <Button variant="secondary">Create new link</Button>
        </div>

        <Card className="rounded-3xl border border-border bg-card p-6 shadow-sm">
          <CardHeader className="px-0 pb-4">
            <CardTitle className="text-2xl">Overview</CardTitle>
            <CardDescription>
              Quick stats, recent activity, and your most important link metrics at a glance.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4 sm:grid-cols-3">
            <Card className="rounded-3xl border border-border bg-background p-5 text-center">
              <CardHeader className="px-0 pb-3">
                <CardTitle className="text-base font-semibold">Total Clicks</CardTitle>
              </CardHeader>
              <CardContent className="px-0">
                <p className="text-3xl font-bold">1.2K</p>
                <CardDescription>Last 30 days</CardDescription>
              </CardContent>
            </Card>
            <Card className="rounded-3xl border border-border bg-background p-5 text-center">
              <CardHeader className="px-0 pb-3">
                <CardTitle className="text-base font-semibold">Active Links</CardTitle>
              </CardHeader>
              <CardContent className="px-0">
                <p className="text-3xl font-bold">24</p>
                <CardDescription>Live URLs</CardDescription>
              </CardContent>
            </Card>
            <Card className="rounded-3xl border border-border bg-background p-5 text-center">
              <CardHeader className="px-0 pb-3">
                <CardTitle className="text-base font-semibold">Top Location</CardTitle>
              </CardHeader>
              <CardContent className="px-0">
                <p className="text-3xl font-bold">United States</p>
                <CardDescription>Most clicks this week</CardDescription>
              </CardContent>
            </Card>
          </CardContent>
          <CardFooter className="justify-end gap-2 px-0 pt-4">
            <Button variant="outline">View analytics</Button>
            <Button>Manage links</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
