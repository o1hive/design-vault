import { useEffect, useRef } from "react"
import Hls from "hls.js"

interface HlsBackgroundProps {
  src: string
  className?: string
}

export function HlsBackground({ src, className = "" }: HlsBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    let hls: Hls | null = null

    if (Hls.isSupported()) {
      hls = new Hls({ autoStartLoad: true })
      hls.loadSource(src)
      hls.attachMedia(video)
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch(() => {})
      })
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = src
      video.play().catch(() => {})
    }

    return () => {
      hls?.destroy()
    }
  }, [src])

  return (
    <video
      ref={videoRef}
      autoPlay
      loop
      muted
      playsInline
      className={`absolute inset-0 h-full w-full object-cover ${className}`}
      style={{ zIndex: 0 }}
    />
  )
}
