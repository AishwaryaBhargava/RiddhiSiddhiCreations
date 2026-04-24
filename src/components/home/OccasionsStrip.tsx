import { occasions } from '../../data/occasions'

function OccasionsStrip() {
  return (
    <div className="bg-ivory border-b border-gold/15">
      <div className="max-w-7xl mx-auto px-8 py-5 flex flex-wrap items-center justify-center">
        {occasions.map((occ, i) => (
          <div key={occ} className="flex items-center">
            <span className="font-sans text-[10px] font-400 tracking-[3px] uppercase text-gray px-6 py-2">
              {occ}
            </span>
            {i < occasions.length - 1 && (
              <div className="w-px h-3 bg-gold/30" />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default OccasionsStrip