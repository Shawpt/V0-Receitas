import { X, Clock, DollarSign, BookOpen, Utensils, TrendingDown } from "lucide-react"

const problems = [
  {
    icon: Utensils,
    title: "Comer sempre a mesma coisa",
    description: "Frango grelhado e ovo cozido todos os dias? Sua alimentação virou uma rotina sem graça e sem prazer.",
  },
  {
    icon: TrendingDown,
    title: "Não conseguir ganhar massa muscular",
    description: "Por falta de variedade proteica e receitas que realmente funcionam para seus objetivos.",
  },
  {
    icon: Clock,
    title: "Perder tempo procurando receitas",
    description: "Horas navegando na internet atrás de receitas que prometem muito e entregam pouco.",
  },
  {
    icon: DollarSign,
    title: "Ingredientes caros e difíceis de encontrar",
    description: "Receitas com ingredientes exóticos que custam uma fortuna e não cabem no orçamento.",
  },
  {
    icon: BookOpen,
    title: "Receitas complicadas demais",
    description: "Preparos que levam horas e não cabem na sua rotina corrida do dia a dia.",
  },
  {
    icon: X,
    title: "Falta de orientação nutricional confiável",
    description: "Informações desencontradas na internet que deixam você mais confuso do que antes.",
  },
]

export default function ProblemsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Você Está <span className="text-red-500">Cansado</span> de...
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sabemos exatamente pelos desafios que você está passando. Estes são os problemas mais comuns que nossos
            clientes enfrentavam antes de descobrir nossa solução:
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <problem.icon className="w-6 h-6 text-red-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{problem.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{problem.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-white p-8 rounded-2xl shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Se você se identificou com pelo menos 3 desses problemas...
            </h3>
            <p className="text-lg text-gray-600">
              Então você está no lugar certo! Nossa solução foi criada especificamente para resolver cada um desses
              desafios de forma prática e definitiva.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
