import { ArrowUp } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="py-10 bg-white border-t border-slate-100">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-sm text-slate-400 font-medium">
            Built with{' '}
            <span className="text-blue-600 font-bold">Next.js</span> &amp;{' '}
            <span className="text-blue-600 font-bold">Tailwind CSS</span>
          </div>

          <a href="#" className="text-slate-900 font-extrabold text-xl tracking-tight">
            Meelo<span className="text-blue-600">.</span>
          </a>

          <div className="flex items-center gap-6">
            <span className="text-sm text-slate-400 font-medium">© {year} All rights reserved.</span>
            <a
              href="#"
              className="gradient-btn w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4 text-white" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
