import {
  Mail,
  Phone,
  MapPin
} from "lucide-react"

import logo from "../../assets/images/logo.png"

function Footer() {

  const links = [
    "Sobre",
    "Serviços",
    "Tecnologias",
    "Projetos",
    "Contato"
  ]

  return (
    <footer className="relative border-t border-white/10 mt-10 overflow-hidden">

      {/* BACKGROUND */}

      <div className="absolute inset-0">

        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-cyan-500/5 blur-[180px]" />

      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">

        {/* TOP */}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12">

          {/* BRAND */}

          <div>

            <div className="flex items-center gap-4">

              <img
                src={logo}
                alt="Costa Automation"
                className="h-14 w-auto object-contain"
              />

              <div>

                <h2 className="text-2xl font-black">
                  Costa
                  <span className="text-cyan-400">
                    {" "}Automation
                  </span>
                </h2>

                <p className="text-xs text-slate-500 uppercase tracking-[0.3em]">
                  Sistemas Inteligentes
                </p>

              </div>

            </div>

            <p className="mt-6 text-slate-400 leading-relaxed">

              Soluções modernas em automação,
              infraestrutura tecnológica,
              segurança eletrônica,
              elétrica profissional
              e sistemas inteligentes.

            </p>

          </div>

          {/* LINKS */}

          <div>

            <h3 className="text-lg font-bold mb-6">
              Navegação
            </h3>

            <div className="flex flex-col gap-4">

              {
                links.map((link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    className="text-slate-400 hover:text-cyan-400 transition"
                  >
                    {link}
                  </a>
                ))
              }

            </div>

          </div>

          {/* TECHNOLOGIES */}

          <div>

            <h3 className="text-lg font-bold mb-6">
              Especialidades
            </h3>

            <div className="flex flex-col gap-4 text-slate-400">

              <span>CFTV Inteligente</span>

              <span>Automação</span>

              <span>Redes Estruturadas</span>

              <span>Infraestrutura</span>

              <span>Sistemas SaaS</span>

            </div>

          </div>

          {/* CONTACT */}

          <div>

            <h3 className="text-lg font-bold mb-6">
              Contato
            </h3>

            <div className="flex flex-col gap-5">

              <div className="flex items-center gap-3 text-slate-400">

                <Phone
                  size={18}
                  className="text-cyan-400"
                />

                <span>(75) 99999-9999</span>

              </div>

              <div className="flex items-center gap-3 text-slate-400">

                <Mail
                  size={18}
                  className="text-cyan-400"
                />

                <span>contato@costaautomation.com</span>

              </div>

              <div className="flex items-center gap-3 text-slate-400">

                <MapPin
                  size={18}
                  className="text-cyan-400"
                />

                <span>Bahia • Brasil</span>

              </div>

            </div>

            {/* SOCIAL */}

            <div className="flex items-center gap-4 mt-8">

              <button className="border border-white/10 hover:border-cyan-400/40 hover:bg-cyan-400/10 transition-all duration-300 px-4 py-3 rounded-xl text-cyan-400 font-semibold text-sm">

                Instagram

              </button>

            </div>

          </div>

        </div>

        {/* BOTTOM */}

        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-slate-500 text-sm text-center md:text-left">

            © 2026 Costa Automation.
            Todos os direitos reservados.

          </p>

          <p className="text-slate-600 text-sm text-center md:text-right">

            Desenvolvido com tecnologia,
            automação inteligente
            e arquitetura moderna.

          </p>

        </div>

      </div>

    </footer>
  )
}

export default Footer