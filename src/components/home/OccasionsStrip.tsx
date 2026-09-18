import { occasions } from '../../data/occasions'

/* A pale sage band framed by thin rules; gold is a line in the logo, never a field */
function OccasionsStrip() {
  return (
    <div className="bg-sage-50 border-y border-sage/40">
      <div className="max-w-7xl mx-auto px-8 py-4 flex flex-wrap items-center justify-center">
        {occasions.map((occ, i) => (
          <div key={occ} className="flex items-center">
            <span className="font-sans text-[10px] font-medium tracking-[3px] uppercase text-henna-700 px-6 py-2">
              {occ}
            </span>
            {i < occasions.length - 1 && (
              <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-sage" />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default OccasionsStrip
