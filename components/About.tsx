import { MapPin, Mail, Github, Linkedin, User, Award, Clock, Target } from 'lucide-react'
import FadeIn from './FadeIn'

const highlights = [
  { icon: Target, title: 'Data Analysis', desc: 'Extracting meaningful patterns using statistical methods and visual storytelling.', color: 'text-blue-600 bg-blue-50' },
  { icon: Clock, title: 'Data Engineering', desc: 'Designing robust ETL/ELT pipelines, data warehouses, and streaming architectures.', color: 'text-purple-600 bg-purple-50' },
  { icon: Award, title: 'Business Intelligence', desc: 'Building interactive dashboards that empower stakeholders to make data-driven decisions.', color: 'text-green-600 bg-green-50' },
]

export default function About() {
  return (
    <section id="about" className="py-28 bg-slate-50">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <FadeIn direction="left">
            <div className="text-xs font-extrabold text-blue-600 mb-4 uppercase tracking-[0.18em]">About Me</div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight text-slate-900">
              Passionate about{' '}
              <span className="gradient-text">data</span>{' '}
              and its power to transform decisions
            </h2>
            <p className="text-slate-500 leading-relaxed mb-5 text-[15px]">
              I&apos;m a Data Analyst &amp; Data Engineer based in [Your City]. With [X] years of experience,
              I specialize in building end-to-end data solutions — from ingesting raw data to delivering
              polished dashboards that business teams love.
            </p>
            <p className="text-slate-500 leading-relaxed mb-8 text-[15px]">
              Comfortable across the full data stack: SQL queries, Python pipelines, star schema design,
              Power BI reports, and cloud data platforms.
            </p>

            <div className="flex flex-wrap gap-4 text-sm text-slate-500 mb-7 font-medium">
              <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-blue-500" />Bogor, Jawa Barat</span>
              <span className="flex items-center gap-2"><Mail className="w-4 h-4 text-blue-500" />emeliexaudi@gmail.com</span>
            </div>

            <div className="flex gap-3">
              {[
                { icon: Github, label: 'GitHub', href: 'http://github.com/pedacitodecielo-lab' },
                { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/emelio-exaudi-157620289/' },
              ].map(({ icon: Icon, label, href }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  className="card p-2.5 rounded-xl hover:border-blue-200 hover:text-blue-600 transition-all group">
                  <Icon className="w-5 h-5 text-slate-500 group-hover:text-blue-600 transition-colors" />
                </a>
              ))}
            </div>
          </FadeIn>

          {/* Right */}
          <div className="space-y-4">
            {highlights.map((item, i) => {
              const Icon = item.icon
              return (
                <FadeIn key={item.title} delay={i * 120} direction="right">
                  <div className="card-featured rounded-2xl p-5 cursor-default">
                    <div className="flex items-start gap-4">
                      <div className={`p-2.5 rounded-xl ${item.color} flex-shrink-0`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900 mb-1">{item.title}</h3>
                        <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              )
            })}

            <FadeIn delay={360}>
              <div className="card rounded-2xl p-5 bg-gradient-to-br from-blue-600 to-blue-500 border-0 text-white">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur flex items-center justify-center flex-shrink-0">
                    <User className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <div className="font-extrabold text-white text-lg">Emelio Exaudi</div>
                    <div className="text-sm text-blue-100 font-medium">Data Analyst &amp; Data Engineer</div>
                    <div className="text-xs text-green-300 font-bold mt-1.5 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block animate-pulse" />
                      Open to Work
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  )
}
