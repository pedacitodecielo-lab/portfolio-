'use client'

import { useState } from 'react'
import { ExternalLink, Github, Database, BarChart2, Zap, Search, Activity, GitBranch, FileText, X, ChevronLeft, ChevronRight, ImageOff } from 'lucide-react'
import FadeIn from './FadeIn'

const tabs = ['All', 'Data Engineering', 'Data Analysis', 'Business Intelligence', 'Automation']

type Project = {
  icon: React.ElementType
  iconColor: string
  iconBg: string
  headerBg: string
  category: string
  badge: string
  badgeColor: string
  title: string
  description: string
  fullDesc: string
  highlights: string[]
  tech: string[]
  github: string | null
  docs: string | null
  live: string | null
  previewImg: string | null
  images: string[]
}

const projects: Project[] = [
  {
    icon: Database, iconColor: 'text-blue-600', iconBg: 'bg-blue-50', headerBg: 'from-blue-50 to-sky-50',
    category: 'Data Engineering', badge: 'Pipeline', badgeColor: 'text-blue-700 bg-blue-100',
    title: 'Real-time Sales Data Pipeline',
    description: 'End-to-end ELT pipeline ingesting 10M+ daily events from Kafka into BigQuery, with dbt transformations and automated data quality checks.',
    fullDesc: 'Built a fully automated ELT pipeline that ingests over 10 million sales events daily from multiple Kafka topics into Google BigQuery. The pipeline includes real-time schema validation, error handling with dead-letter queues, and dbt transformation models that produce clean, business-ready tables. Apache Airflow orchestrates the entire workflow with alerting on failure.',
    highlights: ['10M+ events processed daily', 'Sub-5 minute latency end-to-end', '99.9% pipeline uptime', 'Automated data quality checks on every run'],
    tech: ['Python', 'Kafka', 'BigQuery', 'dbt', 'Airflow'],
    github: '#', docs: null, live: null, previewImg: null, images: [],
  },
  {
    icon: BarChart2, iconColor: 'text-purple-600', iconBg: 'bg-purple-50', headerBg: 'from-purple-50 to-violet-50',
    category: 'Business Intelligence', badge: 'Dashboard', badgeColor: 'text-purple-700 bg-purple-100',
    title: 'Executive Revenue Dashboard',
    description: 'Multi-page Power BI dashboard tracking KPIs for a 500M+ revenue business, reducing report generation from 2 days to real-time.',
    fullDesc: 'Designed and built a multi-page Power BI dashboard for the executive team of a 500M+ revenue company. Replaced a manual Excel reporting process that took 2 business days with a real-time solution pulling directly from Azure Synapse. The dashboard covers revenue breakdown by region, product, and channel, with drill-through capability and row-level security for each business unit.',
    highlights: ['Report time cut from 2 days to real-time', 'Used by C-level and 15+ business units', 'Row-level security for data governance', 'Integrated with Azure Synapse and SQL Server'],
    tech: ['Power BI', 'SQL', 'DAX', 'Azure Synapse'],
    github: '#', docs: null, live: null, previewImg: null, images: [],
  },
  {
    icon: Search, iconColor: 'text-green-600', iconBg: 'bg-green-50', headerBg: 'from-green-50 to-emerald-50',
    category: 'Data Analysis', badge: 'ML / Analysis', badgeColor: 'text-green-700 bg-green-100',
    title: 'Customer Churn Analysis',
    description: 'Behavioral analysis of 50K+ customers to identify churn drivers; predictive model with 87% accuracy, reducing churn by 15%.',
    fullDesc: 'Performed end-to-end churn analysis on a dataset of 50,000+ customers across 18 months of transaction history. Used feature engineering to extract behavioral signals like recency, frequency, and engagement drop-off patterns. Built and tuned a Random Forest classifier that achieved 87% accuracy. The model output was integrated into a CRM dashboard to flag at-risk customers for the retention team.',
    highlights: ['87% model accuracy on test set', '15% reduction in monthly churn post-deployment', '50K+ customers analyzed', 'Integrated into CRM for retention team use'],
    tech: ['Python', 'Scikit-learn', 'Pandas', 'Tableau'],
    github: '#', docs: null, live: null, previewImg: null, images: [],
  },
  {
    icon: Zap, iconColor: 'text-amber-600', iconBg: 'bg-amber-50', headerBg: 'from-amber-50 to-yellow-50',
    category: 'Data Engineering', badge: 'Migration', badgeColor: 'text-amber-700 bg-amber-100',
    title: 'Data Warehouse Migration',
    description: 'Led migration of legacy SQL Server DWH to Snowflake, redesigning star schema models and reducing query costs by 60%.',
    fullDesc: 'Led the full migration of a legacy on-premise SQL Server data warehouse to Snowflake on AWS. Redesigned the dimensional model from a flat denormalized structure to a proper star schema with Kimball methodology. Used Fivetran for source ingestion and dbt for transformation. The migration resulted in significantly faster query performance and a 60% reduction in infrastructure cost.',
    highlights: ['60% reduction in query and storage costs', 'Full star schema redesign with dbt', '200+ tables migrated with zero data loss', 'Migration completed in 3 months'],
    tech: ['Snowflake', 'dbt', 'SQL', 'Python', 'Fivetran'],
    github: '#', docs: null, live: null, previewImg: null, images: [],
  },
  {
    icon: Activity, iconColor: 'text-red-600', iconBg: 'bg-red-50', headerBg: 'from-red-50 to-rose-50',
    category: 'Data Analysis', badge: 'Clustering', badgeColor: 'text-red-700 bg-red-100',
    title: 'Market Segmentation Study',
    description: 'K-Means clustering on transactional data to identify 6 distinct customer segments, informing targeted marketing campaigns.',
    fullDesc: 'Applied unsupervised learning to segment a customer base using two years of transactional data. After preprocessing and RFM feature construction, K-Means clustering identified 6 meaningful segments ranging from high-value loyalists to one-time buyers. The segmentation was visualized in Seaborn and delivered as a business report with actionable recommendations for each segment.',
    highlights: ['6 distinct segments identified from 80K+ records', 'Used by marketing team for targeted campaigns', '23% uplift in campaign CTR post-segmentation', 'Full analysis delivered as executive report'],
    tech: ['Python', 'K-Means', 'Seaborn', 'Pandas'],
    github: '#', docs: null, live: null, previewImg: null, images: [],
  },
  {
    icon: GitBranch, iconColor: 'text-teal-600', iconBg: 'bg-teal-50', headerBg: 'from-teal-50 to-cyan-50',
    category: 'Automation', badge: 'Automation', badgeColor: 'text-teal-700 bg-teal-100',
    title: 'Automated Reporting System',
    description: 'Python scheduler that auto-generates and distributes 20+ weekly reports via email, saving 8+ hours/week for the analytics team.',
    fullDesc: 'Built a Python-based reporting automation system that generates and distributes over 20 weekly reports to different stakeholders across the business. Each report is dynamically generated from PostgreSQL queries, formatted into Excel and PDF, and sent via SMTP with personalized subject lines. Apache Airflow manages scheduling and retry logic. The system replaced a fully manual process.',
    highlights: ['20+ reports automated end-to-end', '8+ hours saved per week for the analytics team', 'Supports Excel, PDF, and email delivery', 'Handles scheduling, retries, and failure alerts'],
    tech: ['Python', 'Airflow', 'PostgreSQL', 'SMTP'],
    github: '#', docs: null, live: null, previewImg: null, images: [],
  },
]

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const [imgIndex, setImgIndex] = useState(0)
  const Icon = project.icon
  const hasImages = project.images.length > 0

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
        <div className={`bg-gradient-to-br ${project.headerBg} p-6 relative flex-shrink-0`}>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/70 hover:bg-white flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4 text-slate-600" />
          </button>
          <div className={`p-2.5 rounded-xl ${project.iconBg} w-fit mb-3 shadow-sm`}>
            <Icon className={`w-5 h-5 ${project.iconColor}`} />
          </div>
          <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${project.badgeColor} mb-2 inline-block`}>
            {project.badge}
          </span>
          <h2 className="text-xl font-extrabold text-slate-900 leading-tight">{project.title}</h2>
        </div>

        <div className="p-6 space-y-6">
          {/* Image gallery */}
          {hasImages ? (
            <div className="relative rounded-2xl overflow-hidden bg-slate-100" style={{ aspectRatio: '16/9' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={project.images[imgIndex]} alt={`Preview ${imgIndex + 1}`}
                className="w-full h-full object-cover" />
              {project.images.length > 1 && (
                <>
                  <button onClick={() => setImgIndex((i) => (i - 1 + project.images.length) % project.images.length)}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/40 hover:bg-black/60 rounded-full flex items-center justify-center transition-colors">
                    <ChevronLeft className="w-4 h-4 text-white" />
                  </button>
                  <button onClick={() => setImgIndex((i) => (i + 1) % project.images.length)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/40 hover:bg-black/60 rounded-full flex items-center justify-center transition-colors">
                    <ChevronRight className="w-4 h-4 text-white" />
                  </button>
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                    {project.images.map((_, i) => (
                      <button key={i} onClick={() => setImgIndex(i)}
                        className={`w-1.5 h-1.5 rounded-full transition-colors ${i === imgIndex ? 'bg-white' : 'bg-white/40'}`} />
                    ))}
                  </div>
                </>
              )}
            </div>
          ) : (
            <div className="rounded-2xl bg-slate-50 border-2 border-dashed border-slate-200 flex flex-col items-center justify-center gap-2 py-10 text-slate-400">
              <ImageOff className="w-8 h-8" />
              <p className="text-sm font-medium">No preview images yet</p>
            </div>
          )}

          {/* Description */}
          <div>
            <h3 className="font-extrabold text-slate-900 mb-2 text-sm uppercase tracking-wider">About this project</h3>
            <p className="text-slate-500 text-sm leading-relaxed">{project.fullDesc}</p>
          </div>

          {/* Highlights */}
          <div>
            <h3 className="font-extrabold text-slate-900 mb-3 text-sm uppercase tracking-wider">Key Results</h3>
            <ul className="space-y-2">
              {project.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2.5 text-sm text-slate-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0 mt-1.5" />
                  {h}
                </li>
              ))}
            </ul>
          </div>

          {/* Tech */}
          <div>
            <h3 className="font-extrabold text-slate-900 mb-3 text-sm uppercase tracking-wider">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span key={t} className="text-xs text-blue-700 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full font-semibold">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-3 pt-2 border-t border-slate-100">
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-slate-900 transition-colors px-4 py-2 rounded-xl border border-slate-200 hover:border-slate-300">
                <Github className="w-4 h-4" /> Code
              </a>
            )}
            {project.docs && (
              <a href={project.docs} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-violet-600 transition-colors px-4 py-2 rounded-xl border border-slate-200 hover:border-violet-200">
                <FileText className="w-4 h-4" /> Docs
              </a>
            )}
            {project.live && (
              <a href={project.live} target="_blank" rel="noopener noreferrer"
                className="gradient-btn flex items-center gap-2 text-sm font-bold text-white px-4 py-2 rounded-xl ml-auto">
                <ExternalLink className="w-4 h-4" /> Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const [active, setActive] = useState('All')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

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
            return (
              <FadeIn key={project.title} delay={i * 80}>
                <article
                  className="card rounded-2xl overflow-hidden flex flex-col h-full group cursor-pointer hover:shadow-md hover:-translate-y-1 transition-all duration-200"
                  onClick={() => setSelectedProject(project)}
                >
                  {/* Header */}
                  {project.previewImg ? (
                    <div className="relative h-44 overflow-hidden flex-shrink-0">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={project.previewImg} alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                      <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between gap-2">
                        <h3 className="font-extrabold text-white text-base drop-shadow leading-tight">{project.title}</h3>
                        <span className={`text-[10px] font-extrabold px-2 py-1 rounded-full flex-shrink-0 ${project.badgeColor}`}>
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
                    <h3 className="font-extrabold text-slate-900 mb-2 leading-tight">{project.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed mb-4 flex-1">{project.description}</p>

                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tech.map((t) => (
                        <span key={t} className="text-xs text-blue-700 bg-blue-50 border border-blue-100 px-2 py-0.5 rounded font-semibold">
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-4 pt-4 border-t border-slate-100" onClick={(e) => e.stopPropagation()}>
                      <a href={project.github ?? '#'} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-slate-900 transition-colors font-semibold group/link">
                        <Github className="w-4 h-4 transition-transform group-hover/link:-translate-y-0.5" />
                        Code
                      </a>
                      {project.docs && (
                        <a href={project.docs} target="_blank" rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-violet-600 transition-colors font-semibold group/link">
                          <FileText className="w-4 h-4 transition-transform group-hover/link:-translate-y-0.5" />
                          Docs
                        </a>
                      )}
                      <a href={project.live ?? '#'} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-blue-600 transition-colors font-semibold ml-auto group/link">
                        <ExternalLink className="w-4 h-4 transition-transform group-hover/link:-translate-y-0.5" />
                        Live
                      </a>
                    </div>
                  </div>
                </article>
              </FadeIn>
            )
          })}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  )
}
