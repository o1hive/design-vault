import type React from "react"

interface StarButtonProps {
  children: React.ReactNode
  onClick?: () => void
  className?: string
}

const Star = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 784.11 815.53"
    className="w-full h-auto fill-primary dark:fill-primary-foreground"
  >
    <path d="M392.05 0c-20.9,210.08-184.06,378.41-392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93-210.06 184.09-378.37 392.05-407.74-207.98-29.38-371.16-197.69-392.06-407.78z" />
  </svg>
)

export function StarButton({ children, onClick, className = "" }: StarButtonProps) {
  return (
    <button
      className={`group relative cursor-pointer rounded-md border-[3px] border-primary bg-primary px-[35px] py-[12px] text-[17px] font-medium text-primary-foreground shadow-[0_0_0_var(--ring)] transition-all duration-300 ease-in-out hover:bg-transparent hover:text-primary hover:shadow-[0_0_25px_var(--ring)] active:scale-95 ${className}`}
      onClick={onClick}
    >
      {children}

      {/* Star 1 */}
      <div className="absolute top-[20%] left-[20%] z-[-5] w-[25px] transition-all duration-[1000ms] ease-[cubic-bezier(0.05,0.83,0.43,0.96)] drop-shadow-[0_0_0_var(--tw-shadow-color)] group-hover:top-[-80%] group-hover:left-[-30%] group-hover:z-[2] group-hover:drop-shadow-[0_0_10px_var(--tw-shadow-color)]">
        <Star />
      </div>

      {/* Star 2 */}
      <div className="absolute top-[45%] left-[45%] z-[-5] w-[15px] transition-all duration-[1000ms] ease-[cubic-bezier(0,0.4,0,1.01)] drop-shadow-[0_0_0_var(--tw-shadow-color)] group-hover:top-[-25%] group-hover:left-[10%] group-hover:z-[2] group-hover:drop-shadow-[0_0_10px_var(--tw-shadow-color)]">
        <Star />
      </div>

      {/* Star 3 */}
      <div className="absolute top-[40%] left-[40%] z-[-5] w-[5px] transition-all duration-[1000ms] ease-[cubic-bezier(0,0.4,0,1.01)] drop-shadow-[0_0_0_var(--tw-shadow-color)] group-hover:top-[55%] group-hover:left-[25%] group-hover:z-[2] group-hover:drop-shadow-[0_0_10px_var(--tw-shadow-color)]">
        <Star />
      </div>

      {/* Star 4 */}
      <div className="absolute top-[20%] left-[40%] z-[-5] w-[8px] transition-all duration-[800ms] ease-[cubic-bezier(0,0.4,0,1.01)] drop-shadow-[0_0_0_var(--tw-shadow-color)] group-hover:top-[30%] group-hover:left-[80%] group-hover:z-[2] group-hover:drop-shadow-[0_0_10px_var(--tw-shadow-color)]">
        <Star />
      </div>

      {/* Star 5 */}
      <div className="absolute top-[25%] left-[45%] z-[-5] w-[15px] transition-all duration-[600ms] ease-[cubic-bezier(0,0.4,0,1.01)] drop-shadow-[0_0_0_var(--tw-shadow-color)] group-hover:top-[25%] group-hover:left-[115%] group-hover:z-[2] group-hover:drop-shadow-[0_0_10px_var(--tw-shadow-color)]">
        <Star />
      </div>

      {/* Star 6 */}
      <div className="absolute top-[5%] left-[50%] z-[-5] w-[5px] transition-all duration-[800ms] ease-in-out drop-shadow-[0_0_0_var(--tw-shadow-color)] group-hover:top-[5%] group-hover:left-[60%] group-hover:z-[2] group-hover:drop-shadow-[0_0_10px_var(--tw-shadow-color)]">
        <Star />
      </div>
    </button>
  )
}
