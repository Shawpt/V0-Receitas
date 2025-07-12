"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react"

const faqs = [
  {
    question: "Como recebo o produto após a compra?",
    answer:
      "Após a confirmação do pagamento, você receberá um e-mail com o link para download do material completo. O acesso é imediato para pagamentos via PIX e em até 2 horas para cartão de crédito.",
  },
  {
    question: "As receitas funcionam para vegetarianos/veganos?",
    answer:
      "Sim! O e-book inclui uma seção especial com 25 receitas vegetarianas e veganas ricas em proteínas, utilizando ingredientes como leguminosas, quinoa, tofu, e proteínas vegetais.",
  },
  {
    question: "Preciso de equipamentos especiais para fazer as receitas?",
    answer:
      "Não! Todas as receitas foram desenvolvidas para serem feitas com utensílios básicos que você já tem em casa: fogão, forno, liquidificador e panelas comuns.",
  },
  {
    question: "Por quanto tempo tenho acesso ao material?",
    answer:
      "O acesso é vitalício! Você pode baixar o material quantas vezes quiser e sempre terá acesso às atualizações gratuitas que lançarmos.",
  },
  {
    question: "Como funciona a garantia de 7 dias?",
    answer:
      "Se você não ficar satisfeito por qualquer motivo, basta enviar um e-mail para suporte@receitasproteicas.com em até 7 dias e devolvemos 100% do seu dinheiro. Você ainda fica com o material como cortesia.",
  },
  {
    question: "Posso imprimir as receitas?",
    answer:
      "Claro! O material vem em formato PDF de alta qualidade, otimizado para impressão. Você pode imprimir as receitas que mais gostar e deixar na cozinha.",
  },
  {
    question: "Tem receitas para diabéticos?",
    answer:
      "Sim! Incluímos uma seção especial com 15 receitas adequadas para diabéticos, todas com baixo índice glicêmico e aprovadas por nutricionista especializada.",
  },
  {
    question: "As receitas são adequadas para crianças?",
    answer:
      "Muitas das receitas são perfeitas para toda a família! Marcamos claramente quais são kid-friendly e incluímos dicas para adaptar os sabores para o paladar infantil.",
  },
  {
    question: "Quanto tempo leva para ver resultados?",
    answer:
      "Os primeiros resultados em energia e disposição você sente já na primeira semana. Para mudanças físicas visíveis, a maioria dos nossos clientes relata resultados entre 2-4 semanas de uso consistente.",
  },
  {
    question: "O que está incluído no Grupo VIP do Telegram?",
    answer:
      "No grupo você terá acesso a receitas extras semanais, dicas de preparo, pode tirar dúvidas diretamente com a nutricionista Talia, e trocar experiências com outros membros da comunidade.",
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Dúvidas <span className="text-primary">Frequentes</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Reunimos as perguntas mais comuns dos nossos clientes. Se sua dúvida não estiver aqui, entre em contato
            conosco!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-100 rounded-2xl transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <HelpCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                  </div>

                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <ChevronUp className="w-6 h-6 text-gray-500" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-gray-500" />
                    )}
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-6">
                    <div className="pl-10">
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Support */}
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-8 rounded-2xl mt-12 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ainda tem dúvidas?</h3>
            <p className="text-gray-700 mb-6">
              Nossa equipe de suporte está pronta para ajudar você! Entre em contato e teremos prazer em esclarecer
              qualquer questão.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">E-mail de Suporte</h4>
                <p className="text-primary font-medium">suporte@receitasproteicas.com</p>
                <p className="text-sm text-gray-600 mt-1">Resposta em até 2 horas</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">WhatsApp</h4>
                <p className="text-primary font-medium">(11) 99999-9999</p>
                <p className="text-sm text-gray-600 mt-1">Segunda a Sexta, 8h às 18h</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
