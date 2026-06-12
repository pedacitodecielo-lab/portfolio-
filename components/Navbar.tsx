'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Hobbies', href: '#hobbies' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled]         = useState(false)
  const [menuOpen, setMenuOpen]         = useState(false)
  const [active, setActive]             = useState('')
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
      const docH = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress(docH > 0 ? (window.scrollY / docH) * 100 : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100' : 'bg-white'
      }`}
    >
      <div
        className="absolute bottom-0 left-0 h-[2px] bg-blue-600 transition-none"
        style={{ width: `${scrollProgress}%` }}
      />
      <div className="section-container">
        <nav className="flex items-center justify-between h-16">
          <a href="#" className="text-xl font-extrabold text-slate-900 tracking-tight">
            Meelo<span className="text-blue-600">.</span>
          </a>

          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setActive(link.href)}
                  className={`relative text-sm font-semibold px-3 py-2 rounded-lg transition-colors ${
                    active === link.href
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="hidden md:flex gradient-btn text-white text-sm font-bold px-5 py-2.5 rounded-xl items-center gap-2"
          >
            Hire Me
          </a>

          <button
            className="md:hidden text-slate-600 hover:text-slate-900 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {menuOpen && (
          <div className="md:hidden py-4 border-t border-slate-100 space-y-1 animate-fade-scale">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-sm font-semibold text-slate-600 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-lg transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <a
                href="#contact"
                className="gradient-btn inline-block text-white text-sm font-bold px-5 py-2.5 rounded-xl"
                onClick={() => setMenuOpen(false)}
              >
                Hire Me
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
