import { Menu, X } from "lucide-react"
import { useState } from "react"

import logo from "../../assets/images/logo.png"

import {
  createWhatsAppLink,
  messages
} from "../../utils/whatsapp"

function Navbar() {

  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    "Sobre",
    "Serviços",
    "Projetos",
    "Tecnologias",
    "Contato"
  ]

  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-[#050816]/85 backdrop-blur-2xl">

      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <div className="flex items-center justify-between h-[88px] md:h-24">

          {/* LOGO */}

          <a
            href="#"
            className="flex items-center gap-3 group min-w-0"
          >

            <div className="relative flex-shrink-0">

              <img
                src={logo}
                alt="Costa Automation"
                className="h-20 sm:h-20 md:h-24 w-auto object-contain group-hover:scale-105 transition duration-300"
              />

              <div className="absolute inset-0 bg-cyan-400/20 blur-2xl opacity-70 -z-10" />

            </div>

            <div className="hidden sm:block min-w-0">

              <h1 className="text-2xl md:text-3xl font-black tracking-tight leading-none truncate">

                Costa
                <span className="text-cyan-400">
                  {" "}Automation
                </span>

              </h1>

              <p className="text-[10px] md:text-xs text-slate-500 mt-1 tracking-[0.30em] uppercase">

                Sistemas Inteligentes

              </p>

            </div>

          </a>

          {/* MENU DESKTOP */}

          <nav className="hidden md:flex items-center gap-8">

            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-slate-300 hover:text-cyan-400 transition duration-300"
              >
                {item}
              </a>
            ))}

          </nav>

          {/* CTA */}

          <div className="hidden md:flex">

            <a
              href={createWhatsAppLink(messages.default)}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-cyan-500 hover:bg-cyan-400 hover:shadow-[0_0_25px_rgba(34,211,238,0.35)] transition-all duration-300 px-6 py-3 rounded-xl font-semibold text-black"
            >
              WhatsApp
            </a>

          </div>

          {/* MOBILE BUTTON */}

          <button
            className="md:hidden flex items-center justify-center w-12 h-12 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-300 hover:border-cyan-400/30"
            onClick={() => setIsOpen(!isOpen)}
          >

            {
              isOpen
                ? <X size={25} />
                : <Menu size={25} />
            }

          </button>

        </div>

      </div>

      {/* MOBILE MENU */}

      {
        isOpen && (
          <div className="md:hidden border-t border-white/10 bg-[#050816]/95 backdrop-blur-2xl">

            <div className="flex flex-col px-5 py-6 gap-3">

              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-slate-300 hover:text-cyan-400 transition py-3 text-lg border-b border-white/5"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              ))}

              <a
                href={createWhatsAppLink(messages.default)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 bg-cyan-500 hover:bg-cyan-400 transition-all duration-300 text-black rounded-2xl py-4 font-semibold text-center shadow-lg shadow-cyan-500/20 text-base"
              >
                WhatsApp
              </a>

            </div>

          </div>
        )
      }

    </header>
  )
}

export default Navbar