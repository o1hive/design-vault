import { Button } from "@/components/shadcn-components/button"

interface AnimatedVideoPlaneHeroProps {
  title?: string
  subtitle?: string
  ctaLabel?: string
  ctaHref?: string
  videoUrl?: string
  className?: string
}

export function AnimatedVideoPlaneHero({
  title = "SkyElite Private Jets",
  subtitle = "Experience luxury travel at 40,000 feet. Your private jet awaits.",
  ctaLabel = "Book Now",
  ctaHref = "#",
  videoUrl = "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_091828_e240eb17-6edc-4129-ad9d-98678e3fd238.mp4",
  className = "",
}: AnimatedVideoPlaneHeroProps) {
  return (
    <section className={`relative w-full h-screen min-h-[600px] overflow-hidden ${className}`}>
      {/* Video background */}
      {videoUrl ? (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster=""
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
      ) : (
        <div className="absolute inset-0 bg-muted" />
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-foreground/30" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-background tracking-tight max-w-3xl leading-tight">
          {title}
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-background/80 max-w-xl">
          {subtitle}
        </p>
        <div className="mt-10">
          <Button className="text-base px-8 py-6 rounded-full text-lg">
            {ctaLabel}
          </Button>
        </div>
      </div>
    </section>
  )
}
