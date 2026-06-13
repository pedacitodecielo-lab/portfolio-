'use client'

import { ExternalLink, Award } from 'lucide-react'
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

export default function Certifications() {
  return (
    <section id="certifications" className="py-28 bg-slate-50">
      <div className="section-container">

        <FadeIn>
          <div className="text-center mb-14">
            <div className="text-xs font-extrabold text-blue-600 mb-3 uppercase tracking-[0.18em]">Credentials</div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">
              Certifications &amp; <span className="gradient-text">Courses</span>
            </h2>
            <p className="text-slate-500 mt-4 max-w-xl mx-auto leading-relaxed text-[15px]">
              Always learning. These are some of the programs and courses I have completed.
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
                          target.parentElement.classList.add(`bg-gradient-to-br`, cert.gradient.split(' ')[0], cert.gradient.split(' ')[1])
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

                  {/* Links */}
                  {cert.links.length > 0 ? (
                    <div className="flex flex-wrap gap-2 mt-auto">
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
                    </div>
                  ) : (
                    <p className="text-[11px] text-slate-300 font-semibold mt-auto">Credential link coming soon</p>
                  )}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  )
}
