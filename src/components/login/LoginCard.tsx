import type { FormEvent } from 'react'

type LoginCardProps = {
  onSubmit?: (event: FormEvent<HTMLFormElement>) => void
}

export default function LoginCard({ onSubmit }: LoginCardProps) {
  return (
    <section className="w-full max-w-md rounded-3xl border border-white/15 bg-white/10 p-8 shadow-2xl shadow-purple-950/30 backdrop-blur-2xl sm:p-10">
      <header className="mb-8 space-y-2 text-center">
        <p className="text-xs uppercase tracking-[0.4em] text-purple-200/80">SIMA</p>
        <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Welcome back
        </h1>
        <p className="text-sm text-purple-100/75">Sign in to your workspace.</p>
      </header>

      <form className="space-y-5" onSubmit={onSubmit}>
        <label className="block space-y-2">
          <span className="text-xs font-medium uppercase tracking-[0.24em] text-purple-100/80">
            Username
          </span>
          <input
            type="text"
            name="username"
            placeholder="you@sima.ai"
            autoComplete="username"
            className="w-full rounded-xl border border-white/15 bg-black/30 px-4 py-3 text-sm text-white placeholder:text-purple-100/45 outline-none transition focus:border-purple-300/50 focus:ring-2 focus:ring-purple-400/35"
            required
          />
        </label>

        <label className="block space-y-2">
          <span className="text-xs font-medium uppercase tracking-[0.24em] text-purple-100/80">
            Password
          </span>
          <input
            type="password"
            name="password"
            placeholder="••••••••"
            autoComplete="current-password"
            className="w-full rounded-xl border border-white/15 bg-black/30 px-4 py-3 text-sm text-white placeholder:text-purple-100/45 outline-none transition focus:border-purple-300/50 focus:ring-2 focus:ring-purple-400/35"
            required
          />
        </label>

        <button
          type="submit"
          className="w-full rounded-xl bg-gradient-to-r from-purple-500 to-fuchsia-500 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-900/35 transition hover:brightness-110 focus:ring-2 focus:ring-purple-300/50 focus:outline-none"
        >
          Login
        </button>
      </form>
    </section>
  )
}
