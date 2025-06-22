import TerminalOutput from "./terminal-output"
import PixelMonitor from "./pixel-monitor"

export default function Hero() {
  return (
    <section className="mb-16">
      <div className="mb-6">
        <div className="flex items-center mb-1">
          <h1 className="text-2xl font-mono font-bold text-white mr-4">Vedant Kasargod</h1>
          <PixelMonitor />
        </div>
        <p className="text-gray-400 mb-3 text-sm">Data Science | AI/ML</p>
        <p className="text-base text-gray-300 mb-6 font-mono">Wandering with my beloved laptop</p>
      </div>

      <div className="space-y-2 mb-6 text-sm text-gray-300">
        <p>Dev by trade, chasing the "why" behind AI.</p>
        <p>LLMs are cool. Making them do more with less? Cooler.</p>
        <p>Routine: Starts with chai, ends with</p>
      </div>

      <TerminalOutput />
    </section>
  )
}
