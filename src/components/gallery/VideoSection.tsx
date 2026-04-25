import SectionHeading from '../ui/SectionHeading'
import VideoCard from './VideoCard'

const videos: { id: string; src: string; poster?: string; title: string }[] = [
  // Add real video files once Siddhi provides them
  // Example:
  // { id: '1', src: '/src/assets/videos/reels/reel-1.mp4', poster: '/src/assets/images/hero/poster-1.jpg', title: 'Bridal Application' },
]

function VideoSection() {
  return (
    <section className="py-24 px-6 border-t border-gold/8 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(201,162,77,0.05)_0%,transparent_65%)]">
      <SectionHeading title="Henna in Motion" />

      {videos.length === 0 ? (
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="aspect-video bg-gold/5 border border-gold/10 flex flex-col items-center justify-center gap-3"
            >
              <div className="w-10 h-10 rounded-full border border-gold/25 flex items-center justify-center">
                <div className="w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[10px] border-l-gold/30 ml-0.5" />
              </div>
              <span className="font-sans text-[9px] tracking-[2px] uppercase text-gold/25">
                Coming Soon
              </span>
            </div>
          ))}
        </div>
      ) : (
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
          {videos.map((video: { id: string; src: string; poster?: string; title: string }) => (
            <VideoCard
              key={video.id}
              src={video.src}
              poster={video.poster}
              title={video.title}
            />
          ))}
        </div>
      )}
    </section>
  )
}

export default VideoSection