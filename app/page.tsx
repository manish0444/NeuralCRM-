import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Zap, BarChart3, MountainIcon } from 'lucide-react'

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="/">
          <MountainIcon className="h-6 w-6" />
          <span className="ml-2 text-2xl font-bold">NeuralCRM</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#features">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#pricing">
            Pricing
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#about">
            About
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button asChild variant="ghost">
            <Link href="/login">Login</Link>
          </Button>
          <Button asChild>
            <Link href="/signup">Sign Up</Link>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-purple-600 to-blue-600">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center text-white">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                Welcome to NeuralCRM
              </h1>
              <p className="mx-auto max-w-[700px] text-xl md:text-2xl text-gray-200">
                Revolutionize your customer relationships with AI-driven insights and predictions.
              </p>
              <Button size="lg" variant="secondary" asChild>
                <Link href="/signup">Get Started</Link>
              </Button>
            </div>
          </div>
        </section>

        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Key Features</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <Brain className="h-8 w-8 mb-2 text-purple-600" />
                  <CardTitle>AI-Powered Insights</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Leverage machine learning for predictive analytics and customer behavior insights.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Zap className="h-8 w-8 mb-2 text-yellow-500" />
                  <CardTitle>Automated Workflows</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Streamline your processes with intelligent automation and task management.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <BarChart3 className="h-8 w-8 mb-2 text-blue-600" />
                  <CardTitle>Advanced Reporting</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Generate comprehensive reports and visualizations for data-driven decision making.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Pricing Plans</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Starter</CardTitle>
                  <CardDescription>For small businesses</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold mb-2">$29/mo</p>
                  <ul className="mt-4 space-y-2">
                    <li>Up to 1,000 contacts</li>
                    <li>Basic AI insights</li>
                    <li>Email support</li>
                  </ul>
                  <Button className="w-full mt-4">Get Started</Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Professional</CardTitle>
                  <CardDescription>For growing teams</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold mb-2">$99/mo</p>
                  <ul className="mt-4 space-y-2">
                    <li>Up to 10,000 contacts</li>
                    <li>Advanced AI insights</li>
                    <li>24/7 support</li>
                  </ul>
                  <Button className="w-full mt-4">Get Started</Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Enterprise</CardTitle>
                  <CardDescription>For large organizations</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold mb-2">Custom</p>
                  <ul className="mt-4 space-y-2">
                    <li>Unlimited contacts</li>
                    <li>Custom AI models</li>
                    <li>Dedicated account manager</li>
                  </ul>
                  <Button className="w-full mt-4">Contact Sales</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 NeuralCRM. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

