import type { ReactNode } from 'react'

type HomeInfoCardProps = {
  title: string
  value: string
  description: string
  badge?: string
  icon?: ReactNode
}

export default function HomeInfoCard({
  title,
  value,
  description,
  badge,
  icon,
}: HomeInfoCardProps) {
  return (
    <article className="rounded-2xl border border-white/10 bg-black/35 p-5 shadow-xl shadow-purple-950/15 backdrop-blur-xl">
      <div className="mb-4 flex items-start justify-between gap-3">
        <div className="space-y-1">
          <p className="text-xs uppercase tracking-[0.24em] text-purple-200/75">{title}</p>
          <p className="text-lg font-semibold text-white">{value}</p>
        </div>
        {icon ? <div className="text-purple-200/80">{icon}</div> : null}
      </div>

      <p className="text-sm text-purple-100/75">{description}</p>

      {badge ? (
        <span className="mt-4 inline-flex rounded-full border border-purple-300/30 bg-purple-500/10 px-2.5 py-1 text-xs font-medium text-purple-100">
          {badge}
        </span>
      ) : null}
    </article>
  )
}
