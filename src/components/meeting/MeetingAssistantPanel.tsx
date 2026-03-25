type MeetingAssistantPanelProps = {
  state: 'idle' | 'listening' | 'writing'
}

const assistantCopy = {
  idle: {
    title: 'Assistant on standby',
    body: 'Start the meeting to activate SIMA live assistance and capture the discussion.',
  },
  listening: {
    title: 'SIMA is listening',
    body: 'Voice signals are being monitored in real time to preserve key context and decisions.',
  },
  writing: {
    title: 'SIMA is writing',
    body: 'Insights are being structured into clean notes while the conversation continues.',
  },
}

export default function MeetingAssistantPanel({ state }: MeetingAssistantPanelProps) {
  const content = assistantCopy[state]

  return (
    <section className="rounded-2xl border border-white/10 bg-black/35 p-5 shadow-xl shadow-purple-950/20 backdrop-blur-xl sm:p-6">
      <div className="mb-4 flex items-center gap-3">
        <div className="relative flex h-10 w-10 items-center justify-center rounded-full border border-purple-300/40 bg-purple-500/20">
          <span className={`h-2.5 w-2.5 rounded-full bg-fuchsia-200 ${state === 'idle' ? '' : 'animate-ping'}`} />
          <span className="absolute h-2.5 w-2.5 rounded-full bg-fuchsia-100" />
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-purple-200/80">Assistant panel</p>
          <p className="text-sm text-purple-100/70">Realtime mode · {state}</p>
        </div>
      </div>

      <h2 className="text-xl font-semibold text-white">{content.title}</h2>
      <p className="mt-2 max-w-3xl text-sm text-purple-100/75 sm:text-base">{content.body}</p>
    </section>
  )
}
