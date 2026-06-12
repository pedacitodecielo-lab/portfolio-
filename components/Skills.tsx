'use client'

import { useState } from 'react'
import FadeIn from './FadeIn'

const tabs = ['All', 'Programming', 'Data Libraries', 'Data Engineering', 'Cloud & Databases', 'Visualization']

const skillCategories = [
  {
    category: 'Programming',
    emoji: '⌨️',
    skills: ['Python', 'SQL', 'R', 'Bash / Shell', 'Scala'],
  },
  {
    category: 'Data Libraries',
    emoji: '📦',
    skills: ['Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib', 'Seaborn', 'PySpark'],
  },
  {
    category: 'Data Engineering',
    emoji: '⚙️',
    skills: ['Apache Spark', 'Apache Airflow', 'dbt', 'Kafka', 'Docker', 'Git'],
  },
  {
    category: 'Cloud & Databases',
    emoji: '☁️',
    skills: ['BigQuery', 'Snowflake', 'PostgreSQL', 'AWS S3', 'Google Cloud', 'Redshift'],
  },
  {
    category: 'Visualization',
    emoji: '📊',
    skills: ['Power BI', 'Tableau', 'Looker', 'Excel', 'Google Looker Studio'],
  },
  {
    category: 'Concepts',
    emoji: '🧠',
    skills: ['Data Modeling', 'ETL / ELT', 'Data Warehousing', 'Statistics', 'A/B Testing', 'ML Basics'],
  },
]

export default function Skills() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? skillCategories : skillCategories.filter((c) => c.category === active)

  return (
    <section id="skills" className="py-28 bg-white">
      <div className="section-container">
        <FadeIn>
          <div className="text-center mb-10">
            <div className="text-xs font-extrabold text-blue-600 mb-3 uppercase tracking-[0.18em]">Tech Stack</div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">
              Tools &amp; <span className="gradient-text">Technologies</span>
            </h2>
            <p className="text-slate-500 mt-4 max-w-xl mx-auto leading-relaxed text-[15px]">
              A comprehensive toolkit built across the full data lifecycle — from ingestion to insight.
            </p>
          </div>
        </FadeIn>

        {/* Razorpay-style tab navigation */}
        <FadeIn delay={100}>
          <div className="flex gap-6 md:gap-8 border-b border-slate-200 mb-10 overflow-x-auto scrollbar-hide">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActive(tab)}
                className={`tab-btn ${active === tab ? 'active' : ''}`}
              >
                {tab}
              </button>
            ))}
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((cat, i) => (
            <FadeIn key={cat.category} delay={i * 80}>
              <div className="card-featured rounded-2xl p-6 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xl">{cat.emoji}</span>
                  <h3 className="text-xs font-extrabold text-blue-600 uppercase tracking-widest">
                    {cat.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span key={skill} className="skill-badge text-sm px-3 py-1.5 rounded-lg">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
