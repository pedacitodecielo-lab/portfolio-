'use client'

import { useState } from 'react'
import { X, ChevronLeft, ChevronRight, ImageOff, Images } from 'lucide-react'
import FadeIn from './FadeIn'

type Experience = {
  role: string
  company: string
  companyColor: string
  period: string
  current: boolean
  location: string
  highlights: string[]
  images: string[]
}

const experiences: Experience[] = [
  {
    role: 'HSSE Intern',
    company: 'PT ANTAM Tbk — Gold Mining Business Unit Pongkor',
    companyColor: 'text-green-600',
    period: 'Jan 2026 – Feb 2026',
    current: false,
    location: 'Pongkor, Jawa Barat',
    highlights: [
      'Performed GIS spatial analysis and created slope maps for the mine area using QGIS and satellite DEM data.',
      'Analyzed hydrometeorological data by comparing satellite rainfall products (GPM & CHIRPS) against ground-based rain gauges using bias correction methods (Linear Scaling, Quantile Mapping).',
      'Processed extensometer displacement data to study lag time correlation between rainfall events and slope movement.',
      'Produced data availability matrices and time series visualizations for environmental monitoring reports.',
      'Conducted field surveys at the active mining site for instrument inspection and data collection.',
    ],
    images: [
      '/experience/antam/slope-map.jpg',
      '/experience/antam/rainfall-timeseries.jpg',
      '/experience/antam/data-matrix.jpg',
      '/experience/antam/lag-time.jpg',
      '/experience/antam/field.jpg',
      '/experience/antam/certificate.jpg',
    ],
  },
  {
    role: 'Climate Change Department Intern',
    company: 'BMKG Pusat Kemayoran',
    companyColor: 'text-blue-600',
    period: 'Coming Soon',
    current: false,
    location: 'Jakarta Pusat',
    highlights: [
      'Details coming soon.',
    ],
    images: [],
  },
  {
    role: 'Assistant Lecturer',
    company: 'Institut Teknologi Bandung',
    companyColor: 'text-red-600',
    period: 'Coming Soon',
    current: false,
    location: 'Bandung, Jawa Barat',
    highlights: [
      'Details coming soon.',
    ],
    images: [],
  },
]

function GalleryModal({ exp, onClose }: { exp: Experience; onClose: () => void }) {
  const [imgIndex, setImgIndex] = useState(0)

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl animate-fade-scale"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-slate-100 relative">
          <button onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors">
            <X className="w-4 h-4 text-slate-600" />
          </button>
          <p className={`text-xs font-extrabold uppercase tracking-widest mb-1 ${exp.companyColor}`}>{exp.company}</p>
          <h2 className="text-xl font-extrabold text-slate-900">{exp.role}</h2>
          <p className="text-sm text-slate-400 font-medium mt-0.5">{exp.period} · {exp.location}</p>
        </div>

        <div className="p-6 space-y-6">
          {/* Image gallery */}
          {exp.images.length > 0 ? (
            <div>
              <div className="relative rounded-2xl overflow-hidden bg-slate-100 mb-3" style={{ aspectRatio: '16/9' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={exp.images[imgIndex]} alt={`Work ${imgIndex + 1}`}
                  className="w-full h-full object-cover" />
                {exp.images.length > 1 && (
                  <>
                    <button onClick={() => setImgIndex((i) => (i - 1 + exp.images.length) % exp.images.length)}
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/40 hover:bg-black/60 rounded-full flex items-center justify-center transition-colors">
                      <ChevronLeft className="w-4 h-4 text-white" />
                    </button>
                    <button onClick={() => setImgIndex((i) => (i + 1) % exp.images.length)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/40 hover:bg-black/60 rounded-full flex items-center justify-center transition-colors">
                      <ChevronRight className="w-4 h-4 text-white" />
                    </button>
                    <div className="absolute bottom-3 right-3 bg-black/50 text-white text-xs font-bold px-2 py-1 rounded-full">
                      {imgIndex + 1} / {exp.images.length}
                    </div>
                  </>
                )}
              </div>
              {/* Thumbnails */}
              {exp.images.length > 1 && (
                <div className="flex gap-2 overflow-x-auto pb-1">
                  {exp.images.map((img, i) => (
                    <button key={i} onClick={() => setImgIndex(i)}
                      className={`flex-shrink-0 w-16 h-12 rounded-lg overflow-hidden border-2 transition-all ${i === imgIndex ? 'border-blue-500' : 'border-transparent opacity-60 hover:opacity-100'}`}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={img} alt={`thumb ${i}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div className="rounded-2xl bg-slate-50 border-2 border-dashed border-slate-200 flex flex-col items-center justify-center gap-2 py-10 text-slate-400">
              <ImageOff className="w-8 h-8" />
              <p className="text-sm font-medium">No images yet</p>
            </div>
          )}

          {/* Highlights */}
          <div>
            <h3 className="font-extrabold text-slate-900 mb-3 text-sm uppercase tracking-wider">What I did</h3>
            <ul className="space-y-2.5">
              {exp.highlights.map((point, j) => (
                <li key={j} className="flex items-start gap-2.5 text-sm text-slate-500 leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 flex-shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Experience() {
  const [selected, setSelected] = useState<Experience | null>(null)

  return (
    <section id="experience" className="py-28 bg-white">
      <div className="section-container">
        <FadeIn>
          <div className="text-center mb-14">
            <div className="text-xs font-extrabold text-blue-600 mb-3 uppercase tracking-[0.18em]">Career</div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">
              Work <span className="gradient-text">Experience</span>
            </h2>
          </div>
        </FadeIn>

        <div className="max-w-3xl mx-auto relative">
          <div className="absolute left-[5px] top-2 bottom-0 w-px bg-gradient-to-b from-blue-400 via-blue-200 to-transparent" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <FadeIn key={i} delay={i * 150} direction="right">
                <div className="flex relative">
                  <div className="timeline-dot absolute left-0" />
                  <div className="card rounded-2xl p-6 flex-1 ml-8 hover:border-blue-100 transition-all">
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                      <div>
                        <h3 className="font-extrabold text-slate-900 text-lg leading-tight">{exp.role}</h3>
                        <div className={`text-sm font-bold mt-0.5 ${exp.companyColor}`}>{exp.company}</div>
                        <div className="text-xs text-slate-400 font-medium mt-0.5">{exp.location}</div>
                      </div>
                      <span className={`text-xs px-3 py-1 rounded-full font-bold whitespace-nowrap ${
                        exp.current ? 'text-green-700 bg-green-50 border border-green-200' : 'text-slate-500 bg-slate-100'
                      }`}>
                        {exp.current && <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-500 mr-1.5 animate-pulse" />}
                        {exp.period}
                      </span>
                    </div>

                    <ul className="space-y-2 mb-4">
                      {exp.highlights.map((point, j) => (
                        <li key={j} className="flex items-start gap-2.5 text-sm text-slate-500 leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 flex-shrink-0" />
                          {point}
                        </li>
                      ))}
                    </ul>

                    {exp.images.length > 0 && (
                      <button
                        onClick={() => setSelected(exp)}
                        className="flex items-center gap-2 text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors mt-2 pt-3 border-t border-slate-100 w-full"
                      >
                        <Images className="w-3.5 h-3.5" />
                        View work results ({exp.images.length} images)
                      </button>
                    )}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>

      {selected && <GalleryModal exp={selected} onClose={() => setSelected(null)} />}
    </section>
  )
}
