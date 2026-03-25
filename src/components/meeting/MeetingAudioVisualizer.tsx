type MeetingAudioVisualizerProps = {
  active: boolean
  stateLabel: string
}

const bars = Array.from({ length: 18 }, (_, index) => index)

export default function MeetingAudioVisualizer({ active, stateLabel }: MeetingAudioVisualizerProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/35 p-4 shadow-xl shadow-purple-950/20 backdrop-blur-xl sm:p-5">
      <div className="mb-3 flex items-center justify-between">
        <p className="text-xs uppercase tracking-[0.24em] text-purple-200/75">Audio activity</p>
        <span className="text-xs text-purple-100/70">{stateLabel}</span>
      </div>

      <div className="flex h-20 items-end justify-center gap-1.5 sm:h-24">
        {bars.map((bar) => {
          const activeHeight = 16 + ((bar * 7) % 44)
          const idleHeight = 8 + ((bar * 3) % 16)
          const barHeight = active ? activeHeight : idleHeight

          return (
            <div
              key={bar}
              className="w-1.5 rounded-full bg-gradient-to-t from-purple-900/70 via-purple-400/90 to-fuchsia-200/95 transition-all duration-300"
              style={{
                height: `${barHeight}px`,
                opacity: active ? 1 : 0.5,
                animation: active ? `pulse 1.2s ${bar * 0.05}s ease-in-out infinite` : undefined,
              }}
            />
          )
        })}
      </div>
    </div>
  )
}
