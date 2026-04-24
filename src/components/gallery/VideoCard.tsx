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

  const handlePause = () => {
    setPlaying(false)
  }

  return (
    <div className="relative aspect-video bg-gold/5 border border-gold/10 overflow-hidden group">
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        muted
        playsInline
        onPause={handlePause}
        onEnded={handlePause}
        className="w-full h-full object-cover"
      />

      {/* Play overlay */}
      {!playing && (
        <div
          className="absolute inset-0 flex flex-col items-center justify-center gap-4 cursor-pointer bg-black/40 group-hover:bg-black/50 transition-all duration-300"
          onClick={handlePlay}
        >
          {/* Play button circle */}
          <div className="w-14 h-14 rounded-full border border-gold/60 flex items-center justify-center group-hover:border-gold transition-all duration-300">
            <div className="w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-l-[14px] border-l-gold ml-1" />
          </div>
          <span className="font-sans text-[9px] tracking-[2.5px] uppercase text-ivory/60">
            {title}
          </span>
        </div>
      )}
    </div>
  )
}

export default VideoCard