'use client'

import { useState } from 'react'
import { ExternalLink, Github, Database, BarChart2, Zap, Search, Activity, GitBranch, FileText } from 'lucide-react'
import FadeIn from './FadeIn'

const tabs = ['All', 'Data Engineering', 'Data Analysis', 'Business Intelligence', 'Automation']

const projects = [
  {
    icon: Database, iconColor: 'text-blue-600', iconBg: 'bg-blue-50', headerBg: 'from-blue-50 to-sky-50',
    category: 'Data Engineering', badge: 'Pipeline', badgeColor: 'text-blue-700 bg-blue-100',
    title: 'Real-time Sales Data Pipeline',
    description: 'End-to-end ELT pipeline ingesting 10M+ daily events from Kafka into BigQuery, with dbt transformations and automated data quality checks.',
    tech: ['Python', 'Kafka', 'BigQuery', 'dbt', 'Airflow'],
    github: '#',
    docs: null,
    live: null,
    previewImg: null,
  },
  {
    icon: BarChart2, iconColor: 'text-purple-600', iconBg: 'bg-purple-50', headerBg: 'from-purple-50 to-violet-50',
    category: 'Business Intelligence', badge: 'Dashboard', badgeColor: 'text-purple-700 bg-purple-100',
    title: 'Executive Revenue Dashboard',
    description: 'Multi-page Power BI dashboard tracking KPIs for a 500M+ revenue business, reducing report generation from 2 days to real-time.',
    tech: ['Power BI', 'SQL', 'DAX', 'Azure Synapse'],
    github: '#',
    docs: null,
    live: null,
    previewImg: null,
  },
  {
    icon: Search, iconColor: 'text-green-600', iconBg: 'bg-green-50', headerBg: 'from-green-50 to-emerald-50',
    category: 'Data Analysis', badge: 'ML / Analysis', badgeColor: 'text-green-700 bg-green-100',
    title: 'Customer Churn Analysis',
    description: 'Behavioral analysis of 50K+ customers to identify churn drivers; predictive model with 87% accuracy, reducing churn by 15%.',
    tech: ['Python', 'Scikit-learn', 'Pandas', 'Tableau'],
    github: '#',
    docs: null,
    live: null,
    previewImg: null,
  },
  {
    icon: Zap, iconColor: 'text-amber-600', iconBg: 'bg-amber-50', headerBg: 'from-amber-50 to-yellow-50',
    category: 'Data Engineering', badge: 'Migration', badgeColor: 'text-amber-700 bg-amber-100',
    title: 'Data Warehouse Migration',
    description: 'Led migration of legacy SQL Server DWH to Snowflake, redesigning star schema models and reducing query costs by 60%.',
    tech: ['Snowflake', 'dbt', 'SQL', 'Python', 'Fivetran'],
    github: '#',
    docs: null,
    live: null,
    previewImg: null,
  },
  {
    icon: Activity, iconColor: 'text-red-600', iconBg: 'bg-red-50', headerBg: 'from-red-50 to-rose-50',
    category: 'Data Analysis', badge: 'Clustering', badgeColor: 'text-red-700 bg-red-100',
    title: 'Market Segmentation Study',
    description: 'K-Means clustering on transactional data to identify 6 distinct customer segments, informing targeted marketing campaigns.',
    tech: ['Python', 'K-Means', 'Seaborn', 'Pandas'],
    github: '#',
    docs: null,
    live: null,
    previewImg: null,
  },
  {
    icon: GitBranch, iconColor: 'text-teal-600', iconBg: 'bg-teal-50', headerBg: 'from-teal-50 to-cyan-50',
    category: 'Automation', badge: 'Automation', badgeColor: 'text-teal-700 bg-teal-100',
    title: 'Automated Reporting System',
    description: 'Python scheduler that auto-generates and distributes 20+ weekly reports via email, saving 8+ hours/week for the analytics team.',
    tech: ['Python', 'Airflow', 'PostgreSQL', 'SMTP'],
    github: '#',
    docs: null,
    live: null,
    previewImg: null,
  },
]

export default function Projects() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active)

  return (
    <section id="projects" className="py-28 bg-slate-50">
      <div className="section-container">
        <FadeIn>
          <div className="text-center mb-10">
            <div className="text-xs font-extrabold text-blue-600 mb-3 uppercase tracking-[0.18em]">My Work</div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-slate-500 mt-4 max-w-xl mx-auto leading-relaxed text-[15px]">
              Real-world data solutions built to solve complex problems at scale.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={100}>
          <div className="flex gap-6 md:gap-8 border-b border-slate-200 mb-10 overflow-x-auto scrollbar-hide">
            {tabs.map((tab) => (
              <button key={tab} onClick={() => setActive(tab)}
                className={`tab-btn ${active === tab ? 'active' : ''}`}>
                {tab}
              </button>
            ))}
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((project, i) => {
            const Icon = project.icon
            const hasLinks = project.github !== '#' || project.docs || project.live

            return (
              <FadeIn key={project.title} delay={i * 80}>
                <article className="card rounded-2xl overflow-hidden flex flex-col h-full group">

                  {/* Header — preview image or gradient fallback */}
                  {project.previewImg ? (
                    <div className="relative h-44 overflow-hidden flex-shrink-0">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={project.previewImg}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                      <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between gap-2">
                        <h3 className="font-extrabold text-white text-base drop-shadow leading-tight">{project.title}</h3>
                        <span className={`text-[10px] font-extrabold px-2 py-1 rounded-full flex-shrink-0 ${project.badgeColor} backdrop-blur-sm`}>
                          {project.badge}
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div className={`bg-gradient-to-br ${project.headerBg} px-6 pt-6 pb-4 flex items-start justify-between flex-shrink-0`}>
                      <div className={`p-2.5 rounded-xl ${project.iconBg} shadow-sm`}>
                        <Icon className={`w-5 h-5 ${project.iconColor}`} />
                      </div>
                      <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${project.badgeColor}`}>
                        {project.badge}
                      </span>
                    </div>
                  )}

                  {/* Content */}
                  <div className="px-6 py-4 flex flex-col flex-1">
                    {!project.previewImg && (
                      <h3 className="font-extrabold text-slate-900 mb-2 leading-tight">{project.title}</h3>
                    )}
                    {project.previewImg && (
                      <h3 className="font-extrabold text-slate-900 mb-2 leading-tight">{project.title}</h3>
                    )}
                    <p className="text-sm text-slate-500 leading-relaxed mb-4 flex-1">{project.description}</p>

                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tech.map((t) => (
                        <span key={t} className="text-xs text-blue-700 bg-blue-50 border border-blue-100 px-2 py-0.5 rounded font-semibold">
                          {t}
                        </span>
                      ))}
                    </div>

                    {hasLinks && (
                      <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
                        {project.github && project.github !== '#' && (
                          <a href={project.github} target="_blank" rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-slate-900 transition-colors font-semibold group/link">
                            <Github className="w-4 h-4 transition-transform group-hover/link:-translate-y-0.5" />
                            Code
                          </a>
                        )}
                        {project.docs && (
                          <a href={project.docs} target="_blank" rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-violet-600 transition-colors font-semibold group/link">
                            <FileText className="w-4 h-4 transition-transform group-hover/link:-translate-y-0.5" />
                            Docs
                          </a>
                        )}
                        {project.live && (
                          <a href={project.live} target="_blank" rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-blue-600 transition-colors font-semibold ml-auto group/link">
                            <ExternalLink className="w-4 h-4 transition-transform group-hover/link:-translate-y-0.5" />
                            Live
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </article>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}
