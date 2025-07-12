"use client"

import { useState } from "react"
import { Star, Play, Quote } from "lucide-react"
import Image from "next/image"

const videoTestimonials = [
  {
    id: 1,
    name: "Marina Silva",
    profession: "Personal Trainer",
    thumbnail: "/placeholder.svg?height=200&width=300&text=Marina+Silva",
    duration: "45s",
    preview: "Perdi 8kg em 3 meses seguindo as receitas...",
  },
  {
    id: 2,
    name: "Carlos Mendes",
    profession: "Empresário",
    thumbnail: "/placeholder.svg?height=200&width=300&text=Carlos+Mendes",
    duration: "52s",
    preview: "Finalmente consegui ganhar massa muscular...",
  },
  {
    id: 3,
    name: "Ana Paula",
    profession: "Mãe e Nutricionista",
    thumbnail: "/placeholder.svg?height=200&width=300&text=Ana+Paula",
    duration: "38s",
    preview: "Como profissional, recomendo este material...",
  },
]

const writtenTestimonials = [
  {
    name: "Roberto Oliveira",
    profession: "Atleta Amador",
    photo: "/placeholder.svg?height=80&width=80&text=Roberto",
    rating: 5,
    text: "Incrível como receitas tão simples podem ser tão saborosas! Ganhei 5kg de massa magra em 4 meses seguindo o guia. As receitas de smoothie são minhas favoritas para o pós-treino.",
    result: "Ganhou 5kg de massa magra",
  },
  {
    name: "Juliana Costa",
    profession: "Executiva",
    photo: "/placeholder.svg?height=80&width=80&text=Juliana",
    rating: 5,
    text: "Trabalho 12h por dia e sempre foi difícil manter uma alimentação saudável. Com essas receitas rápidas, consegui transformar minha rotina alimentar completamente. Recomendo demais!",
    result: "Melhorou disposição e energia",
  },
  {
    name: "Pedro Santos",
    profession: "Estudante de Medicina",
    photo: "/placeholder.svg?height=80&width=80&text=Pedro",
    rating: 5,
    text: "Como estudante, preciso de praticidade e economia. Este e-book me salvou! Receitas baratas, rápidas e que realmente funcionam. Minha performance nos estudos melhorou muito.",
    result: "Economizou 40% na alimentação",
  },
  {
    name: "Fernanda Lima",
    profession: "Mãe de 2 filhos",
    photo: "/placeholder.svg?height=80&width=80&text=Fernanda",
    rating: 5,
    text: "Conseguir alimentar bem toda a família com receitas que as crianças também gostam era meu maior desafio. Agora todos comem proteína sem reclamar! Obrigada, Talia!",
    result: "Família toda mais saudável",
  },
]

const transformations = [
  {
    name: "Lucas Ferreira",
    before: "/placeholder.svg?height=200&width=150&text=Antes",
    after: "/placeholder.svg?height=200&width=150&text=Depois",
    result: "Perdeu 15kg em 6 meses",
    description: "Seguindo as receitas e mantendo consistência",
  },
  {
    name: "Camila Rodrigues",
    before: "/placeholder.svg?height=200&width=150&text=Antes",
    after: "/placeholder.svg?height=200&width=150&text=Depois",
    result: "Ganhou 8kg de massa magra",
    description: "Combinando as receitas com treino de força",
  },
]

export default function TestimonialsSection() {
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null)

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Histórias <span className="text-primary">Reais</span> de Quem Transformou a Alimentação
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mais de 10.000 pessoas já transformaram suas vidas com nossas receitas. Veja alguns depoimentos reais de
            quem decidiu investir em sua saúde.
          </p>
        </div>

        {/* Video Testimonials */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">Depoimentos em Vídeo</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {videoTestimonials.map((video) => (
              <div key={video.id} className="relative group cursor-pointer" onClick={() => setSelectedVideo(video.id)}>
                <div className="relative overflow-hidden rounded-2xl shadow-lg">
                  <Image
                    src={video.thumbnail || "/placeholder.svg"}
                    alt={video.name}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />

                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-all">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 text-primary ml-1" />
                    </div>
                  </div>

                  {/* Duration */}
                  <div className="absolute bottom-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm">
                    {video.duration}
                  </div>
                </div>

                <div className="mt-4">
                  <h4 className="text-lg font-bold text-gray-900">{video.name}</h4>
                  <p className="text-sm text-gray-600 mb-2">{video.profession}</p>
                  <p className="text-sm text-gray-700 italic">"{video.preview}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Before/After Transformations */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">Transformações Reais</h3>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {transformations.map((transformation, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex justify-center gap-8 mb-6">
                  <div className="text-center">
                    <Image
                      src={transformation.before || "/placeholder.svg"}
                      alt="Antes"
                      width={150}
                      height={200}
                      className="rounded-lg shadow-md"
                    />
                    <p className="text-sm font-medium text-gray-600 mt-2">Antes</p>
                  </div>
                  <div className="text-center">
                    <Image
                      src={transformation.after || "/placeholder.svg"}
                      alt="Depois"
                      width={150}
                      height={200}
                      className="rounded-lg shadow-md"
                    />
                    <p className="text-sm font-medium text-gray-600 mt-2">Depois</p>
                  </div>
                </div>

                <div className="text-center">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{transformation.name}</h4>
                  <p className="text-lg font-semibold text-primary mb-2">{transformation.result}</p>
                  <p className="text-gray-600">{transformation.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Written Testimonials */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">O que nossos clientes dizem</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {writtenTestimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg relative">
                <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20" />

                <div className="flex items-start gap-4 mb-6">
                  <Image
                    src={testimonial.photo || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={80}
                    height={80}
                    className="rounded-full"
                  />
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600 mb-2">{testimonial.profession}</p>
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed mb-4">"{testimonial.text}"</p>

                <div className="bg-primary/10 p-3 rounded-lg">
                  <p className="text-sm font-semibold text-primary">Resultado: {testimonial.result}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="bg-gradient-to-r from-primary to-secondary p-8 rounded-2xl text-white text-center">
          <h3 className="text-2xl font-bold mb-8">Números que Comprovam Nossa Eficácia</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold mb-2">10.000+</div>
              <div className="text-sm opacity-90">Pessoas Transformadas</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">98%</div>
              <div className="text-sm opacity-90">Taxa de Satisfação</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">4.9/5</div>
              <div className="text-sm opacity-90">Avaliação Média</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">2.847</div>
              <div className="text-sm opacity-90">Avaliações Positivas</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
