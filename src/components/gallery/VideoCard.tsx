import { useState, useRef } from 'react'

interface VideoCardProps {
  src: string
  poster?: string
  title: string
}

function VideoCard({ src, poster, title }: VideoCardProps) {
  const [playing, setPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play()
      setPlaying(true)
    }
  }

  const handlePause = () => setPlaying(false)

  return (
    <div className="relative aspect-video rounded-xl overflow-hidden bg-wine-900 border border-marigold-600/30 shadow-[0_8px_24px_rgba(107,58,30,0.12)] group">
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        muted
        playsInline
        controls={playing}
        onPause={handlePause}
        onEnded={handlePause}
        className="w-full h-full object-cover"
      />

      {!playing && (
        <button
          type="button"
          className="absolute inset-0 flex flex-col items-center justify-center gap-4 cursor-pointer bg-wine-900/40 group-hover:bg-wine-900/55 transition-all duration-300"
          onClick={handlePlay}
          aria-label={`Play ${title}`}
        >
          <div className="w-14 h-14 rounded-full bg-marigold flex items-center justify-center shadow-[0_6px_20px_rgba(225,180,88,0.35)]">
            <div className="w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-l-[14px] border-l-wine-900 ml-1" />
          </div>
          <span className="font-sans text-[10px] tracking-[2.5px] uppercase text-cream/85">
            {title}
          </span>
        </button>
      )}
    </div>
  )
}

export default VideoCard
