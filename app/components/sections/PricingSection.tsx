"use client"

import { Check, CreditCard, Smartphone, Star, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

const packageItems = [
  "100 Receitas Proteicas Exclusivas",
  "200 Sobremesas Zero Açúcar",
  "25 Smoothies Proteicos",
  "10 Sucos Detox Poderosos",
  "Guia Whey Protein Caseiro",
  "Acesso ao Grupo VIP no Telegram",
  "Suporte por e-mail",
  "Atualizações gratuitas",
  "Garantia de 7 dias",
]

const paymentMethods = [
  {
    icon: CreditCard,
    title: "Cartão de Crédito",
    description: "Até 5x sem juros",
    highlight: false,
  },
  {
    icon: Smartphone,
    title: "PIX",
    description: "5% de desconto extra",
    highlight: true,
  },
]

export default function PricingSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Invista na Sua <span className="text-primary">Transformação</span> Hoje
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Por menos que o preço de um lanche no shopping, você terá acesso a um sistema completo de alimentação
            proteica que vai transformar sua vida.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Pricing Card */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-12">
            <div className="bg-gradient-to-r from-primary to-secondary text-white p-8 text-center">
              <h3 className="text-2xl font-bold mb-2">Pacote Completo</h3>
              <p className="text-lg opacity-90">Tudo que você precisa para transformar sua alimentação</p>
            </div>

            <div className="p-8 md:p-12">
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Package Contents */}
                <div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-6">O que está incluído:</h4>

                  <div className="space-y-4">
                    {packageItems.map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-yellow-50 p-6 rounded-2xl mt-8">
                    <div className="flex items-center gap-3 mb-3">
                      <Star className="w-6 h-6 text-yellow-500" />
                      <h5 className="text-lg font-bold text-gray-900">Valor Especial</h5>
                    </div>
                    <p className="text-gray-700">
                      Este pacote completo custaria <span className="font-bold">R$ 276,00</span> se comprado
                      separadamente. Hoje você leva tudo por apenas{" "}
                      <span className="font-bold text-primary">R$ 29,90</span>!
                    </p>
                  </div>
                </div>

                {/* Pricing */}
                <div className="text-center">
                  <div className="mb-8">
                    <div className="text-lg text-gray-600 mb-2">De R$ 276,00 por:</div>
                    <div className="text-6xl font-bold text-primary mb-2">R$ 29,90</div>
                    <div className="text-lg text-gray-600">à vista no PIX</div>
                    <div className="text-sm text-gray-500 mt-2">ou 5x de R$ 6,63 no cartão</div>
                  </div>

                  {/* Payment Methods */}
                  <div className="space-y-4 mb-8">
                    {paymentMethods.map((method, index) => (
                      <div
                        key={index}
                        className={`p-4 rounded-xl border-2 ${
                          method.highlight ? "border-green-500 bg-green-50" : "border-gray-200 bg-gray-50"
                        }`}
                      >
                        <div className="flex items-center justify-center gap-3">
                          <method.icon className={`w-5 h-5 ${method.highlight ? "text-green-600" : "text-gray-600"}`} />
                          <div>
                            <div className={`font-semibold ${method.highlight ? "text-green-800" : "text-gray-800"}`}>
                              {method.title}
                            </div>
                            <div className={`text-sm ${method.highlight ? "text-green-600" : "text-gray-600"}`}>
                              {method.description}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* CTA Buttons */}
                  <div className="space-y-4">
                    <Button
                      size="lg"
                      className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 px-8 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      PAGAR COM PIX (5% DESCONTO)
                    </Button>

                    <Button
                      size="lg"
                      variant="outline"
                      className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold py-4 px-8 text-lg rounded-full transition-all duration-300 bg-transparent"
                    >
                      PARCELAR NO CARTÃO (5x R$ 6,63)
                    </Button>
                  </div>

                  <div className="flex items-center justify-center gap-2 mt-6 text-sm text-gray-500">
                    <Zap className="w-4 h-4" />
                    <span>Acesso imediato após confirmação do pagamento</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Value Comparison */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Compare o Investimento</h3>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-red-50 rounded-xl">
                <h4 className="text-lg font-bold text-gray-900 mb-4">Consultoria Nutricional</h4>
                <div className="text-2xl font-bold text-red-600 mb-2">R$ 200+</div>
                <p className="text-sm text-gray-600">Por consulta individual</p>
              </div>

              <div className="text-center p-6 bg-orange-50 rounded-xl">
                <h4 className="text-lg font-bold text-gray-900 mb-4">Curso de Culinária</h4>
                <div className="text-2xl font-bold text-orange-600 mb-2">R$ 500+</div>
                <p className="text-sm text-gray-600">Curso presencial básico</p>
              </div>

              <div className="text-center p-6 bg-green-50 rounded-xl border-2 border-green-500">
                <h4 className="text-lg font-bold text-gray-900 mb-4">Nosso Pacote Completo</h4>
                <div className="text-3xl font-bold text-green-600 mb-2">R$ 29,90</div>
                <p className="text-sm text-gray-600">Solução completa e prática</p>
              </div>
            </div>

            <div className="text-center mt-8 p-6 bg-blue-50 rounded-xl">
              <h4 className="text-xl font-bold text-gray-900 mb-3">💡 Pense nisso...</h4>
              <p className="text-gray-700 leading-relaxed">
                R$ 29,90 é menos que você gasta em um lanche no shopping, mas pode transformar completamente sua relação
                com a alimentação e seus resultados de saúde. É o melhor investimento que você pode fazer em si mesmo
                hoje.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
