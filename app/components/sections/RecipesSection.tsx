"use client"

import { useState } from "react"
import { Clock, Star, ChefHat } from "lucide-react"
import Image from "next/image"

const recipes = [
  {
    id: 1,
    name: "Panqueca Proteica de Banana",
    image: "/placeholder.svg?height=300&width=400&text=Panqueca+Proteica",
    time: "15 min",
    protein: "28g",
    difficulty: "Fácil",
    ingredients: ["Banana", "Ovos", "Aveia", "Whey Protein"],
    description: "Deliciosa panqueca rica em proteínas, perfeita para o café da manhã ou lanche pós-treino.",
  },
  {
    id: 2,
    name: "Frango Desfiado Temperado",
    image: "/placeholder.svg?height=300&width=400&text=Frango+Desfiado",
    time: "25 min",
    protein: "35g",
    difficulty: "Médio",
    ingredients: ["Peito de Frango", "Temperos", "Cebola", "Alho"],
    description: "Frango suculento e saboroso que pode ser usado em diversas preparações.",
  },
  {
    id: 3,
    name: "Smoothie Verde Proteico",
    image: "/placeholder.svg?height=300&width=400&text=Smoothie+Verde",
    time: "5 min",
    protein: "22g",
    difficulty: "Fácil",
    ingredients: ["Espinafre", "Banana", "Whey", "Leite de Amêndoas"],
    description: "Bebida refrescante e nutritiva, ideal para quem quer praticidade e sabor.",
  },
  {
    id: 4,
    name: "Omelete de Claras Recheada",
    image: "/placeholder.svg?height=300&width=400&text=Omelete+Claras",
    time: "12 min",
    protein: "24g",
    difficulty: "Fácil",
    ingredients: ["Claras", "Queijo Cottage", "Tomate", "Manjericão"],
    description: "Omelete leve e proteica com recheio cremoso e saboroso.",
  },
  {
    id: 5,
    name: "Salmão Grelhado com Ervas",
    image: "/placeholder.svg?height=300&width=400&text=Salmão+Grelhado",
    time: "20 min",
    protein: "32g",
    difficulty: "Médio",
    ingredients: ["Salmão", "Ervas Finas", "Limão", "Azeite"],
    description: "Peixe rico em ômega-3 e proteínas, preparado de forma simples e elegante.",
  },
  {
    id: 6,
    name: "Iogurte Proteico com Frutas",
    image: "/placeholder.svg?height=300&width=400&text=Iogurte+Proteico",
    time: "3 min",
    protein: "20g",
    difficulty: "Fácil",
    ingredients: ["Iogurte Grego", "Frutas Vermelhas", "Granola", "Mel"],
    description: "Sobremesa saudável e proteica, perfeita para qualquer hora do dia.",
  },
]

export default function RecipesSection() {
  const [hoveredRecipe, setHoveredRecipe] = useState<number | null>(null)

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Veja Algumas das <span className="text-primary">Delícias</span> que Você Vai Aprender
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estas são apenas algumas das 100 receitas incríveis que estão esperando por você. Cada uma foi
            cuidadosamente desenvolvida para maximizar o sabor e a praticidade.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recipes.map((recipe) => (
            <div
              key={recipe.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer"
              onMouseEnter={() => setHoveredRecipe(recipe.id)}
              onMouseLeave={() => setHoveredRecipe(null)}
            >
              <div className="relative overflow-hidden">
                <Image
                  src={recipe.image || "/placeholder.svg"}
                  alt={recipe.name}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />

                {/* Overlay with details */}
                <div
                  className={`absolute inset-0 bg-black/70 flex items-center justify-center transition-opacity duration-300 ${
                    hoveredRecipe === recipe.id ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <div className="text-white text-center p-4">
                    <h4 className="text-lg font-bold mb-2">Ingredientes:</h4>
                    <ul className="text-sm space-y-1">
                      {recipe.ingredients.map((ingredient, index) => (
                        <li key={index}>• {ingredient}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Difficulty Badge */}
                <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full text-sm font-medium">
                  {recipe.difficulty}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{recipe.name}</h3>

                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{recipe.description}</p>

                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-1 text-gray-500">
                    <Clock className="w-4 h-4" />
                    <span>{recipe.time}</span>
                  </div>

                  <div className="flex items-center gap-1 text-primary font-semibold">
                    <ChefHat className="w-4 h-4" />
                    <span>{recipe.protein} proteína</span>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="text-xs text-gray-500">Avaliação 5.0</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">E isso é só o começo! 🎉</h3>
            <p className="text-lg text-gray-700 mb-6">
              Você terá acesso a mais 94 receitas igualmente deliciosas e nutritivas, organizadas por categorias para
              facilitar sua escolha.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-primary">25</div>
                <div className="text-sm text-gray-600">Café da Manhã</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">30</div>
                <div className="text-sm text-gray-600">Almoço/Jantar</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">25</div>
                <div className="text-sm text-gray-600">Lanches</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">20</div>
                <div className="text-sm text-gray-600">Sobremesas</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
