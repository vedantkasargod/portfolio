"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const blogs = [
  {
    id: "vibe-coding",
    title: "A love-hate relationship with vibe coding",
    slug: "vibe-coding-relationship",
  },
  {
    id: "llm-wrappers",
    title: "LLM wrappers everywhere?",
    slug: "llm-wrappers-everywhere",
  },
]

export default function Blogs() {
  return (
    <section className="mb-16">
      <h2 className="text-lg font-mono font-bold text-white mb-6 flex items-center">
        Blogs
        <div className="ml-2 flex space-x-1">
          <div className="pixel-dot bg-gray-400"></div>
          <div className="pixel-dot bg-gray-500"></div>
        </div>
      </h2>

      <div className="grid gap-3">
        {blogs.map((blog) => (
          <Link
            key={blog.id}
            href={`/blogs/${blog.slug}`}
            className="group block p-3 border border-green-600 hover:border-green-400 transition-all duration-300 hover:bg-green-900/10 retro-glow"
            style={{ clipPath: "polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))" }}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-mono font-medium text-white group-hover:text-gray-200 flex items-center">
                {blog.title}
                <div className="ml-2 pixel-dot bg-green-400 opacity-60"></div>
              </h3>
              <ArrowUpRight className="w-3 h-3 text-green-600 group-hover:text-green-300 transition-colors" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
