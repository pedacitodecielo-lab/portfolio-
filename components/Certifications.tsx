'use client'

import { useState } from 'react'
import { ExternalLink, Award, X, ChevronLeft, ChevronRight, Images } from 'lucide-react'
import FadeIn from './FadeIn'

type Cert = {
  name: string
  issuer: string
  date: string
  category: string
  categoryColor: string
  gradient: string
  initial: string
  image: string | null
  images?: string[]
  links: { label: string; href: string }[]
}

const certs: Cert[] = [
  {
    name: 'Google Cybersecurity Certificate',
    issuer: 'Google · Coursera',
    date: '2025',
    category: 'Cybersecurity',
    categoryColor: 'bg-blue-100 text-blue-700',
    gradient: 'from-blue-500 to-blue-700',
    initial: 'G',
    image: null,
    links: [
      { label: 'Credential 1', href: 'https://www.coursera.org/account/accomplishments/verify/MZCFR4X429X2' },
      { label: 'Credential 2', href: 'https://www.coursera.org/account/accomplishments/verify/9V48R4T2ZJ27' },
    ],
  },
  {
    name: 'Basics of Oil and Gas Land Drilling',
    issuer: 'Udemy · Ankidu Training',
    date: 'July 2025',
    category: 'Engineering',
    categoryColor: 'bg-purple-100 text-purple-700',
    gradient: 'from-purple-500 to-purple-700',
    initial: 'U',
    image: 'https://udemy-certificate.s3.amazonaws.com/image/UC-7996130b-c331-42d6-8c3b-006d71d823c0.jpg',
    links: [
      { label: 'View Credential', href: 'https://ude.my/UC-7996130b-c331-42d6-8c3b-006d71d823c0' },
    ],
  },
  {
    name: 'Google Data Analytics Certificate',
    issuer: 'Google · Coursera',
    date: '2025',
    category: 'Analytics',
    categoryColor: 'bg-green-100 text-green-700',
    gradient: 'from-green-500 to-teal-600',
    initial: 'G',
    image: null,
    links: [],
  },
  {
    name: 'EF SET English Certificate',
    issuer: 'EF SET',
    date: '2025',
    category: 'C2 Proficient · 73/100',
    categoryColor: 'bg-red-100 text-red-700',
    gradient: 'from-red-500 to-rose-700',
    initial: 'EF',
    image: null,
    links: [
      { label: 'View Credential', href: 'https://cert.efset.org/ejzrwU' },
    ],
  },
  {
    name: 'National Finalist — BCC IEEE Big Innovation 2026',
    issuer: 'IEEEBIG · Institut Teknologi Sepuluh Nopember',
    date: 'May 2026',
    category: 'Award',
    categoryColor: 'bg-amber-100 text-amber-700',
    gradient: 'from-amber-400 to-orange-500',
    initial: 'BIG',
    image: '/certs/ieeebig-event.jpg',
    images: ['/certs/ieeebig-event.jpg', '/certs/ieeebig-cert.jpg'],
    links: [],
  },
  {
    name: 'CARE for SEA & CORDEX-SEA Workshop',
    issuer: 'WCRP · BMKG · APN',
    date: 'Aug 2025',
    category: 'Research',
    categoryColor: 'bg-teal-100 text-teal-700',
    gradient: 'from-teal-500 to-blue-700',
    initial: 'W',
    image: '/certs/care-sea.jpg',
    links: [],
  },
]

