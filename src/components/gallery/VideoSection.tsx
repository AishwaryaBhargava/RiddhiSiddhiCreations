import SectionHeading from '../ui/SectionHeading'
import VideoCard from './VideoCard'

interface VideoItem {
  id: string
  src: string
  poster?: string
  title: string
}

const videos: VideoItem[] = [
  // Add real video files once Siddhi provides them
  // Example:
  // { id: '1', src: '/src/assets/videos/reels/reel-1.mp4', poster: '/src/assets/images/hero/poster-1.jpg', title: 'Bridal Application' },
]

function VideoSection() {
  return (
    <section className="py-24 px-6 bg-sage-50 border-y border-sage/40">
      <SectionHeading overline="Henna in Motion" title="Watch the Art Come Alive" />

      {videos.length === 0 ? (
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="aspect-video rounded-xl bg-cream border border-sage/40 flex flex-col items-center justify-center gap-3"
            >
              <div className="w-10 h-10 rounded-full border border-marigold-600/60 flex items-center justify-center">
                <div className="w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[10px] border-l-marigold-600 ml-0.5" />
              </div>
              <span className="font-sans text-[9px] tracking-[3px] uppercase text-wine-600">
                Coming Soon
              </span>
            </div>
          ))}
        </div>
      ) : (
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
          {videos.map((video) => (
            <VideoCard key={video.id} src={video.src} poster={video.poster} title={video.title} />
          ))}
        </div>
      )}
    </section>
  )
}

export default VideoSection
