'use client'

import FadeIn from './FadeIn'

const row1 = [
  'Python', 'SQL', 'QGIS', 'Pandas', 'Matplotlib', 'Power BI',
  'Tableau', 'BigQuery', 'dbt', 'Apache Airflow', 'Scikit-learn', 'Kafka',
]

const row2 = [
  'NumPy', 'Seaborn', 'PostgreSQL', 'Snowflake', 'Git', 'Docker',
  'Apache Spark', 'Looker Studio', 'R', 'Excel', 'PySpark', 'Bash / Shell',
]

export default function Skills() {
  return (
    <section id="skills" className="py-28 bg-white">
      <div className="section-container">
        <FadeIn>
          <div className="text-center mb-14">
            <div className="text-xs font-extrabold text-blue-600 mb-3 uppercase tracking-[0.18em]">Tech Stack</div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">
              Tools &amp; <span className="gradient-text">Technologies</span>
            </h2>
            <p className="text-slate-500 mt-4 max-w-xl mx-auto leading-relaxed text-[15px]">
              Skills shown through real project work — see each tool in action in the projects section.
            </p>
          </div>
        </FadeIn>
      </div>

      {/* Row 1 — scrolls left */}
      <div className="marquee-gradient-mask overflow-hidden mb-4">
        <div className="flex marquee-pause animate-marquee-left" style={{ width: 'max-content' }}>
          {[...row1, ...row1].map((tool, i) => (
            <span
              key={i}
              className="skill-badge text-[13px] px-5 py-2.5 rounded-xl mx-2 whitespace-nowrap flex-shrink-0 cursor-default select-none"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>

      {/* Row 2 — scrolls right */}
      <div className="marquee-gradient-mask overflow-hidden">
        <div className="flex marquee-pause animate-marquee-right" style={{ width: 'max-content' }}>
          {[...row2, ...row2].map((tool, i) => (
            <span
              key={i}
              className="skill-badge-alt text-[13px] px-5 py-2.5 rounded-xl mx-2 whitespace-nowrap flex-shrink-0 cursor-default select-none"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
