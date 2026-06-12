'use client'

import { useEffect, useRef, ReactNode, CSSProperties } from 'react'

interface FadeInProps {
  children: ReactNode
  delay?: number
  duration?: number
  direction?: 'up' | 'left' | 'right' | 'none'
  className?: string
  style?: CSSProperties
}

export default function FadeIn({
  children,
  delay = 0,
  duration = 650,
  direction = 'up',
  className = '',
  style = {},
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transitionDelay = `${delay}ms`
          el.style.opacity = '1'
          el.style.transform = 'none'
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])

  const initial: CSSProperties = {
    opacity: 0,
    transform:
      direction === 'up'
        ? 'translateY(28px)'
        : direction === 'left'
        ? 'translateX(-28px)'
        : direction === 'right'
        ? 'translateX(28px)'
        : 'none',
    transition: `opacity ${duration}ms ease, transform ${duration}ms ease`,
    ...style,
  }

  return (
    <div ref={ref} className={className} style={initial}>
      {children}
    </div>
  )
}
