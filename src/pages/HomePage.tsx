import { useNavigate } from 'react-router-dom'
import AnimatedGradientBackground from '../components/login/AnimatedGradientBackground'
import HomeHeroSection from '../components/home/HomeHeroSection'
import HomeInfoCard from '../components/home/HomeInfoCard'
import HomeTopBar from '../components/home/HomeTopBar'

const homeCards = [
  {
    title: 'Recent session',
    value: 'Product sync · 32 min',
    description: 'Last transcript generated 8 minutes ago with highlights and action items.',
    badge: 'Ready to review',
  },
  {
    title: 'System status',
    value: 'Realtime engine online',
    description: 'Speech capture and summarization pipelines are stable for this demo run.',
    badge: 'All services healthy',
  },
  {
    title: 'Local demo mode',
    value: 'Sandbox workspace',
    description: 'Data stays in this demo environment. Perfect for safe presentations.',
    badge: 'No external sync',
  },
]

export default function HomePage() {
  const navigate = useNavigate()

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#05030b] px-4 py-6 sm:px-6 sm:py-8">
      <AnimatedGradientBackground />

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-3rem)] w-full max-w-6xl flex-col gap-6 lg:gap-8">
        <HomeTopBar currentUser="Ari Mitchell" onLogout={() => navigate('/')} />

        <HomeHeroSection onNewMeeting={() => navigate('/meeting')} />

        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {homeCards.map((card) => (
            <HomeInfoCard key={card.title} {...card} />
          ))}
        </section>
      </div>
    </main>
  )
}
