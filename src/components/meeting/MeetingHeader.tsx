import type { ReactNode } from 'react'

type MeetingHeaderProps = {
  title: string
  subtitle: string
  statusBadge: ReactNode
  actions: ReactNode
}

export default function MeetingHeader({ title, subtitle, statusBadge, actions }: MeetingHeaderProps) {
  return (
    <header className="rounded-2xl border border-white/10 bg-black/35 px-4 py-4 shadow-2xl shadow-purple-950/20 backdrop-blur-xl sm:px-6 sm:py-5">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.4em] text-purple-200/80">SIMA Meeting</p>
          <h1 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">{title}</h1>
          <p className="max-w-2xl text-sm text-purple-100/75 sm:text-base">{subtitle}</p>
        </div>

        <div className="flex flex-col items-start gap-3 sm:items-end">
          {statusBadge}
          {actions}
        </div>
      </div>
    </header>
  )
}
