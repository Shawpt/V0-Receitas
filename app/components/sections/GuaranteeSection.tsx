import { Shield, CheckCircle, Clock, RefreshCw, Lock, Award } from "lucide-react"
import Image from "next/image"

const guaranteeFeatures = [
  {
    icon: Clock,
    title: "7 Dias para Testar",
    description: "Tempo suficiente para experimentar várias receitas e ver os primeiros resultados",
  },
  {
    icon: RefreshCw,
    title: "Reembolso Integral",
    description: "100% do seu dinheiro de volta, sem perguntas ou burocracias",
  },
  {
    icon: CheckCircle,
    title: "Você Fica com o Produto",
    description: "Mesmo se pedir reembolso, pode manter o material como cortesia",
  },
  {
    icon: Lock,
    title: "Processo Simples",
    description: "Basta enviar um e-mail e o reembolso é processado em até 24h",
  },
]

const securityBadges = [
  {
    icon: Shield,
    title: "SSL Certificado",
    description: "Seus dados protegidos com criptografia de nível bancário",
  },
  {
    icon: Lock,
    title: "Pagamento Seguro",
    description: "Processamento via Stripe e PagSeguro, as plataformas mais confiáveis",
  },
  {
    icon: Award,
    title: "Empresa Registrada",
    description: "CNPJ ativo e empresa regularizada em todos os órgãos",
  },
]

export default function GuaranteeSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Sua Satisfação é <span className="text-green-600">100% Garantida</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos tão confiantes na qualidade do nosso material que oferecemos uma garantia incondicional. Sua
            satisfação é nossa prioridade.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Main Guarantee */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-16 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-green-100 rounded-full -translate-y-32 translate-x-32 opacity-50" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-100 rounded-full translate-y-24 -translate-x-24 opacity-50" />

            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                    <Shield className="w-8 h-8 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900">Garantia de 7 Dias</h3>
                    <p className="text-lg text-green-600 font-semibold">Risco Zero para Você</p>
                  </div>
                </div>

                <div className="bg-green-50 p-6 rounded-2xl mb-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Nossa Promessa para Você:</h4>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    "Se por qualquer motivo você não ficar 100% satisfeito com as receitas, basta nos enviar um e-mail
                    em até 7 dias e devolvemos todo o seu dinheiro. E você ainda fica com o material como nossa
                    cortesia!"
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {guaranteeFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <feature.icon className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <h5 className="font-semibold text-gray-900 text-sm">{feature.title}</h5>
                        <p className="text-xs text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-center">
                <Image
                  src="/placeholder.svg?height=300&width=300&text=Garantia+Selo"
                  alt="Selo de Garantia"
                  width={300}
                  height={300}
                  className="mx-auto mb-6"
                />

                <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-6 rounded-2xl">
                  <h4 className="text-2xl font-bold mb-2">100% Sem Riscos</h4>
                  <p className="text-lg">
                    Teste por 7 dias completos. Se não gostar, devolvemos seu dinheiro e você fica com o produto!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Security Features */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {securityBadges.map((badge, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <badge.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{badge.title}</h4>
                <p className="text-gray-600">{badge.description}</p>
              </div>
            ))}
          </div>

          {/* Refund Process */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Como Funciona o Processo de Reembolso</h3>

            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-blue-600">1</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Envie um E-mail</h4>
                <p className="text-sm text-gray-600">Para suporte@receitasproteicas.com</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-blue-600">2</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Confirmação</h4>
                <p className="text-sm text-gray-600">Resposta em até 2 horas</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-blue-600">3</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Processamento</h4>
                <p className="text-sm text-gray-600">Reembolso processado</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Dinheiro de Volta</h4>
                <p className="text-sm text-gray-600">Em até 24 horas</p>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-gray-50 p-8 rounded-2xl mt-12">
            <h3 className="text-xl font-bold text-gray-900 text-center mb-6">Suporte e Atendimento</h3>

            <div className="grid md:grid-cols-2 gap-8 text-center">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">E-mail de Suporte</h4>
                <p className="text-blue-600 font-medium">suporte@receitasproteicas.com</p>
                <p className="text-sm text-gray-600 mt-1">Resposta em até 2 horas</p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Horário de Atendimento</h4>
                <p className="text-gray-700">Segunda a Sexta: 8h às 18h</p>
                <p className="text-sm text-gray-600 mt-1">Sábados: 8h às 12h</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
