"use client"

import { useState, useEffect } from "react"

export default function TerminalOutput() {
  const [text, setText] = useState("")
  const fullText =
    "Runtime error: The size of tensor a (10, 50, 768) must match the size of tensor b (1, 100, 768) at non-singleton dimension 1"

  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.slice(0, i + 1))
        i++
      } else {
        clearInterval(timer)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [])

  return (
    <div
      className="bg-gray-900 border border-green-600 p-3 font-mono text-xs retro-glow"
      style={{ clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))" }}
    >
      <div className="flex items-center mb-2">
        <div className="flex space-x-1">
          <div className="pixel-dot bg-red-500"></div>
          <div className="pixel-dot bg-yellow-500"></div>
          <div className="pixel-dot bg-green-500"></div>
        </div>
        <div className="ml-auto flex space-x-1">
          <div className="pixel-dot bg-gray-600"></div>
          <div className="pixel-dot bg-gray-600"></div>
        </div>
      </div>
      <div className="text-red-400 text-xs">
        {text}
        <span className="animate-pulse">|</span>
      </div>
    </div>
  )
}
