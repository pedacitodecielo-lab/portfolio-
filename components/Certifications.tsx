import { ExternalLink, Award } from 'lucide-react'
import FadeIn from './FadeIn'

const certs = [
  {
    name: 'Google Data Analytics Professional Certificate',
    issuer: 'Google · Coursera',
    date: '2024',
    category: 'Analytics',
    categoryColor: 'bg-blue-100 text-blue-700',
    gradient: 'from-blue-500 to-blue-700',
    initial: 'G',
    href: '#',
  },
  {
    name: 'IBM Data Engineering Professional Certificate',
    issuer: 'IBM · Coursera',
    date: '2024',
    category: 'Engineering',
    categoryColor: 'bg-slate-100 text-slate-700',
    gradient: 'from-slate-700 to-slate-900',
    initial: 'IBM',
    href: '#',
  },
  {
    name: 'Microsoft Power BI Data Analyst',
    issuer: 'Microsoft',
    date: '2023',
    category: 'BI',
    categoryColor: 'bg-yellow-100 text-yellow-700',
    gradient: 'from-yellow-500 to-orange-500',
    initial: 'MS',
    href: '#',
  },
  {
    name: 'Belajar Analisis Data dengan Python',
    issuer: 'Dicoding Indonesia',
    date: '2023',
    category: 'Python',
    categoryColor: 'bg-green-100 text-green-700',
    gradient: 'from-green-500 to-teal-600',
    initial: 'D',
    href: '#',
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {certs.map((cert, i) => (
            <FadeIn key={cert.name} delay={i * 80}>
              <div className="card rounded-2xl p-5 flex flex-col h-full group hover:shadow-md transition-shadow">

                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cert.gradient} flex items-center justify-center mb-4 flex-shrink-0 shadow-sm`}>
                  <span className="text-white font-extrabold text-xs">{cert.initial}</span>
                </div>

                <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full w-fit mb-3 ${cert.categoryColor}`}>
                  {cert.category}
                </span>

                <h3 className="font-extrabold text-slate-900 text-sm leading-snug mb-1.5 flex-1">
                  {cert.name}
                </h3>

                <p className="text-xs text-slate-400 font-semibold mb-4">{cert.issuer} · {cert.date}</p>

                <a
                  href={cert.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors mt-auto"
                >
                  <Award className="w-3.5 h-3.5" />
                  View Credential
                  <ExternalLink className="w-3 h-3 opacity-70" />
                </a>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  )
}
