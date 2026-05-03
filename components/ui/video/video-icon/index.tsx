import { useEffect, useRef } from "react"

interface VideoIconProps {
  src: string
  size?: number
  className?: string
}

export function VideoIcon({ src, size = 72, className = "" }: VideoIconProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const el = videoRef.current
    if (!el) return
    el.play().catch(() => {})
  }, [])

  return (
    <span
      className={`inline-block align-middle rounded-full overflow-hidden shrink-0 ${className}`}
      style={{
        width: `clamp(48px, 10vw, ${size}px)`,
        height: `clamp(48px, 10vw, ${size}px)`,
      }}
    >
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="h-full w-full object-cover block"
      >
        <source src={src} type="video/mp4" />
      </video>
    </span>
  )
}
