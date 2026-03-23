export default function AnimatedGradientBackground() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      <div className="sima-bg-orb sima-bg-orb--primary" />
      <div className="sima-bg-orb sima-bg-orb--secondary" />
      <div className="sima-bg-grid" />
    </div>
  )
}
