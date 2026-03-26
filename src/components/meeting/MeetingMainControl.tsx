import type { ReactNode } from 'react'

type MeetingMainControlProps = {
  timerText: string
  helperText: string
  active: boolean
  onToggle: () => void
  stateBadge: ReactNode
}

export default function MeetingMainControl({
  timerText,
  helperText,
  active,
  onToggle,
  stateBadge,
}: MeetingMainControlProps) {
  return (
    <section className="flex flex-col items-center gap-6 rounded-3xl border border-white/10 bg-gradient-to-b from-white/8 via-white/5 to-black/35 px-6 py-10 shadow-2xl shadow-purple-950/25 backdrop-blur-xl sm:px-10">
      {stateBadge}

      <button
        type="button"
        onClick={onToggle}
        className="group relative flex h-48 w-48 items-center justify-center rounded-full border border-white/20 bg-gradient-to-br from-purple-500 to-fuchsia-600 shadow-[0_0_90px_-25px_rgba(168,85,247,0.95)] transition hover:brightness-110 focus:outline-none focus:ring-4 focus:ring-purple-300/35 sm:h-56 sm:w-56"
      >
        <span
          className={`absolute inset-3 rounded-full border transition ${
            active ? 'border-fuchsia-100/70' : 'border-purple-100/45'
          }`}
        />
        <span className="text-sm font-semibold uppercase tracking-[0.3em] text-white">
          {active ? 'Stop' : 'Start'}
        </span>
      </button>

      <div className="space-y-2 text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-purple-200/80">Session timer</p>
        <p className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">{timerText}</p>
      </div>

      <p className="max-w-md text-center text-sm text-purple-100/75 sm:text-base">{helperText}</p>
    </section>
  )
}
