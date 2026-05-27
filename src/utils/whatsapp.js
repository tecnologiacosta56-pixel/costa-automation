const phone = "5575983585959"

export function createWhatsAppLink(message) {

  const encodedMessage = encodeURIComponent(message)

  return `https://wa.me/${phone}?text=${encodedMessage}`
}

/*
|--------------------------------------------------------------------------
| DEFAULT MESSAGES
|--------------------------------------------------------------------------
*/

export const messages = {

  default:
    "Olá, vim pelo site da Costa Automation e gostaria de mais informações.",

  budget:
    `Olá, vim pelo site da Costa Automation e gostaria de solicitar um orçamento.

Serviço desejado:
- 

Cidade:
- 

Tipo de ambiente:
- 

Descrição do projeto:
- `,

  cftv:
    "Olá, gostaria de um orçamento para sistema de CFTV inteligente.",

  automation:
    "Olá, gostaria de informações sobre automação inteligente.",

  network:
    "Olá, gostaria de informações sobre redes estruturadas."
}

/*
|--------------------------------------------------------------------------
| CONTACT FORM MESSAGE
|--------------------------------------------------------------------------
*/

export function createContactMessage(data) {

  return `
Olá, vim pelo site da Costa Automation e gostaria de solicitar um orçamento.

Nome:
${data.name || "-"}

Empresa:
${data.company || "-"}

Telefone:
${data.phone || "-"}

Serviço desejado:
${data.service || "-"}

Descrição do projeto:
${data.description || "-"}
`
}

/*
|--------------------------------------------------------------------------
| OPEN WHATSAPP
|--------------------------------------------------------------------------
*/

export function openWhatsApp(message) {

  const link = createWhatsAppLink(message)

  window.open(link, "_blank")
}