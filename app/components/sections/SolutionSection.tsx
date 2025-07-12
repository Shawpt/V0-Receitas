import { Check, Star, Clock, Users, Award, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import ProteinCalculator from "../ProteinCalculator"

const benefits = [
  {
    icon: Star,
    title: "100 Receitas Únicas",
    description: "Variedade para nunca mais comer a mesma coisa",
  },
  {
    icon: Clock,
    title: "Preparo Rápido",
    description: "Todas prontas em até 30 minutos",
  },
  {
    icon: Users,
    title: "Ingredientes Simples",
    description: "Encontre tudo no supermercado da esquina",
  },
  {
    icon: Award,
    title: "Criado por Nutricionista",
    description: "Respaldo científico e nutricional",
  },
  {
    icon: Zap,
    title: "Alto Teor Proteico",
    description: "Cada receita com 20g+ de proteína",
  },
  {
    icon: Check,
    title: "Testado e Aprovado",
    description: "Mais de 10.000 pessoas transformadas",
  },
]

const previewPages = [
  "/placeholder.svg?height=400&width=300&text=Página+1",
  "/placeholder.svg?height=400&width=300&text=Página+2",
  "/placeholder.svg?height=400&width=300&text=Página+3",
  "/placeholder.svg?height=400&width=300&text=Página+4",
]

export default function SolutionSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            A <span className="text-primary">Solução</span> Que Você Estava Procurando
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Apresentamos o guia mais completo de receitas proteicas do Brasil, criado especialmente para quem busca
            praticidade, sabor e resultados reais.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Product Showcase */}
          <div className="relative">
            <div className="relative z-10">
              <Image
                src="/placeholder.svg?height=600&width=400&text=E-book+3D+Mockup"
                alt="100 Receitas Proteicas E-book"
                width={400}
                height={600}
                className="mx-auto drop-shadow-2xl"
              />
            </div>

            {/* Floating Elements */}
            <div className="absolute top-10 -left-10 bg-primary text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
              100 Receitas
            </div>
            <div className="absolute bottom-20 -right-10 bg-secondary text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
              Ingredientes Simples
            </div>
            <div className="absolute top-1/2 -right-16 bg-accent text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
              30 min máx
            </div>
          </div>

          {/* Benefits */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Por que este é o guia definitivo?</h3>
              <div className="grid gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <benefit.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h4>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-primary/5 p-6 rounded-2xl">
              <h4 className="text-xl font-bold text-gray-900 mb-3">🏆 Diferencial Único</h4>
              <p className="text-gray-700">
                Único e-book de receitas proteicas criado por nutricionista especializada, com foco em ingredientes
                acessíveis e preparo rápido. Não é apenas um livro de receitas, é um sistema completo de transformação
                alimentar.
              </p>
            </div>

            <Button
              size="lg"
              className="w-full bg-gradient-to-r from-secondary to-accent hover:from-secondary/90 hover:to-accent/90 text-white font-bold py-4 px-8 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              QUERO COMEÇAR MINHA TRANSFORMAÇÃO
            </Button>
          </div>
        </div>

        {/* Protein Calculator Widget */}
        <div className="mb-16">
          <ProteinCalculator />
        </div>

        {/* Preview Section */}
        <div className="bg-gray-50 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Veja um Preview do Conteúdo</h3>
            <p className="text-lg text-gray-600">Dê uma espiada no que você vai encontrar dentro do e-book</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {previewPages.map((page, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <Image
                    src={page || "/placeholder.svg"}
                    alt={`Preview página ${index + 1}`}
                    width={300}
                    height={400}
                    className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
                </div>
                <p className="text-center mt-3 text-sm font-medium text-gray-600">Página {index + 1}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
