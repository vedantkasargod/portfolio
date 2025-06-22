import { Github } from "lucide-react"

export default function GitHubIcon() {
  return (
    <a
      href="https://github.com/vedantkasargod"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center w-8 h-8 border border-green-600 bg-gray-900/50 hover:bg-green-900/20 transition-all duration-300 text-green-400 hover:text-green-300 retro-glow"
      style={{ clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))" }}
    >
      <Github className="w-4 h-4" />
    </a>
  )
}
