type HomeHeroSectionProps = {
  onNewMeeting: () => void
}

export default function HomeHeroSection({ onNewMeeting }: HomeHeroSectionProps) {
  return (
    <section className="rounded-3xl border border-white/12 bg-gradient-to-br from-white/10 via-white/5 to-black/25 p-6 shadow-2xl shadow-purple-950/25 backdrop-blur-xl sm:p-10">
      <div className="max-w-2xl space-y-5">
        <p className="text-xs uppercase tracking-[0.34em] text-purple-200/80">Home</p>
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Start a new meeting session
        </h2>
        <p className="text-sm leading-relaxed text-purple-100/75 sm:text-base">
          Launch SIMA to listen, summarize, and transform your conversations into a polished transcript
          in real time.
        </p>
        <button
          type="button"
          onClick={onNewMeeting}
          className="inline-flex items-center rounded-xl bg-gradient-to-r from-purple-500 to-fuchsia-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-900/35 transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-purple-300/50"
        >
          New meeting
        </button>
      </div>
    </section>
  )
}
