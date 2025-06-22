import Hero from "@/components/hero"
import About from "@/components/about"
import Projects from "@/components/projects"
import Blogs from "@/components/blogs"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import GitHubIcon from "@/components/github-icon"
import AnimationWidget from "@/components/animation-widget"

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-gray-300">
      <div className="max-w-4xl mx-auto px-6 py-8 relative">
        <div className="absolute top-4 right-0 flex flex-col items-end space-y-4">
          <GitHubIcon />
          <AnimationWidget />
        </div>

        <Hero />
        <About />
        <Projects />
        <Blogs />
        <Contact />
      </div>
      <Footer />
    </main>
  )
}
