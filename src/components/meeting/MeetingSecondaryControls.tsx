type MeetingSecondaryControlsProps = {
  onBackHome: () => void
  onEndMeeting: () => void
  disabledEnd: boolean
}

export default function MeetingSecondaryControls({
  onBackHome,
  onEndMeeting,
  disabledEnd,
}: MeetingSecondaryControlsProps) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <button
        type="button"
        onClick={onBackHome}
        className="rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-purple-100 transition hover:border-purple-300/50 hover:bg-purple-500/10 focus:outline-none focus:ring-2 focus:ring-purple-300/40"
      >
        Back to Home
      </button>
      <button
        type="button"
        onClick={onEndMeeting}
        disabled={disabledEnd}
        className="rounded-xl border border-rose-300/30 bg-rose-500/10 px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-rose-100 transition hover:border-rose-300/55 hover:bg-rose-500/20 focus:outline-none focus:ring-2 focus:ring-rose-300/35 disabled:cursor-not-allowed disabled:opacity-45"
      >
        End Meeting
      </button>
    </div>
  )
}
