import type { FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import AnimatedGradientBackground from '../components/login/AnimatedGradientBackground'
import LoginCard from '../components/login/LoginCard'

export default function LoginPage() {
  const navigate = useNavigate()

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    navigate('/home')
  }

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#05030b] px-4 py-10 sm:px-6">
      <AnimatedGradientBackground />
      <div className="relative z-10 w-full max-w-lg">
        <LoginCard onSubmit={handleSubmit} />
      </div>
    </main>
  )
}
