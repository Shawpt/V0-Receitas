"use client"

import { useState } from "react"
import { Calculator, Target, TrendingUp, Activity, User, Scale } from "lucide-react"
import { Button } from "@/components/ui/button"

interface CalculatorData {
  weight: string
  height: string
  age: string
  gender: "male" | "female" | ""
  activityLevel: "sedentary" | "light" | "moderate" | "intense" | "extreme" | ""
  goal: "maintenance" | "muscle_gain" | "weight_loss" | ""
}

interface Results {
  dailyProtein: number
  proteinPerMeal: number
  proteinPerKg: number
  recommendations: string[]
}

const activityLevels = [
  { value: "sedentary", label: "Sedentário", description: "Pouco ou nenhum exercício", multiplier: 0.8 },
  { value: "light", label: "Levemente Ativo", description: "Exercício leve 1-3 dias/semana", multiplier: 1.0 },
  {
    value: "moderate",
    label: "Moderadamente Ativo",
    description: "Exercício moderado 3-5 dias/semana",
    multiplier: 1.2,
  },
  { value: "intense", label: "Muito Ativo", description: "Exercício intenso 6-7 dias/semana", multiplier: 1.4 },
  {
    value: "extreme",
    label: "Extremamente Ativo",
    description: "Exercício muito intenso, trabalho físico",
    multiplier: 1.6,
  },
]

const goals = [
  { value: "maintenance", label: "Manutenção", description: "Manter peso atual", multiplier: 1.0 },
  { value: "muscle_gain", label: "Ganho de Massa", description: "Aumentar massa muscular", multiplier: 1.3 },
  { value: "weight_loss", label: "Emagrecimento", description: "Perder peso mantendo músculos", multiplier: 1.1 },
]

