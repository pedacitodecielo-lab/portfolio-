'use client'

import { useState } from 'react'
import { ExternalLink, Github, FileText, X, ChevronLeft, ChevronRight, ImageOff, Layers, Droplets } from 'lucide-react'
import FadeIn from './FadeIn'

const tabs = ['All', 'Data Analysis', 'Research']

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
    icon: Layers, iconColor: 'text-green-600', iconBg: 'bg-green-50', headerBg: 'from-green-50 to-emerald-50',
    category: 'Data Analysis', badge: 'Geospatial', badgeColor: 'text-green-700 bg-green-100',
    title: 'Hydrometeorological Analysis — PT ANTAM Tbk',
    description: 'Satellite rainfall bias correction (GPM & CHIRPS vs. ground gauges), GIS slope mapping, and extensometer displacement analysis for HSSE monitoring at an active gold mine.',
    fullDesc: 'Performed end-to-end hydrometeorological and geospatial analysis for the HSSE division of PT ANTAM Tbk\'s Gold Mining Business Unit in Pongkor, Jawa Barat. Compared satellite rainfall products (GPM and CHIRPS) against ground rain gauges using bias correction techniques — Linear Scaling and Quantile Mapping. Created slope hazard maps from satellite DEM data using QGIS, processed extensometer displacement data to study lag time correlation with rainfall events, and produced time series visualizations and data availability matrices for official environmental monitoring reports. Also conducted field surveys at the active mining site.',
    highlights: [
      'Applied Linear Scaling and Quantile Mapping bias correction to GPM & CHIRPS satellite rainfall data',
      'Created GIS slope hazard maps using QGIS with satellite DEM data',
      'Analyzed extensometer displacement data to identify rainfall-to-slope-movement lag time',
      'Produced data availability matrices and time series visualizations for HSSE reports',
      'Conducted field surveys at active gold mining site for instrument inspection',
    ],
    tech: ['Python', 'QGIS', 'Pandas', 'Matplotlib', 'GIS', 'Satellite Data'],
    github: null, docs: null, live: null,
    previewImg: '/experience/antam/rainfall-timeseries.jpg',
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
    icon: Droplets, iconColor: 'text-cyan-600', iconBg: 'bg-cyan-50', headerBg: 'from-cyan-50 to-sky-50',
    category: 'Research', badge: 'Innovation', badgeColor: 'text-cyan-700 bg-cyan-100',
    title: 'Jaring Embun — Fog Harvesting for Clean Water',
    description: 'An innovative fog/dew harvesting net designed at FITB ITB as a solution to Indonesia\'s clean water crisis. Featured in Tempo.co and ITB official news.',
    fullDesc: 'Developed and tested a fog net (jaring embun) system as an innovative approach to clean water scarcity in Indonesia. The system captures atmospheric moisture through a specially designed mesh, channels collected water into a storage unit, and integrates IoT sensors for automated moisture data logging. The project was conducted at FITB (Faculty of Earth Sciences and Technology) at Institut Teknologi Bandung, combining principles of hydrology, materials science, and environmental engineering. The work gained national media coverage from Tempo.co and was featured on the ITB official website.',
    highlights: [
      'Designed and built a functional fog/dew harvesting net prototype at FITB ITB',
      'Integrates IoT sensors for automated moisture and collection data logging',
      'Addresses clean water access challenges in water-scarce regions of Indonesia',
      'Featured in Tempo.co national news coverage',
      'Published on ITB official website as an innovative student innovation',
    ],
    tech: ['IoT', 'Hydrology', 'Environmental Eng', 'Sensors', 'Field Research'],
    github: null,
    docs: 'https://itb.ac.id/berita/mahasiswa-itb-ciptakan-jaring-embun-solusi-inovatif-atasi-krisis-air/61776',
    live: 'https://en.tempo.co/read/1949487/itb-develops-and-tests-dew-harvesting-tool-to-address-clean-water-crisis',
    previewImg: '/projects/jaring-embun/photo1.jpg',
    images: [
      '/projects/jaring-embun/photo1.jpg',
      '/projects/jaring-embun/photo2.jpg',
      '/projects/jaring-embun/photo3.jpg',
    ],
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
                      {project.github && (
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
                          Article
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
