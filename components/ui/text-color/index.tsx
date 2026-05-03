import "./text-color.css"

interface TextColorProps {
  words?: string[]
  className?: string
}

export function TextColor({ words = ["Develop.", "Preview.", "Ship."], className = "" }: TextColorProps) {
  const gradients = [
    { from: "from-gradient-1-start", to: "to-gradient-1-end", fg: "animate-gradient-foreground-1", bg: "before:animate-gradient-background-1" },
    { from: "from-gradient-2-start", to: "to-gradient-2-end", fg: "animate-gradient-foreground-2", bg: "before:animate-gradient-background-2" },
    { from: "from-gradient-3-start", to: "to-gradient-3-end", fg: "animate-gradient-foreground-3", bg: "before:animate-gradient-background-3" },
  ]

  return (
    <div className={className}>
      <div className="mb-10 mt-4 md:mt-6">
        <div className="px-2">
          <div className="relative p-8 w-full h-full border border-border">
            <h1 className="tracking-tighter flex select-none px-3 py-2 flex-col text-center text-7xl font-extrabold leading-none sm:text-8xl md:flex-col lg:flex-row">
              {words.map((text, i) => {
                const g = gradients[i % gradients.length]
                return (
                  <span
                    key={i}
                    data-content={text}
                    className={`text-cycle-before ${g.bg} relative before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:w-full before:px-2 before:content-[attr(data-content)] sm:before:top-0`}
                  >
                    <span className={`${g.from} ${g.to} ${g.fg} bg-gradient-to-r bg-clip-text px-2 text-transparent sm:px-5`}>
                      {text}
                    </span>
                  </span>
                )
              })}
            </h1>
          </div>
        </div>
      </div>
    </div>
  )
}
