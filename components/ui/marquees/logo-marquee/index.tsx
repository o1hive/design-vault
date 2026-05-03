import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

interface LogoMarqueeProps {
  logos: { src: string; alt: string }[]
  speed?: number
  className?: string
}

export function LogoMarquee({ logos, speed = 30, className = "" }: LogoMarqueeProps) {
  const trackRef = useRef<HTMLDivElement>(null)
  const [trackWidth, setTrackWidth] = useState(0)

  useEffect(() => {
    const el = trackRef.current
    if (!el) return
    const update = () => setTrackWidth(el.scrollWidth / 2)
    update()
    window.addEventListener("resize", update)
    return () => window.removeEventListener("resize", update)
  }, [logos])

  return (
    <div
      className={`relative w-full overflow-hidden py-8 ${className}`}
      role="marquee"
      aria-label="Partner logos"
    >
      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-r from-transparent to-background" />

      {/* Scrolling track — duplicate for seamless loop */}
      <motion.div
        ref={trackRef}
        className="flex w-max gap-[50px] px-[50px]"
        animate={{ x: trackWidth > 0 ? -trackWidth : 0 }}
        transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
      >
        {[...logos, ...logos].map((logo, i) => (
          <img
            key={`${logo.alt}-${i}`}
            src={logo.src}
            alt={logo.alt}
            className="h-8 w-auto shrink-0 opacity-40 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 md:h-10"
            loading="lazy"
          />
        ))}
      </motion.div>
    </div>
  )
}
