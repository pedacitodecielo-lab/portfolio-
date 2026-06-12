import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Certifications from '@/components/Certifications'
import Projects from '@/components/Projects'
import Experience from '@/components/Experience'
import Currently from '@/components/Currently'
import Hobbies from '@/components/Hobbies'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Certifications />
      <Projects />
      <Experience />
      <Currently />
      <Hobbies />
      <Contact />
      <Footer />
    </main>
  )
}
