import { motion } from "framer-motion"

import {
  ShieldCheck,
  Cpu,
  Network,
  Zap
} from "lucide-react"

import {
  createWhatsAppLink,
  messages
} from "../../utils/whatsapp"

function Hero() {

  const floatingCards = [
    {
      icon: ShieldCheck,
      title: "CFTV Inteligente",
      position: "top-28 left-6"
    },
    {
      icon: Network,
      title: "Redes Estruturadas",
      position: "bottom-28 left-8"
    },
    {
      icon: Cpu,
      title: "Automação",
      position: "top-36 right-6"
    },
    {
      icon: Zap,
      title: "Elétrica Industrial",
      position: "bottom-28 right-8"
    },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 pt-24 md:pt-28 pb-16 md:pb-20">

      {/* BACKGROUND GLOW */}

      <div className="absolute inset-0">

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[380px] md:w-[650px] h-[380px] md:h-[650px] bg-cyan-500/10 blur-[120px] md:blur-[160px]" />

        <div className="absolute bottom-0 right-0 w-[260px] md:w-[450px] h-[260px] md:h-[450px] bg-blue-600/10 blur-[120px] md:blur-[160px]" />

      </div>

      {/* FLOATING CARDS */}

      {
        floatingCards.map((card, index) => {

          const Icon = card.icon

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.2
              }}
              className={`hidden xl:flex absolute ${card.position} border border-white/10 bg-white/5 backdrop-blur-xl rounded-2xl px-4 py-3 items-center gap-3`}
            >

              <div className="bg-cyan-500/20 p-3 rounded-xl">

                <Icon
                  className="text-cyan-400"
                  size={20}
                />

              </div>

              <span className="text-sm text-slate-300">
                {card.title}
              </span>

            </motion.div>
          )
        })
      }

      {/* MAIN CONTENT */}

      <div className="relative z-10 w-full max-w-5xl mx-auto text-center">

        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          <span className="border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 px-4 py-2 rounded-full text-[11px] sm:text-sm tracking-[0.2em] uppercase">

            Costa Sistemas Inteligentes

          </span>

        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.2
          }}
          className="mt-6 md:mt-8 text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-black leading-[1.05]"
        >

          Automação Inteligente,

          <span className="text-cyan-400">
            {" "}Infraestrutura{" "}
          </span>

          e Sistemas Profissionais

        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            delay: 0.5
          }}
          className="mt-5 md:mt-6 text-slate-400 text-sm sm:text-base md:text-xl max-w-3xl mx-auto leading-relaxed px-2"
        >

          Soluções modernas em CFTV,
          redes estruturadas,
          elétrica industrial,
          automação inteligente
          e desenvolvimento de sistemas profissionais.

        </motion.p>

        {/* BUTTONS */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.8
          }}
          className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4 mt-8 md:mt-10 w-full max-w-md sm:max-w-none mx-auto"
        >

          <a
            href={createWhatsAppLink(messages.budget)}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-cyan-500 hover:bg-cyan-400 transition-all duration-300 px-6 py-3.5 rounded-2xl font-semibold text-black shadow-lg shadow-cyan-500/20 hover:shadow-[0_0_30px_rgba(34,211,238,0.35)] text-sm md:text-base"
          >
            Solicitar Orçamento
          </a>

          <a
            href="#serviços"
            className="border border-slate-700 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 px-6 py-3.5 rounded-2xl font-semibold text-sm md:text-base"
          >
            Conhecer Serviços
          </a>

        </motion.div>

        {/* STATS */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            delay: 1
          }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mt-14 md:mt-16"
        >

          <div>

            <h3 className="text-2xl md:text-4xl font-black text-cyan-400">
              100+
            </h3>

            <p className="text-slate-400 mt-2 text-xs sm:text-sm md:text-base">
              Projetos
            </p>

          </div>

          <div>

            <h3 className="text-2xl md:text-4xl font-black text-cyan-400">
              24/7
            </h3>

            <p className="text-slate-400 mt-2 text-xs sm:text-sm md:text-base">
              Suporte
            </p>

          </div>

          <div>

            <h3 className="text-2xl md:text-4xl font-black text-cyan-400">
              IA
            </h3>

            <p className="text-slate-400 mt-2 text-xs sm:text-sm md:text-base">
              Integrações
            </p>

          </div>

          <div>

            <h3 className="text-2xl md:text-4xl font-black text-cyan-400">
              SaaS
            </h3>

            <p className="text-slate-400 mt-2 text-xs sm:text-sm md:text-base">
              Escalável
            </p>

          </div>

        </motion.div>

      </div>

    </section>
  )
}

export default Hero