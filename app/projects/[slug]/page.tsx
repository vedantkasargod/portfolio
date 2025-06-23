import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

const projects = {
  "arxiv-mcp": {
    title: "arXiv MCP",
    description: "Enter the name of the paper you want to read. Generates TL;DR, Summary and more..",
    content: `
This project is designed to simplify the process of understanding academic papers from arXiv. By entering the title or keywords of a paper, users can receive a comprehensive summary that includes: TL;DR, detailed summary, key pointers, difficulty ratings, and pre-requisites for understanding the paper.

Key features include:
- Natural language processing to extract key information from papers
- User-friendly interface for easy input and output
- Not just basic summary but detailed insights into the paper's content
    `,
    video: "/mcp-arxiv-2.mp4",
  },
  "adaptive-chatbot-system": {
    title: "Adaptive Chatbot System",
    description: "Autonomous chatbot. Can take in user queries and decide which tool to call and spits response",
    content: `
This project focuses on building an intelligent chatbot system that can autonomously decide which tools to use based on user queries. The system leverages vectordb to classify intent and dynamically selects the appropriate tools or APIs to provide accurate responses.

Key features include:
- Intent recognition (Synthetically generated queries for transactional_queries and service_queries)
- Trained a model with this hand curated dataset to generate more similar and diverse queries
- Embedded the quries in milvusDB
- A similarity search is performed to find whether the query is transactional or service based
- Using milvus saves costs for an LLM call in prod
- Backend and frotend deployed on docker
- LLM serving via vLLM on WSL - model: phi3:7b
- Whenever user clicks on the chatbot button, a JWT session is created with a 10 minute expiry
- This makes the overall pipeline secure
    `,
    video: "/autonomous-chatbot.mp4",
  },
  "synthetic-dataset-generator": {
    title: "Synthetic Dataset Generator",
    description: "Generate dataset from prompts or fewer images to a 1000's (yes with bounding boxes generated).",
    content: `
<a href="https://github.com/vedantkasargod/synthetic-dataset-generator">Project Github link</a>

The system is particularly useful for computer vision tasks where labeled data is scarce or expensive to obtain. The heavy computational work is offloaded to cloud resources while maintaining a user-friendly interface.
    `,
    video: undefined,
  },
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects[params.slug as keyof typeof projects]

  if (!project) {
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

        <div className="mb-6">
          <h1 className="text-2xl font-mono font-bold text-white mb-3 flex items-center">
            {project.title}
            <div className="ml-3 pixel-dot bg-green-400"></div>
          </h1>
          <p className="text-base text-gray-400">{project.description}</p>
        </div>

        {(project.video || params.slug !== "synthetic-dataset-generator") && (
          <div className="mb-8">
            <div
              className="aspect-[16/7] w-full max-w-3xl bg-gray-900 border border-green-600 flex items-center justify-center retro-glow mx-auto"
              style={{ clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))" }}
            >
              {project.video ? (
                <video
                  src={project.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls
                  className="w-full h-[400px] object-cover rounded"
                />
              ) : (
                <p className="text-green-600 text-sm flex items-center">
                  Project image/video placeholder
                  <span className="ml-2 pixel-dot bg-green-400 animate-pulse"></span>
                </p>
              )}
            </div>
          </div>
        )}

        <div className="prose prose-invert max-w-none">
          <div className="whitespace-pre-line text-gray-300 leading-relaxed text-sm" dangerouslySetInnerHTML={{ __html: project.content }} />
        </div>
      </div>
    </main>
  )
}

