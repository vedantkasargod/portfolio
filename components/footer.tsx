export default function Footer() {
  return (
    <footer className="bg-gray-900/50 border-t border-green-600 py-8 retro-glow">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-center justify-between">
          <div className="text-xs text-green-600 flex items-center">
            <span className="font-mono">プロセスを信頼する</span>
            <div className="ml-2 pixel-dot bg-green-500"></div>
          </div>
          <div className="flex items-center space-x-4 text-xs text-green-500">
            <span>sleeping</span>
            <div className="pixel-dot bg-green-400"></div>
            <span>building</span>
            <div className="pixel-dot bg-green-400"></div>
            <span>quantizing</span>
          </div>
          <div className="text-xs text-green-600 font-mono flex items-center">
            mumbai, in
            <div className="ml-2 pixel-dot bg-green-400"></div>
          </div>
        </div>

        <div className="mt-4 text-center">
          <div className="inline-flex items-center space-x-2 text-xs text-green-500">
            <div className="w-2 h-2 bg-green-400 animate-pulse pixel-dot"></div>
            <span>available for cool builds</span>
            <div className="flex space-x-1 ml-2">
              <div className="pixel-dot bg-green-400 opacity-60"></div>
              <div className="pixel-dot bg-green-500 opacity-60"></div>
              <div className="pixel-dot bg-green-600 opacity-60"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
