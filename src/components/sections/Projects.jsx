import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

import automacaoIndustrial from "../../assets/images/automacao-industrial.jpg"
import paineisEletricos from "../../assets/images/paineis-eletricos.jpg"
import ihmSupervisao from "../../assets/images/ihm-supervisao.jpg"
import redesEstruturadas from "../../assets/images/redes-estruturadas.jpg"
import automacaoResidencial from "../../assets/images/automacao-residencial.jpg"
import integracaoSistemas from "../../assets/images/integracao-sistemas.jpg"

function Projects() {

  const [selectedVideo, setSelectedVideo] = useState(null)

  const projects = [
    {
      image: automacaoIndustrial,
      video: "https://www.youtube.com/embed/Oo8HmRN9Hds",
      category: "Automação Industrial",
      title: "Automação Industrial",
      description:
        "Projetos de automação industrial com CLPs, sensores, acionamentos e controle de processos para aumento de produtividade e confiabilidade operacional."
    },

    {
      image: paineisEletricos,
      video: "https://www.youtube.com/embed/Z5X6Tb-5hNo",
      category: "Painéis Elétricos",
      title: "Painéis Elétricos",
      description:
        "Montagem e adequação de painéis elétricos industriais com foco em organização, segurança, identificação e desempenho operacional."
    },

    {
      image: ihmSupervisao,
      video: "https://www.youtube.com/embed/UDPZ-bViUqU",
      category: "IHM e Supervisão",
      title: "IHM e Supervisão",
      description:
        "Interfaces homem-máquina e sistemas supervisórios desenvolvidos para monitoramento, operação e controle em tempo real."
    },

    {
      image: redesEstruturadas,
      video: "https://www.youtube.com/embed/2GnCFdugUtk",
      category: "Redes Estruturadas",
      title: "Redes Estruturadas",
      description:
        "Infraestrutura de rede para ambientes industriais, comerciais e corporativos garantindo conectividade e comunicação eficiente."
    },

    {
      image: automacaoResidencial,
      video: "https://www.youtube.com/embed/Eg-_3B_n8Xs",
      category: "Automação Residencial",
      title: "Automação Residencial",
      description:
        "Soluções inteligentes para residências com controle de iluminação, segurança, monitoramento e automação integrada."
    },

    {
      image: integracaoSistemas,
      video: "https://www.youtube.com/embed/3FhWi311ZuA",
      category: "Integração de Sistemas",
      title: "Integração de Sistemas",
      description:
        "Integração de equipamentos, softwares e processos para criar soluções completas e inteligentes para cada necessidade."
    }
  ]

  return (
    <>
      <section id="projetos" className="relative py-32 px-6">

        <div className="max-w-7xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <span className="border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 px-5 py-2 rounded-full text-sm">
              Projetos Reais
            </span>

            <h2 className="mt-8 text-4xl md:text-6xl font-black">
              Portfólio
              <span className="text-cyan-400"> Costa Automation</span>
            </h2>

            <p className="mt-6 text-slate-400 text-lg max-w-3xl mx-auto leading-relaxed">
              Conheça alguns dos projetos desenvolvidos pela Costa Automation em automação industrial, painéis elétricos, supervisão, redes estruturadas e integração de sistemas.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

            {projects.map((project, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.35 }}
                viewport={{ once: true }}
                onClick={() => setSelectedVideo(project.video)}
                className="group cursor-pointer relative rounded-3xl overflow-hidden border border-white/10 bg-[#0B1120] hover:border-cyan-400/40 transition-all duration-500 shadow-lg hover:shadow-[0_0_45px_rgba(34,211,238,0.18)]"
              >

                <div className="relative h-[300px] overflow-hidden">

                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700 group-hover:brightness-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />

                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent animate-pulse" />
                  </div>

                  <div className="absolute top-4 left-4">
                    <span className="bg-black/60 border border-cyan-400/20 text-cyan-300 text-xs px-3 py-1 rounded-full backdrop-blur-md">
                      {project.category}
                    </span>
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      animate={{ scale: [1, 1.08, 1] }}
                      transition={{ duration: 1.6, repeat: Infinity }}
                      className="w-18 h-18 rounded-full bg-cyan-400/15 border border-cyan-300/40 flex items-center justify-center backdrop-blur-lg shadow-[0_0_25px_rgba(34,211,238,0.25)]"
                    >
                      <div className="w-0 h-0 border-l-[11px] border-l-white border-y-[8px] border-y-transparent ml-1" />
                    </motion.div>
                  </div>

                </div>

                <div className="p-8">

                  <h3 className="text-2xl font-bold group-hover:text-cyan-300 transition">
                    {project.title}
                  </h3>

                  <p className="mt-4 text-slate-400 leading-relaxed">
                    {project.description}
                  </p>

                  <p className="mt-6 text-cyan-400 text-sm font-semibold opacity-80 group-hover:opacity-100 transition">
                    Assistir demonstração →
                  </p>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      <AnimatePresence>

        {selectedVideo && (

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedVideo(null)}
          >

            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative w-full max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >

              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute -top-12 right-0 text-white text-3xl font-bold hover:text-cyan-400 transition"
              >
                ✕
              </button>

              <div className="rounded-2xl overflow-hidden border border-cyan-400/20 shadow-2xl">

                <iframe
                  className="w-full aspect-video"
                  src={selectedVideo}
                  title="Vídeo do Projeto"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />

              </div>

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>
    </>
  )
}

export default Projects