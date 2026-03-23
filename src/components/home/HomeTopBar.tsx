import type { ReactNode } from 'react'

type HomeTopBarProps = {
  brand?: string
  currentUser: string
  onLogout: () => void
  userMeta?: ReactNode
}

export default function HomeTopBar({
  brand = 'SIMA',
  currentUser,
  onLogout,
  userMeta = 'Demo workspace',
}: HomeTopBarProps) {
  return (
    <header className="rounded-2xl border border-white/10 bg-black/35 px-4 py-4 shadow-2xl shadow-purple-950/20 backdrop-blur-xl sm:px-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1">
          <p className="text-xs uppercase tracking-[0.4em] text-purple-200/80">{brand}</p>
          <h1 className="text-lg font-medium text-white sm:text-xl">AI Meeting Assistant</h1>
        </div>

        <div className="flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-white/5 px-4 py-3 sm:justify-end">
          <div className="text-right">
            <p className="text-sm font-medium text-white">{currentUser}</p>
            <p className="text-xs text-purple-100/70">{userMeta}</p>
          </div>
          <button
            type="button"
            onClick={onLogout}
            className="rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-purple-100 transition hover:border-purple-300/50 hover:bg-purple-500/10 focus:outline-none focus:ring-2 focus:ring-purple-300/40"
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  )
}
