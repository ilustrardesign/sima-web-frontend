import { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AnimatedGradientBackground from '../components/login/AnimatedGradientBackground'
import MeetingAssistantPanel from '../components/meeting/MeetingAssistantPanel'
import MeetingAudioVisualizer from '../components/meeting/MeetingAudioVisualizer'
import MeetingHeader from '../components/meeting/MeetingHeader'
import MeetingMainControl from '../components/meeting/MeetingMainControl'
import MeetingSecondaryControls from '../components/meeting/MeetingSecondaryControls'

type MeetingState = 'idle' | 'listening' | 'writing'

const stateLabels: Record<MeetingState, string> = {
  idle: 'Idle',
  listening: 'Listening',
  writing: 'Writing',
}

function formatDuration(totalSeconds: number) {
  const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, '0')
  const seconds = String(totalSeconds % 60).padStart(2, '0')
  return `${minutes}:${seconds}`
}

export default function MeetingPage() {
  const navigate = useNavigate()
  const [meetingState, setMeetingState] = useState<MeetingState>('idle')
  const [elapsedSeconds, setElapsedSeconds] = useState(0)

  const isActive = meetingState !== 'idle'

  useEffect(() => {
    if (!isActive) {
      return
    }

    const timer = window.setInterval(() => {
      setElapsedSeconds((value) => value + 1)
    }, 1000)

    return () => window.clearInterval(timer)
  }, [isActive])

  useEffect(() => {
    if (!isActive) {
      return
    }

    const phaseCycle = window.setInterval(() => {
      setMeetingState((current) => (current === 'listening' ? 'writing' : 'listening'))
    }, 3200)

    return () => window.clearInterval(phaseCycle)
  }, [isActive])

  const helperText = useMemo(() => {
    if (meetingState === 'idle') {
      return 'Press start when your team is ready. SIMA will begin live listening and writing instantly.'
    }

    if (meetingState === 'listening') {
      return 'Listening mode is active. SIMA is following the conversation and capturing key statements.'
    }

    return 'Writing mode is active. SIMA is drafting structured notes from the recent speaking segment.'
  }, [meetingState])

  const handleToggleMeeting = () => {
    if (isActive) {
      setMeetingState('idle')
      setElapsedSeconds(0)
      return
    }

    setElapsedSeconds(0)
    setMeetingState('listening')
  }

  const handleEndMeeting = () => {
    setMeetingState('idle')
    setElapsedSeconds(0)
    navigate('/transcript')
  }

  const statusBadgeStyle =
    meetingState === 'idle'
      ? 'border-white/20 bg-white/10 text-purple-100'
      : meetingState === 'listening'
        ? 'border-emerald-300/35 bg-emerald-500/15 text-emerald-100'
        : 'border-sky-300/35 bg-sky-500/15 text-sky-100'

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#05030b] px-4 py-5 sm:px-6 sm:py-8">
      <AnimatedGradientBackground />

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-2.5rem)] w-full max-w-6xl flex-col gap-4 sm:gap-6">
        <MeetingHeader
          title="Live Meeting Control"
          subtitle="Monitor session state, guide SIMA behavior, and present a polished assistant experience in real time."
          statusBadge={
            <span
              className={`inline-flex rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] ${statusBadgeStyle}`}
            >
              {stateLabels[meetingState]}
            </span>
          }
          actions={
            <MeetingSecondaryControls
              onBackHome={() => navigate('/home')}
              onEndMeeting={handleEndMeeting}
              disabledEnd={!isActive}
            />
          }
        />

        <section className="grid flex-1 gap-4 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:gap-6">
          <div className="flex min-h-[420px] flex-col gap-4">
            <MeetingMainControl
              timerText={formatDuration(elapsedSeconds)}
              helperText={helperText}
              active={isActive}
              onToggle={handleToggleMeeting}
              stateBadge={
                <span className="inline-flex rounded-full border border-purple-300/30 bg-purple-500/15 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-purple-100">
                  {isActive ? 'Session in progress' : 'Ready to start'}
                </span>
              }
            />
            <MeetingAudioVisualizer active={isActive} stateLabel={stateLabels[meetingState]} />
          </div>

          <div className="flex min-h-[420px] flex-col justify-end">
            <MeetingAssistantPanel state={meetingState} />
          </div>
        </section>
      </div>
    </main>
  )
}
