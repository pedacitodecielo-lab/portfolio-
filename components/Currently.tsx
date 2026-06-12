'use client'

import { Tv, BookOpen, Code2 } from 'lucide-react'
import FadeIn from './FadeIn'

const items = [
  {
    icon: Tv,
    label: 'Watching',
    title: 'Nippon Sangoku',
    sub: 'Anime · Amazon Prime Video',
    accent: 'text-red-500',
    bg: 'bg-red-50',
    border: 'border-red-100',
    dot: 'bg-red-400',
  },
  {
    icon: BookOpen,
    label: 'Reading',
    title: 'Thus Spoke Zarathustra',
    sub: 'Nietzsche · Philosophy',
    accent: 'text-stone-600',
    bg: 'bg-stone-50',
    border: 'border-stone-200',
    dot: 'bg-stone-400',
  },
  {
    icon: Code2,
    label: 'Learning',
    title: 'dbt (Data Build Tool)',
    sub: 'Analytics Engineering',
    accent: 'text-orange-500',
    bg: 'bg-orange-50',
    border: 'border-orange-100',
    dot: 'bg-orange-400',
  },
]

const SPOTIFY_PLAYLIST_ID = '3EjGq81ADTPQwVoq24nSTd'

export default function Currently() {
  return (
    <section id="currently" className="py-24 bg-white">
      <div className="section-container">

        <FadeIn>
          <div className="text-center mb-12">
            <div className="text-xs font-extrabold text-blue-600 mb-3 uppercase tracking-[0.18em]">Right Now</div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">
              What I&apos;m <span className="gradient-text">Up To</span>
            </h2>
            <p className="text-slate-500 mt-4 max-w-lg mx-auto text-[15px] leading-relaxed">
              A live snapshot of what I am watching, reading, learning, and listening to.
            </p>
          </div>
        </FadeIn>

        <div className="max-w-5xl mx-auto space-y-4">

          {/* Row 1 — 3 status cards */}
          <div className="grid sm:grid-cols-3 gap-4">
            {items.map((item, i) => {
              const Icon = item.icon
              return (
                <FadeIn key={item.label} delay={i * 80}>
                  <div className={`card rounded-2xl p-5 border ${item.border} h-full`}>
                    <div className={`w-10 h-10 rounded-xl ${item.bg} flex items-center justify-center mb-4`}>
                      <Icon className={`w-5 h-5 ${item.accent}`} />
                    </div>
                    <p className="text-[11px] font-extrabold text-slate-400 uppercase tracking-widest mb-1">{item.label}</p>
                    <p className="font-extrabold text-slate-900 text-sm leading-snug mb-1">{item.title}</p>
                    <p className="text-xs text-slate-400 font-medium">{item.sub}</p>
                    <div className="flex items-center gap-1.5 mt-4">
                      <span className={`w-1.5 h-1.5 rounded-full ${item.dot} animate-pulse`} />
                      <span className="text-[11px] text-slate-400 font-semibold">Active</span>
                    </div>
                  </div>
                </FadeIn>
              )
            })}
          </div>

          {/* Row 2 — Spotify embed */}
          <FadeIn delay={240}>
            <div className="card rounded-2xl overflow-hidden">
              <div className="flex items-center gap-3 px-5 py-3.5 border-b border-slate-100">
                <div className="w-7 h-7 rounded-lg bg-green-500 flex items-center justify-center flex-shrink-0">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white">
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-extrabold text-slate-900">Listening</p>
                  <p className="text-xs text-slate-400 font-medium">My top tracks playlist</p>
                </div>
                <div className="ml-auto flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-[11px] text-green-600 font-semibold">Spotify</span>
                </div>
              </div>
              <iframe
                src={`https://open.spotify.com/embed/playlist/${SPOTIFY_PLAYLIST_ID}?utm_source=generator&theme=0`}
                width="100%"
                height="352"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                className="block"
              />
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  )
}
