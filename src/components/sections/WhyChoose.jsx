import { motion } from "framer-motion"

import {
  ShieldCheck,
  Cpu,
  Headphones,
  Sparkles,
  Workflow,
  Wrench
} from "lucide-react"

function WhyChoose() {

  const differentials = [

    {
      icon: ShieldCheck,
      title: "Confiabilidade Operacional",
      description:
        "Projetos desenvolvidos com foco em segurança, estabilidade e continuidade operacional para processos industriais e sistemas críticos."
    },

    {
      icon: Cpu,
      title: "Integração de Sistemas",
      description:
        "Integração entre CLPs, IHMs, painéis elétricos e dispositivos de campo para maior eficiência e controle dos processos."
    },

    {
      icon: Headphones,
      title: "Suporte Técnico Especializado",
      description:
        "Acompanhamento técnico próximo, suporte qualificado e atendimento focado na solução rápida de demandas operacionais."
    },

    {
      icon: Sparkles,
      title: "Qualidade na Execução",
      description:
        "Organização, acabamento e atenção aos detalhes em cada etapa da montagem, instalação e entrega dos projetos."
    },

    {
      icon: Workflow,
      title: "Projetos Personalizados",
      description:
        "Cada solução é desenvolvida de acordo com as necessidades específicas do cliente, garantindo melhor desempenho e resultado."
    },

    {
      icon: Wrench,
      title: "Experiência em Campo",
      description:
        "Conhecimento prático em instalação, testes, parametrização e comissionamento de sistemas industriais e elétricos."
    }
  ]

  return (
    <section
      id="diferenciais"
      className="relative py-32 px-6 overflow-hidden"
    >

      {/* BACKGROUND */}

      <div className="absolute inset-0">

        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/5 blur-[160px]" />

        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 blur-[160px]" />

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
            Diferenciais Costa Automation
          </span>

          <h2 className="mt-8 text-4xl md:text-6xl font-black leading-tight">
            Engenharia com
            <span className="text-cyan-400">
              {" "}Experiência e Confiabilidade
            </span>
          </h2>

          <p className="mt-6 text-slate-400 text-lg max-w-3xl mx-auto leading-relaxed">
            Desenvolvemos soluções em automação industrial, painéis elétricos,
            controle de processos e integração tecnológica, entregando projetos
            com qualidade, segurança e foco em resultados reais.
          </p>

        </motion.div>

        {/* GRID */}

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mt-20">

          {
            differentials.map((item, index) => {

              const Icon = item.icon

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08
                  }}
                  viewport={{ once: true }}
                  className="group relative border border-white/10 bg-white/5 backdrop-blur-xl rounded-3xl p-8 overflow-hidden hover:border-cyan-400/40 hover:bg-cyan-400/5 transition-all duration-500"
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

                    <h3 className="mt-6 text-2xl font-bold leading-snug">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-slate-400 leading-relaxed">
                      {item.description}
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

export default WhyChoose