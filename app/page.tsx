import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
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
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-950 dark:to-zinc-900">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center max-w-4xl mx-auto">
          <Badge variant="secondary" className="mb-4">
            🚀 Fast & Reliable URL Shortener
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-zinc-900 dark:text-zinc-100 mb-6">
            Shorten Your Links,
            <span className="text-blue-600 dark:text-blue-400"> Track Your Success</span>
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-8 max-w-2xl mx-auto">
            Create short, memorable links and get detailed analytics on clicks, locations, and devices.
            Perfect for marketing campaigns, social media, and business tracking.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <AuthButtons />
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <Card className="p-6">
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-2xl">Try it now</CardTitle>
              <CardDescription>Enter a long URL to see how it gets shortened</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-2">
                <Input
                  placeholder="https://example.com/very/long/url/that/needs/shortening"
                  className="flex-1"
                  disabled
                />
                <Button disabled>
                  🔗 Shorten
                </Button>
              </div>
              <p className="text-sm text-zinc-500 text-center">
                Sign up to start creating your short links
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
            Why Choose Our Link Shortener?
          </h2>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Powerful features designed for modern businesses and creators
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="text-center">
            <CardHeader>
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mx-auto mb-4 text-2xl">
                ⚡
              </div>
              <CardTitle className="text-xl">Lightning Fast</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Instant link creation with blazing-fast redirects that never slow down your users.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mx-auto mb-4 text-2xl">
                📊
              </div>
              <CardTitle className="text-xl">Detailed Analytics</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Track clicks, geographic data, devices, and referral sources with comprehensive insights.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mx-auto mb-4 text-2xl">
                🛡️
              </div>
              <CardTitle className="text-xl">Secure & Private</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Your links are protected with enterprise-grade security and privacy controls.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center mx-auto mb-4 text-2xl">
                🌍
              </div>
              <CardTitle className="text-xl">Global Scale</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Worldwide CDN ensures your links work fast everywhere, no matter where your audience is.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator className="my-16" />

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-8">
            Join thousands of users who trust our platform for their link shortening needs.
          </p>
          <AuthButtons />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-200 dark:border-zinc-800 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-zinc-500 dark:text-zinc-400">
            <p>&copy; 2024 Link Shortener. Built with Next.js and Clerk.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
