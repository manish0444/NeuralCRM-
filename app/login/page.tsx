'use client'

import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from 'next/link'
import { FcGoogle } from 'react-icons/fc'

export default function LoginPage() {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    const result = await signIn('credentials', {
      redirect: false,
      login,
      password,
    })
    if (result?.error) {
      setError('Invalid login credentials')
    } else {
      router.push('/customer')
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-600 to-blue-600">
      <Card className="w-[400px] shadow-2xl">
        <CardHeader className="space-y-1">
          <CardTitle className="text-3xl font-bold text-center">Sign in</CardTitle>
          <CardDescription className="text-center">Enter your credentials to access your account</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="login">Username or Email</Label>
              <Input 
                id="login" 
                type="text" 
                placeholder="johndoe or john@example.com"
                value={login} 
                onChange={(e) => setLogin(e.target.value)} 
                required 
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input 
                id="password" 
                type="password" 
                placeholder="••••••••"
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required 
              />
            </div>
            {error && <p className="text-sm text-red-500">{error}</p>}
            <Button className="w-full" type="submit">Sign in</Button>
          </form>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
            </div>
          </div>
          <Button variant="outline" className="w-full" onClick={() => signIn('google', { callbackUrl: '/customer' })}>
            <FcGoogle className="mr-2 h-4 w-4" />
            Sign in with Google
          </Button>
        </CardContent>
        <CardFooter>
          <p className="text-sm text-center w-full">
            Don't have an account?{" "}
            <Link href="/signup" className="text-blue-500 hover:underline">
              Sign up
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}

