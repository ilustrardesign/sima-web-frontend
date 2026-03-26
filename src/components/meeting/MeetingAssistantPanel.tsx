import MeetingAssistantActivity from './MeetingAssistantActivity'
import MeetingAssistantPresenceOrb from './MeetingAssistantPresenceOrb'

type MeetingAssistantPanelProps = {
  state: 'idle' | 'listening' | 'writing'
}

const assistantCopy = {
  idle: {
    title: 'Assistant on standby',
    body: 'SIMA stays attentive during silence and keeps presence in the room before speech begins.',
  },
  listening: {
    title: 'SIMA is listening',
    body: 'Subtle signal tracking indicates active attention while preserving speaker intent and timing.',
  },
  writing: {
    title: 'SIMA is writing',
    body: 'Structured synthesis is underway, converting recent discussion into concise draft notes.',
  },
}

const stateLabel = {
  idle: 'Idle',
  listening: 'Listening',
  writing: 'Writing',
}

export default function MeetingAssistantPanel({ state }: MeetingAssistantPanelProps) {
  const content = assistantCopy[state]

  return (
    <section className="rounded-2xl border border-white/10 bg-black/35 p-5 shadow-xl shadow-purple-950/20 backdrop-blur-xl sm:p-6">
      <div className="mb-4 flex items-center justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-purple-200/80">Assistant panel</p>
          <h2 className="mt-1 text-lg font-semibold text-white sm:text-xl">{content.title}</h2>
        </div>
        <span className="inline-flex rounded-full border border-purple-300/30 bg-purple-500/15 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-purple-100">
          State: {stateLabel[state]}
        </span>
      </div>

      <p className="text-sm text-purple-100/75 sm:text-base">{content.body}</p>

      <div className="mt-5 grid gap-5 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center">
        <MeetingAssistantPresenceOrb state={state} />
        <MeetingAssistantActivity state={state} />
      </div>
    </section>
  )
}
