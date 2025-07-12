"use client"

import { useState, useEffect } from "react"
import { Users, Zap, AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function UrgencySection() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 45,
    seconds: 30,
  })

  const [spotsLeft, setSpotsLeft] = useState(47)

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const spotsTimer = setInterval(() => {
      if (Math.random() > 0.7 && spotsLeft > 10) {
        setSpotsLeft((prev) => prev - 1)
      }
    }, 30000)

    return () => clearInterval(spotsTimer)
  }, [spotsLeft])

  return (
    <section className="py-20 bg-gradient-to-r from-red-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Main Alert */}
          <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white p-8 rounded-2xl shadow-2xl mb-12">
            <div className="text-center">
              <AlertTriangle className="w-16 h-16 mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">⚠️ OFERTA POR TEMPO LIMITADO ⚠️</h2>
              <p className="text-xl mb-6">Esta promoção especial expira em:</p>

              {/* Countdown Timer */}
              <div className="flex justify-center gap-4 mb-6">
                <div className="bg-white/20 backdrop-blur-sm p-4 rounded-lg text-center min-w-[80px]">
                  <div className="text-3xl font-bold">{timeLeft.hours.toString().padStart(2, "0")}</div>
                  <div className="text-sm opacity-90">Horas</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm p-4 rounded-lg text-center min-w-[80px]">
                  <div className="text-3xl font-bold">{timeLeft.minutes.toString().padStart(2, "0")}</div>
                  <div className="text-sm opacity-90">Minutos</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm p-4 rounded-lg text-center min-w-[80px]">
                  <div className="text-3xl font-bold">{timeLeft.seconds.toString().padStart(2, "0")}</div>
                  <div className="text-sm opacity-90">Segundos</div>
                </div>
              </div>

              <p className="text-lg">
                Após este prazo, o preço volta para <span className="font-bold line-through">R$ 179,00</span>
              </p>
            </div>
          </div>

          {/* Scarcity Indicators */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-orange-500">
              <div className="flex items-center gap-4 mb-4">
                <Users className="w-8 h-8 text-orange-500" />
                <h3 className="text-2xl font-bold text-gray-900">Vagas Limitadas</h3>
              </div>
              <p className="text-gray-600 mb-4">Para garantir o melhor suporte, limitamos esta oferta especial.</p>
              <div className="bg-orange-100 p-4 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-600">Vagas restantes:</span>
                  <span className="text-lg font-bold text-orange-600">{spotsLeft}/500</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-orange-500 to-red-500 h-3 rounded-full transition-all duration-500"
                    style={{ width: `${(spotsLeft / 500) * 100}%` }}
                  />
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-red-500">
              <div className="flex items-center gap-4 mb-4">
                <Zap className="w-8 h-8 text-red-500" />
                <h3 className="text-2xl font-bold text-gray-900">Ação Rápida Necessária</h3>
              </div>
              <p className="text-gray-600 mb-4">Milhares de pessoas estão vendo esta página agora mesmo.</p>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-gray-600">127 pessoas visualizando agora</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
                  <span className="text-gray-600">43 pessoas no checkout</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                  <span className="text-gray-600">Última compra há 2 minutos</span>
                </div>
              </div>
            </div>
          </div>

          {/* Price Comparison */}
          <div className="bg-white p-8 rounded-2xl shadow-lg mb-12">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Compare os Preços</h3>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 border-2 border-gray-200 rounded-xl">
                <h4 className="text-lg font-bold text-gray-900 mb-2">Preço Normal</h4>
                <div className="text-3xl font-bold text-gray-400 line-through mb-2">R$ 179,00</div>
                <p className="text-sm text-gray-600">Valor individual dos itens</p>
              </div>

              <div className="text-center p-6 border-2 border-orange-500 rounded-xl bg-orange-50 relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                  HOJE APENAS
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2 mt-2">Oferta Especial</h4>
                <div className="text-4xl font-bold text-orange-600 mb-2">R$ 29,90</div>
                <p className="text-sm text-gray-600">Ou 5x de R$ 6,63</p>
              </div>

              <div className="text-center p-6 border-2 border-gray-200 rounded-xl">
                <h4 className="text-lg font-bold text-gray-900 mb-2">Sua Economia</h4>
                <div className="text-3xl font-bold text-green-600 mb-2">R$ 149,10</div>
                <p className="text-sm text-gray-600">Mais de 83% de desconto</p>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center">
            <Button
              size="lg"
              className="w-full md:w-auto bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-6 px-12 text-xl rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 animate-pulse"
            >
              GARANTIR MINHA VAGA COM DESCONTO AGORA
            </Button>

            <p className="text-sm text-gray-600 mt-4">
              ⚡ Acesso imediato • 🔒 Pagamento 100% seguro • 🎁 Todos os bônus inclusos
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
