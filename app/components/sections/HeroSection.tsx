"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star, Shield, Users, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const heroImages = [
  "/placeholder.svg?height=400&width=600&text=Receita+Proteica+1",
  "/placeholder.svg?height=400&width=600&text=Receita+Proteica+2",
  "/placeholder.svg?height=400&width=600&text=Receita+Proteica+3",
  "/placeholder.svg?height=400&width=600&text=Receita+Proteica+4",
  "/placeholder.svg?height=400&width=600&text=Receita+Proteica+5",
]

export default function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % heroImages.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + heroImages.length) % heroImages.length)
  }

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-primary/5 via-white to-secondary/5 pt-20">
      <div className="container mx-auto px-4 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Transforme Sua Alimentação com <span className="text-primary">100 Receitas Proteicas</span> que
                Realmente Funcionam
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                Criadas por nutricionista especializada • Ingredientes simples • Prontas em até 30 minutos • Sabor
                garantido
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <Users className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">+10.000 pessoas transformadas</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <Shield className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Garantia de 7 dias</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <Star className="w-5 h-5 text-yellow-500" />
                <span className="text-sm font-medium">Criado por nutricionista</span>
              </div>
            </div>

            {/* CTA */}
            <div className="space-y-4">
              <Button
                size="lg"
                className="w-full md:w-auto bg-gradient-to-r from-secondary to-accent hover:from-secondary/90 hover:to-accent/90 text-white font-bold py-4 px-8 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                QUERO TRANSFORMAR MINHA ALIMENTAÇÃO
              </Button>

              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Clock className="w-4 h-4" />
                <span>Acesso imediato após a compra</span>
              </div>
            </div>
          </div>

          {/* Image Carousel */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={heroImages[currentImage] || "/placeholder.svg"}
                alt="Receitas Proteicas"
                fill
                className="object-cover transition-opacity duration-500"
              />

              {/* Navigation */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-4">
              {heroImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentImage ? "bg-primary" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
