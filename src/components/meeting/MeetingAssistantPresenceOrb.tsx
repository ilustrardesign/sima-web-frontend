type MeetingAssistantPresenceOrbProps = {
  state: 'idle' | 'listening' | 'writing'
}

const orbitDots = Array.from({ length: 8 }, (_, index) => index)

export default function MeetingAssistantPresenceOrb({ state }: MeetingAssistantPresenceOrbProps) {
  const isListening = state === 'listening'
  const isWriting = state === 'writing'

  return (
    <div className="relative mx-auto flex h-52 w-52 items-center justify-center sm:h-56 sm:w-56">
      <div
        className={`absolute inset-0 rounded-full border transition-all duration-500 ${
          isWriting
            ? 'border-sky-300/50 bg-sky-500/10'
            : isListening
              ? 'border-emerald-300/50 bg-emerald-500/10'
              : 'border-purple-300/35 bg-purple-500/10'
        } ${state === 'idle' ? 'animate-pulse' : ''}`}
      />
      <div
        className={`absolute inset-5 rounded-full border ${
          isWriting
            ? 'border-sky-200/40'
            : isListening
              ? 'border-emerald-200/40'
              : 'border-purple-200/30'
        } ${state !== 'idle' ? 'animate-pulse' : ''}`}
      />

      <div
        className={`relative z-10 flex h-24 w-24 items-center justify-center rounded-full border shadow-[0_0_70px_-30px_rgba(217,70,239,0.95)] transition-all duration-500 ${
          isWriting
            ? 'border-sky-200/60 bg-gradient-to-br from-sky-300/80 to-indigo-500/80'
            : isListening
              ? 'border-emerald-100/60 bg-gradient-to-br from-emerald-300/80 to-cyan-500/75'
              : 'border-purple-100/55 bg-gradient-to-br from-purple-400/80 to-fuchsia-600/70'
        }`}
      >
        <span className="h-3.5 w-3.5 rounded-full bg-white/90" />
      </div>

      {isListening && (
        <div className="absolute bottom-8 flex items-end gap-1.5">
          {[0, 1, 2, 3, 4].map((bar) => (
            <span
              key={bar}
              className="w-1 rounded-full bg-emerald-100/90"
              style={{
                height: `${8 + (bar % 3) * 7}px`,
                animation: `pulse 1.1s ${bar * 0.1}s ease-in-out infinite`,
              }}
            />
          ))}
        </div>
      )}

      {isWriting &&
        orbitDots.map((dot) => {
          const angle = (dot / orbitDots.length) * Math.PI * 2
          const x = Math.cos(angle) * 92
          const y = Math.sin(angle) * 92

          return (
            <span
              key={dot}
              className="absolute h-2 w-2 rounded-full bg-sky-200/90"
              style={{
                transform: `translate(${x}px, ${y}px)`,
                animation: `pulse 1.2s ${dot * 0.1}s ease-in-out infinite`,
              }}
            />
          )
        })}
    </div>
  )
}
