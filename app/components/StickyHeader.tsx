"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export default function StickyHeader() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-lg z-50 py-3">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h1 className="text-xl font-bold text-gray-900">100 Receitas Proteicas</h1>
            <div className="hidden md:flex items-center gap-2 text-sm text-gray-600">
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full">Oferta Limitada</span>
              <span>R$ 29,90</span>
            </div>
          </div>

          <Button
            size="sm"
            className="bg-gradient-to-r from-secondary to-accent hover:from-secondary/90 hover:to-accent/90 text-white font-bold rounded-full"
          >
            GARANTIR AGORA
          </Button>
        </div>
      </div>
    </div>
  )
}
