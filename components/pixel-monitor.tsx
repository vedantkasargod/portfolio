"use client"

import { useState, useEffect } from "react"

export default function PixelMonitor() {
  const [displayText, setDisplayText] = useState("01")

  useEffect(() => {
    const texts = ["01", "AI", "02", "Computer Vision", "03", "ML", ">>", "OK"]
    let index = 0

    const interval = setInterval(() => {
      index = (index + 1) % texts.length
      setDisplayText(texts[index])
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="pixel-monitor w-16 h-12 p-1">
      <div className="pixel-screen w-full h-full flex items-center justify-center">
        <span className="text-green-400 text-xs font-mono font-bold">{displayText}</span>
      </div>
    </div>
  )
}
