import { Award, Users, Star, BookOpen, Heart, TrendingUp } from "lucide-react"
import Image from "next/image"

const credentials = [
  {
    icon: Award,
    title: "CRN 12345/SP",
    description: "Nutricionista registrada no Conselho Regional",
  },
  {
    icon: BookOpen,
    title: "Especialização em Nutrição Esportiva",
    description: "Pós-graduação pela Universidade de São Paulo",
  },
  {
    icon: Users,
    title: "8 Anos de Experiência",
    description: "Atendendo atletas e pessoas comuns",
  },
  {
    icon: TrendingUp,
    title: "+10.000 Pessoas Transformadas",
    description: "Resultados comprovados em consultório",
  },
]

const achievements = [
  "Menção na Revista Saúde como uma das nutricionistas mais inovadoras",
  "Palestrante em 15+ congressos de nutrição esportiva",
  "Consultora nutricional de 3 equipes esportivas profissionais",
  "Autora de 2 artigos científicos sobre proteína na dieta",
]

export default function CreatorSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Conheça a <span className="text-primary">Criadora</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Por trás de cada receita há anos de estudo, experiência clínica e paixão genuína por transformar vidas
            através da alimentação.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Photo and Basic Info */}
          <div className="text-center lg:text-left">
            <div className="relative inline-block mb-8">
              <Image
                src="/placeholder.svg?height=400&width=400&text=Talia+Fernanda"
                alt="Talia Fernanda - Nutricionista"
                width={400}
                height={400}
                className="rounded-2xl shadow-2xl"
              />

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-lg">
                <div className="flex items-center gap-2">
                  <Star className="w-6 h-6 text-yellow-500" />
                  <div>
                    <div className="text-sm font-bold text-gray-900">4.9/5</div>
                    <div className="text-xs text-gray-600">2.847 avaliações</div>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-3xl font-bold text-gray-900 mb-2">Talia Fernanda</h3>
            <p className="text-xl text-primary font-semibold mb-6">Nutricionista Especialista em Nutrição Esportiva</p>

            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Heart className="w-5 h-5 text-red-500" />
                Minha Missão
              </h4>
              <p className="text-gray-700 leading-relaxed">
                "Acredito que uma alimentação saudável não precisa ser complicada ou sem sabor. Minha missão é provar
                que é possível comer bem, de forma prática e deliciosa, alcançando seus objetivos de saúde e
                performance."
              </p>
            </div>
          </div>

          {/* Credentials and Story */}
          <div className="space-y-8">
            <div>
              <h4 className="text-2xl font-bold text-gray-900 mb-6">Credenciais e Experiência</h4>
              <div className="grid gap-6">
                {credentials.map((credential, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <credential.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h5 className="text-lg font-bold text-gray-900 mb-1">{credential.title}</h5>
                      <p className="text-gray-600">{credential.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Reconhecimentos e Conquistas</h4>
              <ul className="space-y-3">
                {achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-2 h-2 bg-primary rounded-full mt-2" />
                    <span className="text-gray-700">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-r from-primary to-secondary p-6 rounded-2xl text-white">
              <h4 className="text-xl font-bold mb-3">Por que criei este e-book?</h4>
              <p className="leading-relaxed">
                "Depois de anos atendendo em consultório, percebi que o maior desafio dos meus pacientes não era saber
                que precisavam comer mais proteína, mas sim COMO fazer isso de forma prática e saborosa. Este e-book
                nasceu dessa necessidade real."
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="bg-white p-4 rounded-xl shadow-lg">
                <div className="text-2xl font-bold text-primary">10.000+</div>
                <div className="text-sm text-gray-600">Pessoas Ajudadas</div>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-lg">
                <div className="text-2xl font-bold text-primary">98%</div>
                <div className="text-sm text-gray-600">Satisfação</div>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-lg">
                <div className="text-2xl font-bold text-primary">8</div>
                <div className="text-sm text-gray-600">Anos Experiência</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
