import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

const projects = {
  "adaptive-chatbot-system": {
    title: "Adaptive Chatbot System",
    description: "Autonomous chatbot. Can take in user queries and decide which tool to call and spits response",
    content: `This project focuses on building an intelligent chatbot system that can autonomously decide which tools to use based on user queries. The system leverages natural language processing to understand user intent and dynamically selects the appropriate tools or APIs to provide accurate responses.

Key features include:
- Intent recognition and classification
- Dynamic tool selection
- Context-aware responses
- Scalable architecture for multiple tool integrations

The chatbot is designed to handle complex queries by breaking them down into actionable components and utilizing the most suitable tools for each task.`,
  },
  "synthetic-dataset-generator": {
    title: "Synthetic Dataset Generator",
    description: "Generate dataset from prompts or fewer images to a 1000's (yes with bounding boxes generated)",
    content: `A powerful tool for generating synthetic datasets from minimal input data. This project addresses the common challenge of insufficient training data by creating high-quality synthetic datasets with accurate bounding box annotations.

Key capabilities:
- Generate thousands of images from just a few samples
- Automatic bounding box generation
- Prompt-based dataset creation
- Compute-intensive processing handled on Google Colab
- Frontend integration via ngrok tunneling

The system is particularly useful for computer vision tasks where labeled data is scarce or expensive to obtain. The heavy computational work is offloaded to cloud resources while maintaining a user-friendly interface.`,
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

        <div className="mb-8">
          <div
            className="aspect-[4/3] max-w-md bg-gray-900 border border-green-600 flex items-center justify-center retro-glow"
            style={{ clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))" }}
          >
            <p className="text-green-600 text-sm flex items-center">
              Project image/video placeholder
              <span className="ml-2 pixel-dot bg-green-400 animate-pulse"></span>
            </p>
          </div>
        </div>

        <div className="prose prose-invert max-w-none">
          <div className="whitespace-pre-line text-gray-300 leading-relaxed text-sm">{project.content}</div>
        </div>
      </div>
    </main>
  )
}
