import { Twitter, Linkedin, Mail } from "lucide-react"

export default function Contact() {
  return (
    <section className="mb-16">
      <h2 className="text-lg font-mono font-bold text-green-300 mb-6 flex items-center">
        Let's connect
        <div className="ml-2 flex space-x-1">
          <div className="pixel-dot bg-green-400 animate-pulse"></div>
          <div className="pixel-dot bg-green-500 animate-pulse" style={{ animationDelay: "0.5s" }}></div>
          <div className="pixel-dot bg-green-600 animate-pulse" style={{ animationDelay: "1s" }}></div>
        </div>
      </h2>

      <div className="flex space-x-4">
        <a
          href="https://x.com/kvedantt"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 border border-green-600 hover:border-green-400 hover:bg-green-900/10 transition-all duration-300 retro-glow"
          style={{ clipPath: "polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 4px 100%, 0 calc(100% - 4px))" }}
        >
          <Twitter className="w-4 h-4 text-green-500 hover:text-green-300" />
        </a>

        <a
          href="https://www.linkedin.com/in/vedant-kasargod12/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 border border-green-600 hover:border-green-400 hover:bg-green-900/10 transition-all duration-300 retro-glow"
          style={{ clipPath: "polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 4px 100%, 0 calc(100% - 4px))" }}
        >
          <Linkedin className="w-4 h-4 text-green-500 hover:text-green-300" />
        </a>

        <a
          href="mailto:vedantkasargod.09@gmail.com"
          className="p-2 border border-green-600 hover:border-green-400 hover:bg-green-900/10 transition-all duration-300 retro-glow"
          style={{ clipPath: "polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 4px 100%, 0 calc(100% - 4px))" }}
        >
          <Mail className="w-4 h-4 text-green-500 hover:text-green-300" />
        </a>
      </div>

      <p className="mt-6 text-gray-400 text-sm flex items-center">
        Made while sipping chai {"<3"}
        <span className="ml-2 pixel-dot bg-red-400"></span>
      </p>
    </section>
  )
}
