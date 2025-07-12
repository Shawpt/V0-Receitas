"use client"

import { useState, useEffect } from "react"
import { X, Gift } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false)
  const [hasShown, setHasShown] = useState(false)

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setIsVisible(true)
        setHasShown(true)
      }
    }

    document.addEventListener("mouseleave", handleMouseLeave)
    return () => document.removeEventListener("mouseleave", handleMouseLeave)
  }, [hasShown])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full relative animate-in zoom-in duration-300">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="text-center">
          <Gift className="w-16 h-16 text-secondary mx-auto mb-4" />

          <h3 className="text-2xl font-bold text-gray-900 mb-4">Espere! Oferta Especial para Você</h3>

          <p className="text-gray-600 mb-6">
            Que tal levar 3 receitas gratuitas antes de sair? É nosso presente para você conhecer a qualidade do nosso
            trabalho!
          </p>

          <div className="space-y-3">
            <Button
              className="w-full bg-gradient-to-r from-secondary to-accent text-white font-bold py-3 rounded-full"
              onClick={() => setIsVisible(false)}
            >
              SIM, QUERO AS RECEITAS GRÁTIS
            </Button>

            <button onClick={() => setIsVisible(false)} className="w-full text-gray-500 text-sm hover:text-gray-700">
              Não, obrigado
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
