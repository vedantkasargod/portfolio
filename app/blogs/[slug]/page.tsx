import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

const blogs = {
  "vibe-coding-relationship": {
    title: "A love-hate relationship with vibe coding",
    content: `Vibe coding - that magical state where you're in the flow, fingers dancing across the keyboard, and everything just clicks. It's the developer's equivalent of being in the zone, where time seems to stop and code flows like poetry.

But here's the thing about vibe coding - it's both a blessing and a curse.

The Love:
When you're in the vibe, everything feels effortless. Complex problems unravel themselves, elegant solutions emerge naturally, and you feel like you could code forever. It's addictive, this feeling of pure creation where your thoughts translate directly into working code.

The Hate:
But vibe coding can be deceptive. In the heat of the moment, you might skip documentation, ignore edge cases, or write code that only makes sense to your current state of mind. The next morning, you're left staring at your own code wondering what past-you was thinking.

The reality is that sustainable development requires both the inspiration of vibe coding and the discipline of structured thinking. The key is learning when to ride the wave and when to step back and plan.`,
  },
  "llm-wrappers-everywhere": {
    title: "LLM wrappers everywhere?",
    content: `The AI landscape is flooded with LLM wrappers. Every day, there's a new startup claiming to revolutionize some industry with their "proprietary AI solution" - which, upon closer inspection, is often just a thin wrapper around GPT-4 or Claude.

Don't get me wrong - there's nothing inherently wrong with building on top of existing LLMs. The real question is: what value are you actually adding?

The Good Wrappers:
Some wrappers genuinely add value by:
- Solving domain-specific problems with specialized prompting
- Providing better UX for specific use cases
- Integrating multiple AI services seamlessly
- Adding necessary safety and compliance layers

The Not-So-Good Wrappers:
Then there are wrappers that simply:
- Repackage existing functionality with a new UI
- Add minimal value while charging premium prices
- Claim proprietary technology that's just prompt engineering

The key differentiator is whether you're solving a real problem or just riding the AI hype wave. The market will eventually separate the wheat from the chaff, but for now, we're in the wild west of AI applications.

As builders, we should focus on creating genuine value rather than just wrapping existing tools with fancy marketing.`,
  },
}

export default function BlogPage({ params }: { params: { slug: string } }) {
  const blog = blogs[params.slug as keyof typeof blogs]

  if (!blog) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-gray-950 text-gray-300">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <Link
          href="/"
          className="inline-flex items-center text-gray-400 hover:text-white transition-colors mb-6 text-sm"
        >
          <ArrowLeft className="w-3 h-3 mr-2" />
          Back to home
        </Link>

        <article>
          <h1 className="text-2xl font-mono font-bold text-white mb-6 flex items-center">
            {blog.title}
            <div className="ml-3 pixel-dot bg-gray-400"></div>
          </h1>

          <div className="prose prose-invert max-w-none">
            <div className="whitespace-pre-line text-gray-300 leading-relaxed text-sm">{blog.content}</div>
          </div>
        </article>
      </div>
    </main>
  )
}
