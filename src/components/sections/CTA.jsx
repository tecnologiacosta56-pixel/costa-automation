import { motion } from "framer-motion"

import {
  MessageCircle,
  ArrowRight,
  ShieldCheck,
  Cpu,
  Zap
} from "lucide-react"

import {
  createWhatsAppLink,
  messages
} from "../../utils/whatsapp"

function CTA() {

  const features = [
    {
      icon: ShieldCheck,
      title: "Infraestrutura Profissional"
    },
    {
      icon: Cpu,
      title: "Automação Inteligente"
    },
    {
      icon: Zap,
      title: "Soluções Escaláveis"
    }
  ]

  return (
    <section className="relative py-32 px-6 overflow-hidden">

      {/* BACKGROUND */}

      <div className="absolute inset-0">

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-cyan-500/10 blur-[180px]" />

        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[180px]" />

      </div>

      <div className="relative z-10 max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="border border-white/10 bg-white/5 backdrop-blur-2xl rounded-[40px] p-10 md:p-16 overflow-hidden relative"
        >

          {/* GLOW */}

          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10 pointer-events-none" />

          {/* CONTENT */}

          <div className="relative z-10 text-center">

            <span className="border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 px-5 py-2 rounded-full text-sm">
              Atendimento Profissional
            </span>

            <h2 className="mt-8 text-4xl md:text-6xl font-black leading-tight">

              Vamos transformar sua
              <span className="text-cyan-400">
                {" "}infraestrutura{" "}
              </span>

              em um sistema inteligente.

            </h2>

            <p className="mt-8 text-slate-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">

              Projetos modernos em automação,
              redes estruturadas,
              segurança eletrônica,
              elétrica profissional
              e sistemas tecnológicos escaláveis.

            </p>

            {/* FEATURES */}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">

              {
                features.map((feature, index) => {

                  const Icon = feature.icon

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.2
                      }}
                      viewport={{ once: true }}
                      className="border border-white/10 bg-black/20 rounded-2xl p-6 flex items-center gap-4 justify-center"
                    >

                      <div className="bg-cyan-500/10 p-3 rounded-xl">

                        <Icon
                          className="text-cyan-400"
                          size={24}
                        />

                      </div>

                      <span className="font-medium text-slate-200">
                        {feature.title}
                      </span>

                    </motion.div>
                  )
                })
              }

            </div>

            {/* BUTTONS */}

            <div className="flex flex-wrap justify-center gap-5 mt-14">

              <a
                href={createWhatsAppLink(messages.budget)}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-cyan-500 hover:bg-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.35)] transition-all duration-300 px-8 py-4 rounded-2xl font-semibold text-black flex items-center gap-3"
              >

                <MessageCircle size={22} />

                Solicitar Orçamento

                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition"
                />

              </a>

              <a
                href="#serviços"
                className="border border-white/10 hover:border-cyan-400/40 hover:bg-cyan-400/10 transition-all duration-300 px-8 py-4 rounded-2xl font-semibold text-white"
              >

                Conhecer Serviços

              </a>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  )
}

export default CTA