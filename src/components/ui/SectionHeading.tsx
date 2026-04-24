interface SectionHeadingProps {
  overline?: string
  title: string
  light?: boolean
}

function SectionHeading({ overline, title, light = false }: SectionHeadingProps) {
  return (
    <div className="flex flex-col items-center text-center mb-14">
      {overline && (
        <span className="font-sans text-[10px] tracking-[4.5px] uppercase text-gold mb-3">
          {overline}
        </span>
      )}
      <h2 className={`font-serif italic text-4xl md:text-5xl font-500 leading-tight ${light ? 'text-black' : 'text-ivory'}`}>
        {title}
      </h2>
      {/* Gold rule with diamond */}
      <div className="flex items-center gap-3 mt-4">
        <div className="w-10 h-px bg-gold opacity-40" />
        <div className="w-1.5 h-1.5 bg-gold rotate-45 opacity-70" />
        <div className="w-10 h-px bg-gold opacity-40" />
      </div>
    </div>
  )
}

export default SectionHeading