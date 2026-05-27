import { motion } from "framer-motion"

import {
  MonitorSmartphone,
  Database,
  Cloud,
  ShieldCheck,
  Cpu,
  Network,
  Server,
  Cable,
  Bot,
  Workflow,
  Layers3,
  BrainCircuit
} from "lucide-react"

function Technologies() {

  const technologies = [
    {
      icon: MonitorSmartphone,
      title: "React",
      category: "Frontend"
    },

    {
      icon: Database,
      title: "Firebase",
      category: "Backend"
    },

    {
      icon: Cloud,
      title: "Cloud",
      category: "Infraestrutura"
    },

    {
      icon: ShieldCheck,
      title: "Cyber Security",
      category: "Segurança"
    },

    {
      icon: Cpu,
      title: "Automação",
      category: "Sistemas"
    },

    {
      icon: Network,
      title: "Redes",
      category: "Infraestrutura"
    },

    {
      icon: Server,
      title: "Servidores",
      category: "Datacenter"
    },

    {
      icon: Cable,
      title: "Cabeamento",
      category: "Estruturado"
    },

    {
      icon: Bot,
      title: "IA",
      category: "Inteligência"
    },

    {
      icon: Workflow,
      title: "Integrações",
      category: "Automação"
    },

    {
      icon: Layers3,
      title: "SaaS",
      category: "Escalável"
    },

    {
      icon: BrainCircuit,
      title: "Sistemas Inteligentes",
      category: "Enterprise"
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
            Tecnologias & Infraestrutura
          </span>

          <h2 className="mt-8 text-4xl md:text-6xl font-black leading-tight">
            Ecossistema
            <span className="text-cyan-400">
              {" "}Tecnológico
            </span>
          </h2>

          <p className="mt-6 text-slate-400 text-lg max-w-3xl mx-auto leading-relaxed">
            Utilizamos tecnologias modernas, infraestrutura inteligente
            e soluções escaláveis para construir ambientes tecnológicos
            preparados para o futuro.
          </p>

        </motion.div>

        {/* GRID */}

        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 mt-20">

          {
            technologies.map((tech, index) => {

              const Icon = tech.icon

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.05
                  }}
                  viewport={{ once: true }}
                  className="group relative border border-white/10 bg-white/5 backdrop-blur-xl rounded-3xl p-6 overflow-hidden hover:border-cyan-400/40 hover:bg-cyan-400/5 transition-all duration-500"
                >

                  {/* GLOW */}

                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-cyan-400/5 blur-2xl" />

                  {/* ICON */}

                  <div className="relative z-10 bg-cyan-500/10 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition duration-500">

                    <Icon
                      size={30}
                      className="text-cyan-400"
                    />

                  </div>

                  {/* CONTENT */}

                  <div className="relative z-10">

                    <span className="inline-block mt-6 text-xs text-cyan-300 border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 rounded-full">
                      {tech.category}
                    </span>

                    <h3 className="mt-5 text-xl font-bold leading-snug">
                      {tech.title}
                    </h3>

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

export default Technologies