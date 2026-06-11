
import { motion } from "framer-motion"

import {
  Cpu,
  Zap,
  MonitorSmartphone,
  Network,
  Wrench,
  Workflow,
  ArrowUpRight
} from "lucide-react"

function Services() {

  const services = [
    {
      icon: Cpu,
      title: "Automação Industrial",
      description:
        "Projetos de automação industrial utilizando CLPs, IHMs e integração de processos para aumentar produtividade, eficiência e confiabilidade operacional."
    },

    {
      icon: Zap,
      title: "Painéis Elétricos",
      description:
        "Montagem, adequação e organização de painéis elétricos para comandos, acionamentos, proteção e distribuição industrial."
    },

    {
      icon: Workflow,
      title: "Controle de Processos",
      description:
        "Monitoramento, supervisão e controle de processos industriais com foco em desempenho, segurança e redução de falhas."
    },

    {
      icon: MonitorSmartphone,
      title: "IHM e Supervisão",
      description:
        "Desenvolvimento de interfaces homem-máquina para operação intuitiva, monitoramento em tempo real e maior controle operacional."
    },

    {
      icon: Network,
      title: "Redes e Infraestrutura",
      description:
        "Implementação de redes estruturadas, infraestrutura tecnológica, comunicação industrial e conectividade para ambientes modernos."
    },

    {
      icon: Wrench,
      title: "Segurança e Integração",
      description:
        "Soluções em CFTV, controle de acesso, integração tecnológica e sistemas inteligentes para empresas e residências."
    }
  ]

  return (
    <section
      id="serviços"
      className="relative py-20 md:py-28 px-4 sm:px-6 overflow-hidden"
    >

      <div className="absolute inset-0">

        <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[500px] md:w-[700px] h-[500px] md:h-[700px] bg-cyan-500/5 blur-[140px]" />

      </div>

      <div className="relative z-10 max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <span className="border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 px-4 py-2 rounded-full text-xs sm:text-sm tracking-[0.2em] uppercase">

            Automação Industrial e Engenharia

          </span>

          <h2 className="mt-6 text-3xl sm:text-4xl md:text-6xl font-black leading-tight">

            Soluções em
            <span className="text-cyan-400">
              {" "}Automação e Tecnologia
            </span>

          </h2>

          <p className="mt-5 text-slate-400 text-base md:text-lg max-w-3xl mx-auto leading-relaxed px-2">

            Atuamos com automação industrial,
            painéis elétricos, segurança eletrônica,
            redes estruturadas e integração tecnológica
            para ambientes industriais, comerciais e residenciais.

          </p>

        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-7 mt-14 md:mt-20">

          {
            services.map((service, index) => {

              const Icon = service.icon

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.08,
                    ease: "easeOut"
                  }}
                  viewport={{ once: true }}
                  whileHover={{
                    y: -8
                  }}
                  className="group relative overflow-hidden border border-white/10 bg-white/[0.03] backdrop-blur-2xl rounded-3xl p-6 md:p-8 transition-all duration-500 hover:border-cyan-400/40 hover:bg-cyan-400/[0.04] hover:shadow-[0_0_40px_rgba(34,211,238,0.08)]"
                >

                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700">

                    <div className="absolute -top-20 right-0 w-32 h-32 bg-cyan-400/10 blur-3xl" />

                  </div>

                  <div className="relative z-10">

                    <div className="relative bg-cyan-500/10 border border-cyan-400/10 w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">

                      <div className="absolute inset-0 rounded-2xl bg-cyan-400/10 blur-xl opacity-0 group-hover:opacity-100 transition duration-500" />

                      <Icon
                        size={26}
                        className="relative z-10 text-cyan-400"
                      />

                    </div>

                    <h3 className="mt-6 text-xl md:text-2xl font-bold text-white leading-snug">

                      {service.title}

                    </h3>

                    <p className="mt-3 text-sm md:text-base text-slate-400 leading-relaxed">

                      {service.description}

                    </p>

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

export default Services