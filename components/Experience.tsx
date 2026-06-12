import FadeIn from './FadeIn'

const experiences = [
  {
    role: 'Senior Data Analyst',
    company: 'Company Name',
    companyColor: 'text-blue-600',
    period: 'Jan 2023 – Present',
    current: true,
    highlights: [
      'Designed 15+ dbt data models serving analytics teams across 3 business units.',
      'Built Power BI dashboards reducing weekly reporting effort by 70% for leadership.',
      'Led analytics migration from Redshift to Snowflake, cutting infrastructure costs by 40%.',
    ],
  },
  {
    role: 'Data Analyst',
    company: 'Previous Company',
    companyColor: 'text-purple-600',
    period: 'Jun 2021 – Dec 2022',
    current: false,
    highlights: [
      'Analyzed 200+ SKU sales data to optimize pricing, increasing gross margin by 8%.',
      'Automated daily reports with Python and SQL, saving 5 hours/week for the ops team.',
      'Supported 12 A/B experiments with statistical analysis and stakeholder presentations.',
    ],
  },
  {
    role: 'Data Intern',
    company: 'Startup Name',
    companyColor: 'text-teal-600',
    period: 'Jan 2021 – May 2021',
    current: false,
    highlights: [
      'Cleaned and transformed 3M+ records for customer analytics using Pandas.',
      "Built the team's first Power BI customer funnel tracking dashboard.",
      'Supported senior analysts with ad-hoc SQL queries and data extractions.',
    ],
  },
]

export default function Experience() {
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
          {/* Animated timeline line */}
          <div className="absolute left-[5px] top-2 bottom-0 w-px bg-gradient-to-b from-blue-400 via-blue-200 to-transparent" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <FadeIn key={i} delay={i * 150} direction="right">
                <div className="flex relative">
                  <div className="timeline-dot absolute left-0" />
                  <div className="card rounded-2xl p-6 flex-1 ml-8 group hover:border-blue-100">
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                      <div>
                        <h3 className="font-extrabold text-slate-900 text-lg leading-tight">{exp.role}</h3>
                        <div className={`text-sm font-bold mt-0.5 ${exp.companyColor}`}>{exp.company}</div>
                      </div>
                      <span
                        className={`text-xs px-3 py-1 rounded-full font-bold whitespace-nowrap ${
                          exp.current
                            ? 'text-green-700 bg-green-50 border border-green-200'
                            : 'text-slate-500 bg-slate-100'
                        }`}
                      >
                        {exp.current && (
                          <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-500 mr-1.5 animate-pulse" />
                        )}
                        {exp.period}
                      </span>
                    </div>
                    <ul className="space-y-2">
                      {exp.highlights.map((point, j) => (
                        <li key={j} className="flex items-start gap-2.5 text-sm text-slate-500 leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 flex-shrink-0" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
