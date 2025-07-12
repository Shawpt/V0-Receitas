import { Gift, Star, BookOpen, Zap, Crown } from "lucide-react"
import Image from "next/image"

const bonuses = [
  {
    icon: Gift,
    title: "200 Sobremesas Zero Açúcar",
    description: "Receitas deliciosas para matar a vontade de doce sem sair da dieta",
    value: "R$ 29,00",
    image: "/placeholder.svg?height=200&width=300&text=Sobremesas+Zero",
  },
  {
    icon: Zap,
    title: "Smoothies Proteicos para Todos os Momentos",
    description: "25 receitas de smoothies para pré e pós-treino, café da manhã e lanches",
    value: "R$ 15,00",
    image: "/placeholder.svg?height=200&width=300&text=Smoothies",
  },
  {
    icon: Star,
    title: "10 Sucos Detox Poderosos",
    description: "Receitas exclusivas para acelerar o metabolismo e eliminar toxinas",
    value: "R$ 29,00",
    image: "/placeholder.svg?height=200&width=300&text=Sucos+Detox",
  },
  {
    icon: BookOpen,
    title: "Como Fazer Whey Protein Caseiro",
    description: "Guia completo para fazer seu próprio suplemento proteico em casa",
    value: "R$ 59,00",
    image: "/placeholder.svg?height=200&width=300&text=Whey+Caseiro",
  },
  {
    icon: Crown,
    title: "BÔNUS SURPRESA: Acesso ao Grupo VIP",
    description: "Grupo exclusivo no Telegram com dicas diárias, receitas extras e suporte",
    value: "R$ 47,00",
    image: "/placeholder.svg?height=200&width=300&text=Grupo+VIP",
    highlight: true,
  },
]

export default function BonusSection() {
  const totalValue = bonuses.reduce((sum, bonus) => {
    return sum + Number.parseInt(bonus.value.replace("R$ ", "").replace(",00", ""))
  }, 0)

  return (
    <section className="py-20 bg-gradient-to-br from-secondary/10 to-accent/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Bônus <span className="text-secondary">Exclusivos</span> para Quem Age Hoje
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Além das 100 receitas proteicas, você também receberá estes materiais complementares que vão turbinar ainda
            mais seus resultados.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {bonuses.map((bonus, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${
                bonus.highlight ? "ring-2 ring-secondary" : ""
              }`}
            >
              {bonus.highlight && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-secondary to-accent text-white text-center py-2 text-sm font-bold">
                  🎁 BÔNUS ESPECIAL
                </div>
              )}

              <div className={`p-6 ${bonus.highlight ? "pt-12" : ""}`}>
                <div className="relative mb-6">
                  <Image
                    src={bonus.image || "/placeholder.svg"}
                    alt={bonus.title}
                    width={300}
                    height={200}
                    className="w-full h-40 object-cover rounded-lg"
                  />

                  {/* Value Badge */}
                  <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    Valor: {bonus.value}
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div
                    className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${
                      bonus.highlight ? "bg-secondary/20" : "bg-primary/10"
                    }`}
                  >
                    <bonus.icon className={`w-6 h-6 ${bonus.highlight ? "text-secondary" : "text-primary"}`} />
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{bonus.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{bonus.description}</p>
                  </div>
                </div>

                {bonus.highlight && (
                  <div className="mt-6 p-4 bg-gradient-to-r from-secondary/10 to-accent/10 rounded-lg">
                    <p className="text-sm font-semibold text-gray-800">
                      ⚡ Acesso vitalício ao grupo mais engajado do Brasil sobre alimentação proteica!
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Value Comparison */}
        <div className="bg-white p-8 rounded-2xl shadow-lg max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Veja o Valor Real do que Você Está Recebendo</h3>
            <p className="text-gray-600">Se você fosse comprar cada item separadamente, pagaria:</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-gray-100">
                <span className="text-gray-700">100 Receitas Proteicas</span>
                <span className="font-semibold text-gray-900">R$ 97,00</span>
              </div>
              {bonuses.map((bonus, index) => (
                <div key={index} className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-700">{bonus.title}</span>
                  <span className="font-semibold text-gray-900">{bonus.value}</span>
                </div>
              ))}
              <div className="flex justify-between items-center py-4 border-t-2 border-gray-300 text-lg font-bold">
                <span className="text-gray-900">VALOR TOTAL:</span>
                <span className="text-red-500 line-through">R$ {totalValue + 97},00</span>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center bg-gradient-to-br from-primary/10 to-secondary/10 p-8 rounded-2xl">
              <div className="text-center">
                <p className="text-lg text-gray-700 mb-2">Você paga apenas:</p>
                <div className="text-5xl font-bold text-primary mb-2">R$ 29,90</div>
                <p className="text-lg text-gray-600 mb-4">à vista</p>

                <div className="bg-red-500 text-white px-4 py-2 rounded-full text-lg font-bold mb-4">
                  Economia de R$ {totalValue + 97 - 29},00
                </div>

                <p className="text-sm text-gray-600">
                  Isso representa mais de <span className="font-bold text-red-500">85% de desconto</span> no valor
                  total!
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-8 p-6 bg-yellow-50 rounded-xl border border-yellow-200">
            <h4 className="text-xl font-bold text-gray-900 mb-2">🚨 Atenção: Esta oferta é por tempo limitado!</h4>
            <p className="text-gray-700">
              Os bônus exclusivos só estão disponíveis para as primeiras 500 pessoas. Não perca esta oportunidade única
              de transformar sua alimentação pagando menos que um lanche.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
