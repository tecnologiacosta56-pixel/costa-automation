import { useState } from "react"

import { motion, AnimatePresence } from "framer-motion"

import {
  ChevronDown,
  ShieldCheck,
  Cpu,
  Wifi,
  Building2
} from "lucide-react"

function FAQ() {

  const categories = [

    {
      icon: ShieldCheck,
      title: "Segurança & CFTV",

      questions: [

        {
          question: "As câmeras continuam funcionando sem internet?",

          answer:
            "Sim. Os sistemas de CFTV continuam gravando normalmente mesmo sem conexão com a internet. A internet é utilizada principalmente para acesso remoto pelo celular."
        },

        {
          question: "Posso acessar as câmeras pelo celular de qualquer lugar?",

          answer:
            "Sim. Configuramos acesso remoto seguro para que você acompanhe suas câmeras em tempo real diretamente pelo smartphone, de qualquer lugar."
        },

        {
          question: "O sistema grava mesmo quando acaba a internet?",

          answer:
            "Sim. O gravador continua armazenando as imagens localmente mesmo durante quedas de internet, garantindo maior segurança e continuidade do monitoramento."
        },

        {
          question: "As imagens ficam armazenadas por quantos dias?",

          answer:
            "O período varia conforme a quantidade de câmeras, qualidade de gravação e capacidade de armazenamento. Projetamos cada sistema de forma personalizada para atender sua necessidade."
        },

        {
          question: "Os equipamentos possuem garantia?",

          answer:
            "Sim. Trabalhamos com equipamentos de qualidade e garantia, além de suporte técnico especializado para maior tranquilidade e segurança do cliente."
        }
      ]
    },

    {
      icon: Cpu,
      title: "Automação Inteligente",

      questions: [

        {
          question: "A automação funciona com Alexa e Google Assistente?",

          answer:
            "Sim. Desenvolvemos soluções compatíveis com Alexa, Google Assistente e outros ecossistemas inteligentes, proporcionando praticidade e controle moderno."
        },

        {
          question: "É possível automatizar uma casa já pronta sem quebrar paredes?",

          answer:
            "Sim. Existem soluções inteligentes sem necessidade de grandes reformas, permitindo automatizar iluminação, dispositivos e controles com mínima intervenção estrutural."
        },

        {
          question: "Posso controlar iluminação, portão e câmeras pelo mesmo aplicativo?",

          answer:
            "Sim. Integramos diferentes sistemas em uma única experiência, permitindo controle centralizado de automação, segurança e dispositivos inteligentes."
        },

        {
          question: "A automação pode ajudar a reduzir consumo de energia?",

          answer:
            "Sim. A automação inteligente permite otimizar iluminação, climatização e equipamentos, reduzindo desperdícios e aumentando eficiência energética."
        },

        {
          question: "É possível expandir o sistema futuramente?",

          answer:
            "Sim. Projetamos soluções escaláveis para permitir futuras expansões, integrações e novas automações conforme o crescimento da necessidade do cliente."
        }
      ]
    },

    {
      icon: Wifi,
      title: "Redes & Infraestrutura",

      questions: [

        {
          question: "Vocês fazem projetos completos de rede e cabeamento estruturado?",

          answer:
            "Sim. Desenvolvemos infraestrutura de redes, cabeamento estruturado, organização técnica e soluções profissionais para ambientes residenciais e corporativos."
        },

        {
          question: "O Wi-Fi pode ficar melhor em toda a casa ou empresa?",

          answer:
            "Sim. Realizamos análise técnica do ambiente para melhorar cobertura, estabilidade e desempenho da rede Wi-Fi com soluções inteligentes."
        },

        {
          question: "Vocês trabalham com servidores, rack e infraestrutura profissional?",

          answer:
            "Sim. Atuamos com organização de rack, servidores, infraestrutura tecnológica e ambientes preparados para maior estabilidade e desempenho operacional."
        }
      ]
    },

    {
      icon: Building2,
      title: "Atendimento & Projetos",

      questions: [

        {
          question: "Vocês fazem instalação residencial e empresarial?",

          answer:
            "Sim. Atendemos projetos residenciais, comerciais e corporativos, sempre adaptando cada solução às necessidades específicas do ambiente."
        },

        {
          question: "Vocês fazem manutenção e suporte técnico após a instalação?",

          answer:
            "Sim. Oferecemos suporte técnico, manutenção preventiva e assistência especializada para garantir estabilidade e funcionamento contínuo dos sistemas."
        },

        {
          question: "O orçamento possui algum custo?",

          answer:
            "Na maioria dos casos realizamos uma análise inicial sem compromisso, entendendo a necessidade do cliente para propor a solução mais adequada."
        },

        {
          question: "Em quanto tempo o sistema costuma ficar pronto?",

          answer:
            "O prazo varia conforme o tamanho e complexidade do projeto. Após a análise técnica, informamos um cronograma claro e organizado."
        },

        {
          question: "Vocês trabalham com projetos personalizados?",

          answer:
            "Sim. Cada projeto é desenvolvido de forma estratégica e personalizada, buscando integração inteligente, desempenho e melhor experiência para o cliente."
        },

        {
          question: "Como funciona o suporte após a instalação?",

          answer:
            "Após a entrega do projeto, continuamos oferecendo suporte técnico, acompanhamento e assistência para garantir máxima estabilidade e confiabilidade."
        },

        {
          question: "Vocês atendem empresas de pequeno e grande porte?",

          answer:
            "Sim. Desenvolvemos soluções escaláveis para pequenas empresas, escritórios, ambientes corporativos e operações de maior porte."
        }
      ]
    }
  ]

  const [openItem, setOpenItem] = useState(null)

  const toggleItem = (id) => {
    setOpenItem(openItem === id ? null : id)
  }

  return (
    <section
      id="faq"
      className="relative py-32 px-6 overflow-hidden"
    >

      {/* BACKGROUND */}

      <div className="absolute inset-0">

        <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-cyan-500/5 blur-[160px]" />

        <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-blue-500/5 blur-[160px]" />

      </div>

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* HEADER */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <span className="border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 px-5 py-2 rounded-full text-sm">
            Perguntas Frequentes
          </span>

          <h2 className="mt-8 text-4xl md:text-6xl font-black leading-tight">
            Dúvidas sobre nossos
            <span className="text-cyan-400">
              {" "}serviços e soluções
            </span>
          </h2>

          <p className="mt-6 text-slate-400 text-lg max-w-3xl mx-auto leading-relaxed">
            Reunimos as principais dúvidas sobre automação,
            segurança eletrônica, redes, infraestrutura e tecnologia
            para ajudar você a entender melhor nossas soluções.
          </p>

        </motion.div>

        {/* CATEGORIES */}

        <div className="mt-20 space-y-10">

          {
            categories.map((category, categoryIndex) => {

              const Icon = category.icon

              return (

                <motion.div
                  key={categoryIndex}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="border border-white/10 bg-white/5 backdrop-blur-xl rounded-3xl p-6 md:p-8"
                >

                  {/* CATEGORY HEADER */}

                  <div className="flex items-center gap-4 mb-8">

                    <div className="bg-cyan-500/10 w-16 h-16 rounded-2xl flex items-center justify-center">

                      <Icon
                        size={30}
                        className="text-cyan-400"
                      />

                    </div>

                    <div>

                      <h3 className="text-2xl font-bold">
                        {category.title}
                      </h3>

                      <p className="text-slate-400 mt-1">
                        Informações importantes sobre nossos serviços.
                      </p>

                    </div>

                  </div>

                  {/* QUESTIONS */}

                  <div className="space-y-4">

                    {
                      category.questions.map((item, questionIndex) => {

                        const itemId = `${categoryIndex}-${questionIndex}`

                        return (

                          <div
                            key={itemId}
                            className="border border-white/10 rounded-2xl overflow-hidden bg-white/[0.03]"
                          >

                            <button
                              onClick={() => toggleItem(itemId)}
                              className="w-full flex items-center justify-between gap-4 text-left p-5 md:p-6 hover:bg-white/[0.03] transition-all duration-300"
                            >

                              <span className="text-base md:text-lg font-semibold leading-relaxed">
                                {item.question}
                              </span>

                              <motion.div
                                animate={{
                                  rotate: openItem === itemId ? 180 : 0
                                }}
                                transition={{ duration: 0.3 }}
                              >

                                <ChevronDown
                                  className="text-cyan-400 shrink-0"
                                />

                              </motion.div>

                            </button>

                            <AnimatePresence>

                              {
                                openItem === itemId && (

                                  <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="overflow-hidden"
                                  >

                                    <div className="px-5 md:px-6 pb-6 text-slate-400 leading-relaxed">

                                      {item.answer}

                                    </div>

                                  </motion.div>
                                )
                              }

                            </AnimatePresence>

                          </div>
                        )
                      })
                    }

                  </div>

                </motion.div>
              )
            })
          }

        </div>

      </div>

    </section>
  )
}

export default FAQ