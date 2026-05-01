import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { AuthButtons } from '@/components/AuthButtons';

export default async function Home() {
  const { userId } = await auth();

  if (userId) {
    redirect('/dashboard');
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="max-w-2xl space-y-6">
            <Badge variant="secondary" className="inline-flex">
              Fast, secure link shortening
            </Badge>
            <div className="space-y-4">
              <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
                Shorten your URLs, grow your traffic, and analyze clicks with confidence.
              </h1>
              <p className="text-base leading-7 text-muted-foreground sm:text-lg">
                Build memorable links, monitor performance, and keep everything under one roof.
                Our app delivers fast redirects, intuitive tracking, and secure management for every campaign.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <AuthButtons />
              <Button variant="outline" size="sm">
                Learn more
              </Button>
            </div>
          </div>

          <Card className="rounded-3xl border border-border bg-card p-6 shadow-sm">
            <CardHeader className="px-0 pb-4">
              <CardTitle className="text-2xl">Example short link</CardTitle>
              <CardDescription>See how easy it is to get started with a single URL.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-5 px-0">
              <div className="space-y-3">
                <div className="grid gap-2 sm:grid-cols-[1fr_auto]">
                  <Input
                    placeholder="https://example.com/long/url/for/your-campaign"
                    className="w-full"
                    disabled
                  />
                  <Button disabled>Shorten</Button>
                </div>
                <p className="text-sm leading-6 text-muted-foreground">
                  Create an account to generate short URLs, watch click growth, and manage your dashboard.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="space-y-4 text-center">
          <p className="text-sm uppercase tracking-[0.24em] text-muted-foreground">Why we stand out</p>
          <h2 className="text-3xl font-bold sm:text-4xl">Everything you need for smart link management.</h2>
          <p className="mx-auto max-w-2xl text-base leading-7 text-muted-foreground">
            Designed for creators, marketers, and teams who need a fast, reliable way to shorten URLs and measure every click.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <Card className="rounded-3xl border border-border bg-card p-6 text-center">
            <CardHeader className="px-0 pb-4">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                ⚡
              </div>
              <CardTitle className="text-lg">Fast redirects</CardTitle>
            </CardHeader>
            <CardContent className="px-0">
              <CardDescription>
                Deliver instant redirects with a clean, optimized short URL that loads quickly everywhere.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="rounded-3xl border border-border bg-card p-6 text-center">
            <CardHeader className="px-0 pb-4">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary/10 text-secondary">
                📊
              </div>
              <CardTitle className="text-lg">Analytics</CardTitle>
            </CardHeader>
            <CardContent className="px-0">
              <CardDescription>
                Track clicks, top locations, device types, and referral sources from one dashboard.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="rounded-3xl border border-border bg-card p-6 text-center">
            <CardHeader className="px-0 pb-4">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-destructive/10 text-destructive">
                🛡️
              </div>
              <CardTitle className="text-lg">Secure links</CardTitle>
            </CardHeader>
            <CardContent className="px-0">
              <CardDescription>
                Manage your links securely with authenticated access and safe redirect handling.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="rounded-3xl border border-border bg-card p-6 text-center">
            <CardHeader className="px-0 pb-4">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                🌍
              </div>
              <CardTitle className="text-lg">Global reach</CardTitle>
            </CardHeader>
            <CardContent className="px-0">
              <CardDescription>
                Use your links anywhere in the world and keep fast, dependable redirects for all audiences.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator className="my-16" />

      <section className="container mx-auto px-4 py-16">
        <div className="rounded-3xl border border-border bg-card p-10 shadow-sm">
          <div className="flex flex-col items-center justify-between gap-6 text-center lg:flex-row lg:text-left">
            <div className="max-w-2xl">
              <p className="text-sm uppercase tracking-[0.24em] text-muted-foreground">Get started fast</p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Start shortening links in seconds.</h2>
              <p className="mt-4 text-base leading-7 text-muted-foreground">
                Sign up and start using your dashboard right away. Create links, watch analytics, and stay in control.
              </p>
            </div>
            <AuthButtons />
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>&copy; 2026 Link Shortener. Built with Next.js, Clerk, and shadcn/ui.</p>
        </div>
      </footer>
    </div>
  );
}
