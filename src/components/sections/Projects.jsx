import { motion } from "framer-motion"

import cftv from "../../assets/images/cftv.jpeg"
import rede from "../../assets/images/rede.jpeg"
import automacao from "../../assets/images/automacao.jpeg"
import eletrica from "../../assets/images/eletrica.jpeg"

function Projects() {

  const projects = [
    {
      image: cftv,
      category: "CFTV Inteligente",
      title: "Sistema de Monitoramento Profissional",
      description:
        "Projeto completo com acesso remoto, monitoramento inteligente e infraestrutura dedicada."
    },

    {
      image: rede,
      category: "Redes Estruturadas",
      title: "Infraestrutura Corporativa",
      description:
        "Cabeamento estruturado e organização de rede para ambientes modernos."
    },

    {
      image: automacao,
      category: "Automação Inteligente",
      title: "Integração de Sistemas",
      description:
        "Automação moderna integrada com dispositivos inteligentes e controle remoto."
    },

    {
      image: eletrica,
      category: "Elétrica Industrial",
      title: "Painéis e Infraestrutura",
      description:
        "Projetos elétricos profissionais com foco em segurança e performance."
    }
  ]

  return (
    <section
      id="projetos"
      className="relative py-32 px-6"
    >

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <span className="border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 px-5 py-2 rounded-full text-sm">
            Projetos Realizados
          </span>

          <h2 className="mt-8 text-4xl md:text-6xl font-black">
            Portfólio
            <span className="text-cyan-400">
              {" "}Profissional
            </span>
          </h2>

          <p className="mt-6 text-slate-400 text-lg max-w-3xl mx-auto leading-relaxed">
            Conheça alguns dos projetos desenvolvidos em infraestrutura,
            automação, segurança eletrônica e sistemas inteligentes.
          </p>

        </motion.div>

        {/* GRID */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20">

          {
            projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1
                }}
                viewport={{ once: true }}
                className="group border border-white/10 bg-[#0B1120] rounded-3xl overflow-hidden hover:border-cyan-400/40 transition-all duration-500"
              >

                {/* IMAGE */}

                <div className="relative overflow-hidden h-[300px]">

                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                </div>

                {/* CONTENT */}

                <div className="p-8">

                  <span className="text-cyan-400 text-sm font-semibold">
                    {project.category}
                  </span>

                  <h3 className="mt-4 text-3xl font-bold">
                    {project.title}
                  </h3>

                  <p className="mt-4 text-slate-400 leading-relaxed">
                    {project.description}
                  </p>

                  <button className="mt-8 border border-cyan-400/30 hover:bg-cyan-400 hover:text-black transition-all duration-300 px-6 py-3 rounded-xl font-semibold">
                    Ver Projeto
                  </button>

                </div>

              </motion.div>
            ))
          }

        </div>

      </div>

    </section>
  )
}

export default Projects