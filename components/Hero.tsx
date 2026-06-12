'use client'

import { useState, useEffect } from 'react'
import { ArrowRight, Download, TrendingUp, TrendingDown, Database, Zap, BarChart2 } from 'lucide-react'
import AnimatedCounter from './AnimatedCounter'

const roles = ['Data Analyst', 'Data Engineer', 'BI Developer', 'Pipeline Architect']
const barData = [28, 52, 38, 72, 55, 88, 62, 80, 50, 92, 70, 100]
const months = ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D']
const headingWords = ['Turning', 'Complex', 'Data', 'Into', 'Strategic', 'Insights.']
const floatingTags = ['Python', 'SQL', 'Power BI', 'BigQuery', 'Spark', 'dbt']

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0)
  const [roleText, setRoleText] = useState('')
  const [isTyping, setIsTyping] = useState(true)
  const [barsVisible, setBarsVisible] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const t = setTimeout(() => setBarsVisible(true), 800)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    const current = roles[roleIdx]
    if (isTyping) {
      if (roleText.length < current.length) {
        const t = setTimeout(() => setRoleText(current.slice(0, roleText.length + 1)), 60)
        return () => clearTimeout(t)
      }
      const t = setTimeout(() => setIsTyping(false), 2200)
      return () => clearTimeout(t)
    } else {
      if (roleText.length > 0) {
        const t = setTimeout(() => setRoleText(roleText.slice(0, -1)), 35)
        return () => clearTimeout(t)
      }
      setRoleIdx((i) => (i + 1) % roles.length)
      setIsTyping(true)
    }
  }, [roleText, isTyping, roleIdx])

  return (
    <section className="relative min-h-screen flex items-center bg-white overflow-hidden pt-16">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/70 via-white to-sky-50/40" />
      <div className="absolute top-10 right-0 w-[500px] h-[500px] rounded-full bg-blue-100/40 blur-[80px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-indigo-100/30 blur-[80px]" />
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: 'radial-gradient(circle, #94a3b8 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      <div className="section-container relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ── LEFT ── */}
          <div>
            {/* Heading — words animate in staggered */}
            <h1 className="text-5xl md:text-[3.6rem] font-extrabold leading-[1.1] tracking-tight mb-4">
              {headingWords.map((word, i) => {
                const isBlue = i >= 4
                return (
                  <span
                    key={i}
                    className={`word-animate inline-block mr-3 ${isBlue ? 'gradient-text' : 'text-slate-900'}`}
                    style={{ animationDelay: `${i * 100}ms` }}
                  >
                    {word}
                  </span>
                )
              })}
            </h1>

            {/* Typewriter role */}
            <div className="h-8 flex items-center gap-1 text-lg text-slate-500 font-semibold mb-10">
              <span>{roleText}</span>
              <span className="w-[2px] h-5 bg-blue-500 animate-blink rounded-full" />
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4 mb-14">
              <a
                href="#projects"
                className="gradient-btn text-white font-bold px-7 py-3.5 rounded-xl flex items-center gap-2 group"
              >
                Explore My Work
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a href="#" className="outline-btn font-bold px-7 py-3.5 rounded-xl flex items-center gap-2">
                <Download className="w-4 h-4" />
                Download CV
              </a>
            </div>

            {/* Animated stat counters */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-slate-100">
              {[
                { to: 20, suffix: '+', label: 'Projects' },
                { to: 5, suffix: '+ TB', label: 'Data Processed' },
                { to: 3, suffix: '+ yrs', label: 'Experience' },
                { to: 10, suffix: '+', label: 'Tools' },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-2xl font-extrabold text-blue-600 mb-0.5">
                    <AnimatedCounter to={s.to} suffix={s.suffix} />
                  </div>
                  <div className="text-xs text-slate-400 font-semibold uppercase tracking-wide">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT: Dashboard card ── */}
          <div className="hidden lg:block relative">
            <div className="card rounded-2xl p-6 max-w-[400px] ml-auto animate-float shadow-xl shadow-blue-100/50">
              {/* KPI header */}
              <div className="flex items-start justify-between mb-5">
                <div>
                  <p className="text-[11px] text-slate-400 font-bold uppercase tracking-wider mb-1">Revenue Analytics</p>
                  <p className="text-3xl font-extrabold text-slate-900">$2.4M</p>
                  <p className="flex items-center gap-1 text-xs text-green-600 font-bold mt-1">
                    <TrendingUp className="w-3.5 h-3.5" /> +18.2% this quarter
                  </p>
                </div>
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-200">
                  <BarChart2 className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Animated bar chart */}
              <div className="flex items-end gap-1 h-28 mb-2">
                {barData.map((h, i) => (
                  <div key={i} className="flex-1 flex flex-col justify-end rounded-t overflow-hidden">
                    <div
                      className={`rounded-t transition-all ${i === barData.length - 1 ? 'bg-blue-600' : 'bg-blue-200 hover:bg-blue-300'}`}
                      style={{
                        height: barsVisible ? `${h}%` : '4px',
                        transitionDuration: '700ms',
                        transitionDelay: `${i * 45}ms`,
                        transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
                      }}
                    />
                  </div>
                ))}
              </div>
              <div className="flex justify-between text-[10px] text-slate-400 font-semibold mb-5">
                {months.map((m, i) => <span key={i}>{m}</span>)}
              </div>

              {/* Mini KPI tiles */}
              <div className="grid grid-cols-3 gap-2">
                {[
                  { icon: Database, label: 'Datasets', value: '142', color: 'text-blue-600', bg: 'bg-blue-50' },
                  { icon: Zap, label: 'Pipelines', value: '3.2K', color: 'text-purple-600', bg: 'bg-purple-50' },
                  { icon: TrendingDown, label: 'Cost Cut', value: '−60%', color: 'text-green-600', bg: 'bg-green-50' },
                ].map((item) => {
                  const Icon = item.icon
                  return (
                    <div key={item.label} className="bg-slate-50 rounded-xl p-3 text-center hover:bg-slate-100 transition-colors">
                      <div className={`w-7 h-7 rounded-lg ${item.bg} ${item.color} flex items-center justify-center mx-auto mb-1.5`}>
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <div className="text-sm font-extrabold text-slate-900">{item.value}</div>
                      <div className="text-[10px] text-slate-400 font-semibold">{item.label}</div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Floating tech tags */}
            {floatingTags.map((tag, i) => {
              const positions = [
                '-top-2 right-4',
                'top-1/4 -left-10',
                'top-1/2 -left-14',
                '-bottom-4 left-8',
                'bottom-1/4 -right-6',
                '-top-4 left-1/3',
              ]
              return (
                <div
                  key={tag}
                  className={`absolute ${positions[i]} skill-badge text-xs px-3 py-1.5 rounded-full shadow-sm animate-float`}
                  style={{ animationDelay: `${i * 0.4}s`, animationDuration: `${3.5 + i * 0.3}s` }}
                >
                  {tag}
                </div>
              )
            })}
          </div>

        </div>
      </div>
    </section>
  )
}
