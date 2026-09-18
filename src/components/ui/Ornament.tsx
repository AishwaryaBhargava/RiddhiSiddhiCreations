interface OrnamentProps {
  tone?: 'light' | 'dark'
  className?: string
}

/* Gold rule with a gold-edged rose bud and two leaf-green beads: the site's divider motif */
function Ornament({ tone = 'light', className = '' }: OrnamentProps) {
  const line = tone === 'dark' ? 'bg-marigold/60' : 'bg-marigold-600/60'
  const bead = tone === 'dark' ? 'bg-sage-300' : 'bg-sage'
  const budRing = tone === 'dark' ? 'ring-marigold' : 'ring-marigold-600'
  return (
    <div className={`flex items-center justify-center gap-2.5 ${className}`}>
      <div className={`w-12 h-px ${line}`} />
      <div className={`w-1.5 h-1.5 rounded-full ${bead}`} />
      <div className={`w-2.5 h-2.5 bg-rose rotate-45 rounded-[1px] ring-1 ${budRing}`} />
      <div className={`w-1.5 h-1.5 rounded-full ${bead}`} />
      <div className={`w-12 h-px ${line}`} />
    </div>
  )
}

export default Ornament
