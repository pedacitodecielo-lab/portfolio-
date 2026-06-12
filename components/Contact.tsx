'use client'

import { useState } from 'react'
import { Send, Mail, Linkedin, Github, CheckCircle, ArrowRight } from 'lucide-react'
import FadeIn from './FadeIn'

const socials = [
  { icon: Linkedin, label: 'LinkedIn', sub: 'linkedin.com/in/emelio-exaudi', href: 'https://www.linkedin.com/in/emelio-exaudi-157620289/', color: 'hover:text-blue-600 hover:border-blue-200' },
  { icon: Github, label: 'GitHub', sub: 'github.com/pedacitodecielo-lab', href: 'http://github.com/pedacitodecielo-lab', color: 'hover:text-slate-900 hover:border-slate-300' },
  { icon: Mail, label: 'Email', sub: 'emelioexaudi@gmail.com', href: 'mailto:emelioexaudi@gmail.com', color: 'hover:text-red-500 hover:border-red-200' },
]

export default function Contact() {
  const [form, setForm] = useState({ email: '', message: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    const res = await fetch('https://formspree.io/f/GANTI_INI', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })
    setLoading(false)
    if (res.ok) setSent(true)
  }

  return (
    <section id="contact" className="py-28 bg-slate-50">
      <div className="section-container">
        <FadeIn>
          <div className="text-center mb-14">
            <div className="text-xs font-extrabold text-blue-600 mb-3 uppercase tracking-[0.18em]">Get In Touch</div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">
              Let&apos;s Work <span className="gradient-text">Together</span>
            </h2>
            <p className="text-slate-500 mt-4 max-w-xl mx-auto leading-relaxed text-[15px]">
              Open to full-time roles, freelance projects, and consulting in data analytics and engineering.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">

          {/* Left */}
          <FadeIn direction="left">
            <div>
              <h3 className="text-xl font-extrabold text-slate-900 mb-2">Connect with me</h3>
              <p className="text-slate-500 mb-8 text-sm leading-relaxed">
                Have a data project in mind or want to discuss opportunities? My inbox is always open.
              </p>

              <div className="space-y-3">
                {socials.map((s) => {
                  const Icon = s.icon
                  return (
                    <a key={s.label} href={s.href}
                      className={`flex items-center gap-4 group card rounded-xl p-3 transition-all ${s.color}`}
                    >
                      <div className="p-2 rounded-lg bg-slate-50 flex-shrink-0 transition-colors">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-bold text-slate-800 transition-colors">{s.label}</div>
                        <div className="text-xs text-slate-400 font-medium">{s.sub}</div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-current transition-all group-hover:translate-x-0.5 flex-shrink-0" />
                    </a>
                  )
                })}
              </div>
            </div>
          </FadeIn>

          {/* Right */}
          <FadeIn direction="right" delay={150}>
            <div>
              {sent ? (
                <div className="card rounded-2xl p-10 text-center flex flex-col items-center gap-4 animate-fade-scale">
                  <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-9 h-9 text-green-500" />
                  </div>
                  <h3 className="text-xl font-extrabold text-slate-900">Message Sent!</h3>
                  <p className="text-slate-500 text-sm">Thanks for reaching out. I&apos;ll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="email" placeholder="Your Email" value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })} required
                    className="input-field w-full rounded-xl px-4 py-3 text-sm font-medium"
                  />
                  <textarea
                    placeholder="Tell me about your project or opportunity..." value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })} required rows={5}
                    className="input-field w-full rounded-xl px-4 py-3 text-sm font-medium resize-none"
                  />
                  <button
                    type="submit" disabled={loading}
                    className="gradient-btn w-full text-white font-extrabold py-3.5 rounded-xl flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  )
}
