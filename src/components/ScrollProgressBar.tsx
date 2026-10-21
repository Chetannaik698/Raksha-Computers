import { useEffect, useState } from 'react'

export default function ScrollProgressBar() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight
      if (totalScroll <= 0) {
        setProgress(0)
        return
      }
      const currentScroll = window.scrollY
      const percentage = Math.min(100, Math.max(0, (currentScroll / totalScroll) * 100))
      setProgress(percentage)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div aria-hidden className="absolute bottom-0 left-0 right-0 h-[2.5px] overflow-hidden bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-orange via-yellow to-electric transition-[width] duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}
