export default function About() {
  return (
    <section className="mb-16">
      <h2 className="text-lg font-mono font-bold text-white mb-6 flex items-center">
        About me
        <div className="ml-2 w-2 h-2 bg-gray-500 animate-pulse pixel-dot"></div>
      </h2>

      <div className="text-gray-300 text-sm leading-relaxed mb-8">
        <p className="mb-3">
          The journey began with the usual chase for accuracy for linear regression models, to questioning outputs. I draft fast prototypes, pull apart edge cases, 
          and refine systems. I like to dive into complexities of the working of systems.
          Also love building reliable AI products. Currently leveraging LLM's to be integrated in business workflows.
          Searching for SOTA techniques by day, resorting to
          first principles thinking by night.
        </p>
      </div>

      <div>
        <h3 className="text-base font-mono font-semibold text-white mb-4 flex items-center">
          Things I love
          <div className="ml-2 flex space-x-1">
            <div className="pixel-dot bg-gray-400"></div>
            <div className="pixel-dot bg-gray-400"></div>
            <div className="pixel-dot bg-gray-400"></div>
          </div>
        </h3>
        <div className="space-y-2 text-sm text-gray-300">
          <p>Admiring the daily evolvements in the space</p>
          <p>3 S's - Scalable • Secure • Slightly overengineered</p>
          <p>3 C's - Compute • Compute • Compute</p>
        </div>
      </div>
    </section>
  )
}