export default function ProteinCalculator() {
  const [data, setData] = useState<CalculatorData>({
    weight: "",
    height: "",
    age: "",
    gender: "",
    activityLevel: "",
    goal: "",
  })

  const [results, setResults] = useState<Results | null>(null)
  const [showResults, setShowResults] = useState(false)

  const calculateProtein = () => {
    if (!data.weight || !data.activityLevel || !data.goal) return

    const weight = Number.parseFloat(data.weight)
    const activityMultiplier = activityLevels.find((level) => level.value === data.activityLevel)?.multiplier || 1.0
    const goalMultiplier = goals.find((goal) => goal.value === data.goal)?.multiplier || 1.0

    // Base protein calculation (1.2g per kg for sedentary adults)
    const baseProtein = weight * 1.2

    // Apply activity and goal multipliers
    const dailyProtein = Math.round(baseProtein * activityMultiplier * goalMultiplier)
    const proteinPerMeal = Math.round(dailyProtein / 4) // Assuming 4 meals per day
    const proteinPerKg = Math.round((dailyProtein / weight) * 10) / 10

    // Generate personalized recommendations
    const recommendations = generateRecommendations(data, dailyProtein)

    setResults({
      dailyProtein,
      proteinPerMeal,
      proteinPerKg,
      recommendations,
    })

    setShowResults(true)
  }

  const generateRecommendations = (userData: CalculatorData, protein: number): string[] => {
    const recs = []

    if (userData.goal === "muscle_gain") {
      recs.push("Consuma proteína a cada 3-4 horas para otimizar a síntese proteica")
      recs.push("Inclua 20-30g de proteína no pós-treino para máxima recuperação")
    }

    if (userData.goal === "weight_loss") {
      recs.push("Priorize proteínas magras para manter a saciedade")
      recs.push("Distribua a proteína ao longo do dia para preservar massa muscular")
    }

    if (userData.activityLevel === "intense" || userData.activityLevel === "extreme") {
      recs.push("Considere suplementação proteica para atingir suas metas")
      recs.push("Hidrate-se adequadamente para otimizar a absorção de nutrientes")
    }

    recs.push(`Com nossas receitas, você pode facilmente atingir ${protein}g de proteína por dia`)
    recs.push("Varie as fontes proteicas para obter todos os aminoácidos essenciais")

    return recs
  }

  const resetCalculator = () => {
    setData({
      weight: "",
      height: "",
      age: "",
      gender: "",
      activityLevel: "",
      goal: "",
    })
    setResults(null)
    setShowResults(false)
  }

  return (
    <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-8 md:p-12">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Calculator className="w-8 h-8 text-primary" />
          <h3 className="text-3xl font-bold text-gray-900">Calculadora de Proteína</h3>
        </div>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Descubra exatamente quanta proteína você precisa consumir diariamente para atingir seus objetivos
        </p>
      </div>

      {!showResults ? (
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Personal Data */}
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <User className="w-5 h-5 text-primary" />
                Dados Pessoais
              </h4>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Peso (kg)</label>
                  <input
                    type="number"
                    value={data.weight}
                    onChange={(e) => setData({ ...data, weight: e.target.value })}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Ex: 70"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Altura (cm)</label>
                  <input
                    type="number"
                    value={data.height}
                    onChange={(e) => setData({ ...data, height: e.target.value })}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Ex: 170"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Idade</label>
                  <input
                    type="number"
                    value={data.age}
                    onChange={(e) => setData({ ...data, age: e.target.value })}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Ex: 30"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Sexo</label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setData({ ...data, gender: "male" })}
                      className={`p-3 rounded-lg border-2 transition-all ${
                        data.gender === "male"
                          ? "border-primary bg-primary/10 text-primary"
                          : "border-gray-300 hover:border-gray-400"
                      }`}
                    >
                      Masculino
                    </button>
                    <button
                      type="button"
                      onClick={() => setData({ ...data, gender: "female" })}
                      className={`p-3 rounded-lg border-2 transition-all ${
                        data.gender === "female"
                          ? "border-primary bg-primary/10 text-primary"
                          : "border-gray-300 hover:border-gray-400"
                      }`}
                    >
                      Feminino
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Activity & Goals */}
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Activity className="w-5 h-5 text-primary" />
                Atividade & Objetivos
              </h4>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">Nível de Atividade</label>
                  <div className="space-y-2">
                    {activityLevels.map((level) => (
                      <button
                        key={level.value}
                        type="button"
                        onClick={() => setData({ ...data, activityLevel: level.value as any })}
                        className={`w-full p-3 text-left rounded-lg border-2 transition-all ${
                          data.activityLevel === level.value
                            ? "border-primary bg-primary/10"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                      >
                        <div className="font-medium text-gray-900">{level.label}</div>
                        <div className="text-sm text-gray-600">{level.description}</div>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">Objetivo Principal</label>
                  <div className="space-y-2">
                    {goals.map((goal) => (
                      <button
                        key={goal.value}
                        type="button"
                        onClick={() => setData({ ...data, goal: goal.value as any })}
                        className={`w-full p-3 text-left rounded-lg border-2 transition-all ${
                          data.goal === goal.value
                            ? "border-secondary bg-secondary/10"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                      >
                        <div className="font-medium text-gray-900">{goal.label}</div>
                        <div className="text-sm text-gray-600">{goal.description}</div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <Button
              onClick={calculateProtein}
              disabled={!data.weight || !data.activityLevel || !data.goal}
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-bold py-4 px-12 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Calculator className="w-5 h-5 mr-2" />
              CALCULAR MINHA NECESSIDADE PROTEICA
            </Button>
          </div>
        </div>
      ) : (
        <div className="max-w-4xl mx-auto">
          {/* Results */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 mb-8">
            <div className="text-center mb-8">
              <h4 className="text-2xl font-bold text-gray-900 mb-2">Seus Resultados Personalizados</h4>
              <p className="text-gray-600">Baseado nos seus dados e objetivos</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-6 bg-primary/10 rounded-2xl">
                <Target className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold text-primary mb-2">{results?.dailyProtein}g</div>
                <div className="text-sm text-gray-600">Proteína por dia</div>
              </div>

              <div className="text-center p-6 bg-secondary/10 rounded-2xl">
                <Scale className="w-8 h-8 text-secondary mx-auto mb-3" />
                <div className="text-3xl font-bold text-secondary mb-2">{results?.proteinPerMeal}g</div>
                <div className="text-sm text-gray-600">Por refeição (4x/dia)</div>
              </div>

              <div className="text-center p-6 bg-accent/10 rounded-2xl">
                <TrendingUp className="w-8 h-8 text-accent mx-auto mb-3" />
                <div className="text-3xl font-bold text-accent mb-2">{results?.proteinPerKg}g/kg</div>
                <div className="text-sm text-gray-600">Por kg de peso</div>
              </div>
            </div>

            {/* Recommendations */}
            <div className="bg-gradient-to-r from-primary/5 to-secondary/5 p-6 rounded-2xl">
              <h5 className="text-xl font-bold text-gray-900 mb-4">Recomendações Personalizadas</h5>
              <ul className="space-y-3">
                {results?.recommendations.map((rec, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-700">{rec}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-primary to-secondary p-8 rounded-2xl text-white text-center">
            <h4 className="text-2xl font-bold mb-4">Pronto para Atingir Suas Metas? 🎯</h4>
            <p className="text-lg mb-6 opacity-90">
              Com nossas 100 receitas proteicas, você terá todas as ferramentas necessárias para atingir facilmente seus{" "}
              <span className="font-bold">{results?.dailyProtein}g de proteína diários</span> de forma deliciosa e
              prática!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-gray-100 font-bold py-3 px-8 rounded-full shadow-lg"
              >
                QUERO AS 100 RECEITAS AGORA
              </Button>

              <Button
                onClick={resetCalculator}
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-primary font-bold py-3 px-8 rounded-full bg-transparent"
              >
                CALCULAR NOVAMENTE
              </Button>
            </div>
          </div>

          {/* Recipe Examples */}
          <div className="mt-8 bg-white p-6 rounded-2xl shadow-lg">
            <h5 className="text-xl font-bold text-gray-900 mb-4 text-center">
              Exemplos de Receitas para Atingir Sua Meta
            </h5>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-4 bg-gray-50 rounded-xl">
                <h6 className="font-semibold text-gray-900 mb-2">Café da Manhã (25g proteína)</h6>
                <p className="text-sm text-gray-600">Panqueca Proteica + Iogurte Grego com Frutas</p>
              </div>

              <div className="p-4 bg-gray-50 rounded-xl">
                <h6 className="font-semibold text-gray-900 mb-2">Almoço (35g proteína)</h6>
                <p className="text-sm text-gray-600">Frango Desfiado + Quinoa + Salada</p>
              </div>

              <div className="p-4 bg-gray-50 rounded-xl">
                <h6 className="font-semibold text-gray-900 mb-2">Lanche (20g proteína)</h6>
                <p className="text-sm text-gray-600">Smoothie Proteico Verde</p>
              </div>

              <div className="p-4 bg-gray-50 rounded-xl">
                <h6 className="font-semibold text-gray-900 mb-2">Jantar (30g proteína)</h6>
                <p className="text-sm text-gray-600">Salmão Grelhado + Legumes</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
