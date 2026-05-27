import { useState } from "react"

import { motion } from "framer-motion"

import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  LoaderCircle
} from "lucide-react"

import {
  createContactMessage,
  openWhatsApp
} from "../../utils/whatsapp"

function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    service: "",
    description: ""
  })

  const [errors, setErrors] = useState({})

  const [isSubmitting, setIsSubmitting] = useState(false)

  function handleChange(e) {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })

    setErrors({
      ...errors,
      [e.target.name]: ""
    })
  }

  function validateForm() {

    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = "Informe seu nome"
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Informe seu telefone"
    }

    if (!formData.service.trim()) {
      newErrors.service = "Informe o serviço desejado"
    }

    if (!formData.description.trim()) {
      newErrors.description = "Descreva seu projeto"
    }

    return newErrors
  }

  async function handleSubmit(e) {

    e.preventDefault()

    const validationErrors = validateForm()

    if (Object.keys(validationErrors).length > 0) {

      setErrors(validationErrors)

      return
    }

    setIsSubmitting(true)

    const message = createContactMessage(formData)

    setTimeout(() => {

      openWhatsApp(message)

      setIsSubmitting(false)

    }, 1200)
  }

  function inputClass(field) {

    return `
      w-full bg-black/20 border rounded-2xl
      px-5 py-4 md:py-5
      outline-none transition-all duration-300
      text-white placeholder:text-slate-500
      ${errors[field]
        ? "border-red-500"
        : "border-white/10 focus:border-cyan-400 focus:bg-cyan-400/[0.03]"
      }
    `
  }

  return (
    <section
      id="contato"
      className="relative py-32 px-6 overflow-hidden"
    >

      {/* BACKGROUND */}

      <div className="absolute inset-0">

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-cyan-500/5 blur-[180px]" />

      </div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* HEADER */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >

          <span className="border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 px-4 py-2 rounded-full text-sm tracking-widest uppercase">

            Contato

          </span>

          <h2 className="text-4xl md:text-6xl font-black mt-8 leading-tight">

            Vamos construir sua
            <span className="text-cyan-400">
              {" "}infraestrutura inteligente
            </span>

          </h2>

          <p className="text-slate-400 max-w-3xl mx-auto mt-6 text-lg leading-relaxed">

            Entre em contato para desenvolver projetos modernos
            de automação, infraestrutura tecnológica,
            redes, CFTV inteligente e soluções SaaS.

          </p>

        </motion.div>

        {/* GRID */}

        <div className="grid grid-cols-1 xl:grid-cols-[1fr_1.15fr] gap-8 xl:gap-14 items-start">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="border border-white/10 bg-white/[0.04] backdrop-blur-2xl rounded-[32px] p-8 md:p-10 xl:p-12 h-full"
          >

            <h3 className="text-3xl xl:text-4xl font-bold mb-6 leading-tight">

              Fale com a Costa Automation

            </h3>

            <p className="text-slate-400 leading-relaxed mb-12 text-lg">

              Projetamos soluções inteligentes para empresas,
              residências e operações técnicas que precisam
              de confiabilidade, automação e tecnologia moderna.

            </p>

            <div className="space-y-8">

              {/* PHONE */}

              <div className="flex items-start gap-5">

                <div className="border border-cyan-400/20 bg-cyan-400/10 p-4 rounded-2xl">

                  <Phone
                    className="text-cyan-400"
                    size={24}
                  />

                </div>

                <div>

                  <h4 className="font-semibold text-lg mb-1">
                    Telefone
                  </h4>

                  <p className="text-slate-400 text-lg">
                    (75) 98358-5959
                  </p>

                </div>

              </div>

              {/* EMAIL */}

              <div className="flex items-start gap-5">

                <div className="border border-cyan-400/20 bg-cyan-400/10 p-4 rounded-2xl">

                  <Mail
                    className="text-cyan-400"
                    size={24}
                  />

                </div>

                <div>

                  <h4 className="font-semibold text-lg mb-1">
                    E-mail
                  </h4>

                  <p className="text-slate-400 text-lg break-all">
                    contato@costaautomation.com
                  </p>

                </div>

              </div>

              {/* LOCATION */}

              <div className="flex items-start gap-5">

                <div className="border border-cyan-400/20 bg-cyan-400/10 p-4 rounded-2xl">

                  <MapPin
                    className="text-cyan-400"
                    size={24}
                  />

                </div>

                <div>

                  <h4 className="font-semibold text-lg mb-1">
                    Localização
                  </h4>

                  <p className="text-slate-400 text-lg">
                    Bahia • Brasil
                  </p>

                </div>

              </div>

            </div>

          </motion.div>

          {/* FORM */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="border border-white/10 bg-white/[0.04] backdrop-blur-2xl rounded-[32px] p-8 md:p-10 xl:p-12"
          >

            <form
              onSubmit={handleSubmit}
              className="space-y-7"
            >

              {/* NAME */}

              <div>

                <label className="block text-sm text-slate-400 mb-3">

                  Nome *

                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Seu nome"
                  className={inputClass("name")}
                />

                {
                  errors.name && (
                    <p className="text-red-400 text-sm mt-2">
                      {errors.name}
                    </p>
                  )
                }

              </div>

              {/* COMPANY */}

              <div>

                <label className="block text-sm text-slate-400 mb-3">

                  Empresa

                </label>

                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Nome da empresa"
                  className={inputClass("company")}
                />

              </div>

              {/* PHONE */}

              <div>

                <label className="block text-sm text-slate-400 mb-3">

                  Telefone *

                </label>

                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(00) 00000-0000"
                  className={inputClass("phone")}
                />

                {
                  errors.phone && (
                    <p className="text-red-400 text-sm mt-2">
                      {errors.phone}
                    </p>
                  )
                }

              </div>

              {/* SERVICE */}

              <div>

                <label className="block text-sm text-slate-400 mb-3">

                  Serviço desejado *

                </label>

                <input
                  type="text"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  placeholder="Ex: Automação, CFTV, Redes..."
                  className={inputClass("service")}
                />

                {
                  errors.service && (
                    <p className="text-red-400 text-sm mt-2">
                      {errors.service}
                    </p>
                  )
                }

              </div>

              {/* DESCRIPTION */}

              <div>

                <label className="block text-sm text-slate-400 mb-3">

                  Descrição do projeto *

                </label>

                <textarea
                  rows="7"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Descreva seu projeto..."
                  className={inputClass("description")}
                />

                {
                  errors.description && (
                    <p className="text-red-400 text-sm mt-2">
                      {errors.description}
                    </p>
                  )
                }

              </div>

              {/* BUTTON */}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-cyan-400 hover:bg-cyan-300 disabled:bg-cyan-400/60 text-black font-bold py-5 rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 hover:shadow-[0_0_30px_rgba(34,211,238,0.35)]"
              >

                {
                  isSubmitting ? (
                    <>
                      <LoaderCircle
                        size={20}
                        className="animate-spin"
                      />

                      Abrindo WhatsApp...
                    </>
                  ) : (
                    <>
                      Solicitar Orçamento

                      <ArrowRight size={20} />
                    </>
                  )
                }

              </button>

            </form>

          </motion.div>

        </div>

      </div>

    </section>
  )
}

export default Contact