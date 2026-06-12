'use client'

import { useEffect, useRef, useState } from 'react'

export default function AnimatedCounter({
  to,
  suffix = '',
  duration = 1800,
}: {
  to: number
  suffix?: string
  duration?: number
}) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          let startTime: number
          const animate = (ts: number) => {
            if (!startTime) startTime = ts
            const p = Math.min((ts - startTime) / duration, 1)
            const eased = 1 - Math.pow(1 - p, 3)
            setCount(Math.floor(eased * to))
            if (p < 1) requestAnimationFrame(animate)
            else setCount(to)
          }
          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [to, duration])

  return (
    <span ref={ref} className="tabular-nums">
      {count}
      {suffix}
    </span>
  )
}
