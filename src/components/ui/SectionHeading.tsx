import Ornament from './Ornament'

interface SectionHeadingProps {
  overline?: string
  title: string
  tone?: 'light' | 'dark'
  className?: string
}

function SectionHeading({ overline, title, tone = 'light', className = 'mb-14' }: SectionHeadingProps) {
  const titleColor = tone === 'dark' ? 'text-cream' : 'text-wine-800'
  const overlineColor = tone === 'dark' ? 'text-marigold' : 'text-rose-600'
  return (
    <div className={`flex flex-col items-center text-center ${className}`}>
      {overline && (
        <span className={`font-sans text-[10px] font-medium tracking-[4.5px] uppercase mb-3 ${overlineColor}`}>
          {overline}
        </span>
      )}
      <h2 className={`font-display text-3xl md:text-4xl lg:text-[44px] font-medium leading-tight ${titleColor}`}>
        {title}
      </h2>
      <Ornament tone={tone} className="mt-5" />
    </div>
  )
}

export default SectionHeading