function GalleryModal({ cert, onClose }: { cert: Cert; onClose: () => void }) {
  const [idx, setIdx] = useState(0)
  const imgs = cert.images ?? []

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl w-full max-w-lg shadow-2xl animate-fade-scale"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-5 border-b border-slate-100 relative">
          <button onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors">
            <X className="w-4 h-4 text-slate-600" />
          </button>
          <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full w-fit mb-2 inline-block ${cert.categoryColor}`}>
            {cert.category}
          </span>
          <h2 className="text-base font-extrabold text-slate-900 leading-snug pr-8">{cert.name}</h2>
          <p className="text-xs text-slate-400 font-semibold mt-0.5">{cert.issuer} · {cert.date}</p>
        </div>

        <div className="p-5">
          <div className="relative rounded-2xl overflow-hidden bg-slate-100 mb-3" style={{ aspectRatio: '4/3' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={imgs[idx]} alt={`${cert.name} ${idx + 1}`} className="w-full h-full object-cover" />
            {imgs.length > 1 && (
              <>
                <button onClick={() => setIdx((i) => (i - 1 + imgs.length) % imgs.length)}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/40 hover:bg-black/60 rounded-full flex items-center justify-center transition-colors">
                  <ChevronLeft className="w-4 h-4 text-white" />
                </button>
                <button onClick={() => setIdx((i) => (i + 1) % imgs.length)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/40 hover:bg-black/60 rounded-full flex items-center justify-center transition-colors">
                  <ChevronRight className="w-4 h-4 text-white" />
                </button>
                <div className="absolute bottom-3 right-3 bg-black/50 text-white text-xs font-bold px-2 py-1 rounded-full">
                  {idx + 1} / {imgs.length}
                </div>
              </>
            )}
          </div>

          {imgs.length > 1 && (
            <div className="flex gap-2">
              {imgs.map((img, i) => (
                <button key={i} onClick={() => setIdx(i)}
                  className={`flex-1 h-16 rounded-xl overflow-hidden border-2 transition-all ${i === idx ? 'border-blue-500' : 'border-transparent opacity-50 hover:opacity-80'}`}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={img} alt={`thumb ${i}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default function Certifications() {
  const [galleryOpen, setGalleryOpen] = useState<Cert | null>(null)

  return (
    <section id="certifications" className="py-28 bg-slate-50">
      <div className="section-container">

        <FadeIn>
          <div className="text-center mb-14">
            <div className="text-xs font-extrabold text-blue-600 mb-3 uppercase tracking-[0.18em]">Credentials</div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">
              Certifications &amp; <span className="gradient-text">Awards</span>
            </h2>
            <p className="text-slate-500 mt-4 max-w-xl mx-auto leading-relaxed text-[15px]">
              Credentials, courses, and recognitions I have earned along the way.
            </p>
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certs.map((cert, i) => (
            <FadeIn key={cert.name} delay={i * 80}>
              <div className="card rounded-2xl overflow-hidden flex flex-col h-full group hover:shadow-md transition-shadow">

                {/* Image or gradient header */}
                {cert.image ? (
                  <div className="relative h-40 overflow-hidden flex-shrink-0 bg-slate-100">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={cert.image}
                      alt={cert.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        const target = e.currentTarget
                        target.style.display = 'none'
                        if (target.parentElement) {
                          target.parentElement.classList.add('bg-gradient-to-br', cert.gradient.split(' ')[0], cert.gradient.split(' ')[1])
                        }
                      }}
                    />
                  </div>
                ) : (
                  <div className={`bg-gradient-to-br ${cert.gradient} h-24 flex items-center justify-center flex-shrink-0`}>
                    <span className="text-4xl font-black text-white/20 absolute select-none">{cert.initial}</span>
                    <span className="text-3xl font-black text-white z-10">{cert.initial}</span>
                  </div>
                )}

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full w-fit mb-2 ${cert.categoryColor}`}>
                    {cert.category}
                  </span>

                  <h3 className="font-extrabold text-slate-900 text-sm leading-snug mb-1 flex-1">
                    {cert.name}
                  </h3>

                  <p className="text-xs text-slate-400 font-semibold mb-4">{cert.issuer} · {cert.date}</p>

                  <div className="mt-auto flex flex-wrap items-center gap-2">
                    {cert.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors"
                      >
                        <Award className="w-3.5 h-3.5" />
                        {link.label}
                        <ExternalLink className="w-3 h-3 opacity-70" />
                      </a>
                    ))}

                    {cert.images && cert.images.length > 1 && (
                      <button
                        onClick={() => setGalleryOpen(cert)}
                        className="flex items-center gap-1.5 text-xs font-bold text-amber-600 hover:text-amber-700 transition-colors"
                      >
                        <Images className="w-3.5 h-3.5" />
                        View documentation ({cert.images.length} photos)
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>

      {galleryOpen && <GalleryModal cert={galleryOpen} onClose={() => setGalleryOpen(null)} />}
    </section>
  )
}
