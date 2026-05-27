import { motion } from "framer-motion"

import {
  ShieldCheck,
  Cpu,
  Network,
  Zap,
  Server,
  MonitorSmartphone,
  Cable,
  Database,
  ArrowUpRight
} from "lucide-react"

function Services() {

  const services = [
    {
      icon: ShieldCheck,
      title: "CFTV Inteligente",
      description:
        "Projetos modernos de monitoramento com acesso remoto e integração inteligente."
    },

    {
      icon: Network,
      title: "Redes Estruturadas",
      description:
        "Infraestrutura profissional para empresas, residências e ambientes corporativos."
    },

    {
      icon: Cpu,
      title: "Automação Inteligente",
      description:
        "Integração entre sistemas, dispositivos e automações modernas."
    },

    {
      icon: Zap,
      title: "Elétrica Industrial",
      description:
        "Instalações elétricas profissionais com foco em segurança e performance."
    },

    {
      icon: Server,
      title: "Infraestrutura Tecnológica",
      description:
        "Organização completa de racks, servidores e conectividade."
    },

    {
      icon: MonitorSmartphone,
      title: "Controle de Acesso",
      description:
        "Soluções modernas para segurança e gerenciamento de acesso."
    },

    {
      icon: Cable,
      title: "Cabeamento Estruturado",
      description:
        "Instalações organizadas e preparadas para expansão futura."
    },

    {
      icon: Database,
      title: "Sistemas SaaS",
      description:
        "Desenvolvimento de sistemas modernos escaláveis e inteligentes."
    }
  ]

  return (
    <section
      id="serviços"
      className="relative py-20 md:py-28 px-4 sm:px-6 overflow-hidden"
    >

      {/* BACKGROUND */}

      <div className="absolute inset-0">

        <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[500px] md:w-[700px] h-[500px] md:h-[700px] bg-cyan-500/5 blur-[140px]" />

      </div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* HEADER */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <span className="border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 px-4 py-2 rounded-full text-xs sm:text-sm tracking-[0.2em] uppercase">

            Serviços Profissionais

          </span>

          <h2 className="mt-6 text-3xl sm:text-4xl md:text-6xl font-black leading-tight">

            Soluções Tecnológicas
            <span className="text-cyan-400">
              {" "}Modernas
            </span>

          </h2>

          <p className="mt-5 text-slate-400 text-base md:text-lg max-w-3xl mx-auto leading-relaxed px-2">

            Atuamos com infraestrutura, automação,
            segurança eletrônica e sistemas inteligentes
            preparados para ambientes modernos.

          </p>

        </motion.div>

        {/* GRID */}

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 md:gap-7 mt-14 md:mt-20">

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

                  {/* GLOW */}

                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700">

                    <div className="absolute -top-20 right-0 w-32 h-32 bg-cyan-400/10 blur-3xl" />

                  </div>

                  {/* ICON */}

                  <div className="relative z-10">

                    <div className="relative bg-cyan-500/10 border border-cyan-400/10 w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">

                      <div className="absolute inset-0 rounded-2xl bg-cyan-400/10 blur-xl opacity-0 group-hover:opacity-100 transition duration-500" />

                      <Icon
                        size={26}
                        className="relative z-10 text-cyan-400"
                      />

                    </div>

                    {/* CONTENT */}

                    <h3 className="mt-6 text-xl md:text-2xl font-bold text-white leading-snug">

                      {service.title}

                    </h3>

                    <p className="mt-3 text-sm md:text-base text-slate-400 leading-relaxed">

                      {service.description}

                    </p>

                    {/* BUTTON */}

                    <button className="mt-6 flex items-center gap-2 text-cyan-400 text-sm md:text-base font-semibold transition-all duration-300 group-hover:gap-3 group-hover:text-cyan-300">

                      Saiba mais

                      <ArrowUpRight
                        size={17}
                        className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                      />

                    </button>

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