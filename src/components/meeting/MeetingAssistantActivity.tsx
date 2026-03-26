type MeetingAssistantActivityProps = {
  state: 'idle' | 'listening' | 'writing'
}

const activityCopy = {
  idle: {
    hint: 'Calm attention maintained. Waiting for conversation to begin.',
    tone: 'Presence mode',
  },
  listening: {
    hint: 'Tracking speech cadence and preserving contextual cues.',
    tone: 'Active listening',
  },
  writing: {
    hint: 'Synthesizing notes and building structured meeting output.',
    tone: 'Writing insights',
  },
}

export default function MeetingAssistantActivity({ state }: MeetingAssistantActivityProps) {
  const copy = activityCopy[state]

  return (
    <div className="space-y-3 rounded-xl border border-white/10 bg-white/5 p-4">
      <div className="flex items-center justify-between gap-3">
        <p className="text-xs uppercase tracking-[0.22em] text-purple-200/80">Assistant activity</p>
        <span className="rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] text-purple-100/80">
          {copy.tone}
        </span>
      </div>

      <div className="grid grid-cols-12 gap-1.5">
        {Array.from({ length: 12 }, (_, index) => {
          const strong = state === 'writing' ? index % 2 === 0 : state === 'listening' ? index % 3 !== 0 : index === 5

          return (
            <span
              key={index}
              className={`h-1.5 rounded-full transition-all ${
                strong ? 'bg-purple-200/95' : 'bg-purple-300/25'
              }`}
              style={{
                animation:
                  state === 'idle' ? undefined : `pulse 1s ${index * 0.06}s ease-in-out infinite`,
              }}
            />
          )
        })}
      </div>

      <p className="text-sm text-purple-100/75">{copy.hint}</p>
    </div>
  )
}
