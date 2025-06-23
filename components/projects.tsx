"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    id: "arXiv-MCP",
    title: "arXiv MCP",
    description: "Enter the name of the paper you want to read. Generates TL;DR, Summary, Key pointers, Difficulty ratings, pre-requisites, and more.",
    slug: "arxiv-mcp",
    video: "public/mcp-arxiv-2.mp4",
  },
  {
    id: "adaptive-chatbot",
    title: "Adaptive Chatbot System",
    description: "Autonomous chatbot. Can take in user queries and decide which tool to call and spits response",
    slug: "adaptive-chatbot-system",
  },
  {
    id: "synthetic-dataset",
    title: "Synthetic Dataset Generator",
    description:
      "Generate dataset from prompts or fewer images to a 1000's (yes with bounding boxes generated). Heavylifting of compute done on colab. Exposed to frontend via ngrok.",
    slug: "synthetic-dataset-generator",
  },
]

export default function Projects() {
  return (
    <section className="mb-16">
      <h2 className="text-lg font-mono font-bold text-white mb-6 flex items-center">
        Projects
        <div className="ml-2 w-1 h-4 bg-green-400 animate-pulse"></div>
      </h2>

      <div className="grid gap-4">
        {projects.map((project) => (
          <Link
            key={project.id}
            href={`/projects/${project.slug}`}
            className="group block p-4 border border-green-600 hover:border-green-400 transition-all duration-300 hover:bg-green-900/10 retro-glow"
            style={{ clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))" }}
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="text-base font-mono font-semibold text-white mb-2 group-hover:text-gray-200 flex items-center">
                  {project.title}
                  <div className="ml-2 pixel-dot bg-green-400 opacity-60"></div>
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{project.description}</p>
              </div>
              <ArrowUpRight className="w-4 h-4 text-green-600 group-hover:text-green-300 transition-colors ml-3 flex-shrink-0" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
