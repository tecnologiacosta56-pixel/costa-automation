import { motion } from "framer-motion"
import { Link } from "react-scroll"

import {
  Cpu,
  MonitorSmartphone,
  Zap,
  Network,
  ShieldCheck,
  Workflow
} from "lucide-react"

function Technologies() {

  const technologies = [
    {
      icon: Cpu,
      title: "Automação Industrial",
      category: "CLPs e Controle"
    },

    {
      icon: Zap,
      title: "Painéis Elétricos",
      category: "Comandos e Proteção"
    },

    {
      icon: MonitorSmartphone,
      title: "IHM e Supervisão",
      category: "Operação e Monitoramento"
    },

    {
      icon: Network,
      title: "Redes Estruturadas",
      category: "Comunicação e Conectividade"
    },

    {
      icon: ShieldCheck,
      title: "Automação Residencial",
      category: "Casas Inteligentes"
    },

    {
      icon: Workflow,
      title: "Integração de Sistemas",
      category: "Soluções Inteligentes"
    }
  ]

  return (
    <section
      id="tecnologias"
      className="relative py-32 px-6 overflow-hidden"
    >

      {/* BACKGROUND GLOW */}

      <div className="absolute inset-0">

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-cyan-500/5 blur-[160px]" />

        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/5 blur-[160px]" />

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

          <span className="border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 px-5 py-2 rounded-full text-sm">
            Tecnologias e Soluções Aplicadas
          </span>

          <h2 className="mt-8 text-4xl md:text-6xl font-black leading-tight">
            Tecnologias e
            <span className="text-cyan-400">
              {" "}Soluções Aplicadas
            </span>
          </h2>

          <p className="mt-6 text-slate-400 text-lg max-w-3xl mx-auto leading-relaxed">
            Atuamos com automação industrial, painéis elétricos,
            redes estruturadas, automação residencial,
            IHM e supervisão, além da integração de sistemas,
            utilizando tecnologias adequadas para cada projeto e necessidade.
          </p>

        </motion.div>

        {/* GRID */}

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-20">

          {
            technologies.map((tech, index) => {

              const Icon = tech.icon

              return (

                <Link
                  key={index}
                  to="projetos"
                  smooth={true}
                  duration={800}
                  offset={-80}
                >

                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.05
                    }}
                    viewport={{ once: true }}
                    className="group cursor-pointer relative border border-white/10 bg-white/5 backdrop-blur-xl rounded-3xl p-8 overflow-hidden hover:border-cyan-400/40 hover:bg-cyan-400/5 transition-all duration-500 min-h-[260px]"
                  >

                    {/* GLOW */}

                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-cyan-400/5 blur-2xl" />

                    {/* ICON */}

                    <div className="relative z-10 bg-cyan-500/10 w-20 h-20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition duration-500">

                      <Icon
                        size={34}
                        className="text-cyan-400"
                      />

                    </div>

                    {/* CONTENT */}

                    <div className="relative z-10">

                      <span className="inline-block mt-6 text-sm text-cyan-300 border border-cyan-400/20 bg-cyan-400/10 px-4 py-1.5 rounded-full">
                        {tech.category}
                      </span>

                      <h3 className="mt-6 text-2xl font-bold leading-snug">
                        {tech.title}
                      </h3>

                    </div>

                  </motion.div>

                </Link>

              )
            })
          }

        </div>

      </div>

    </section>
  )
}

export default Technologies