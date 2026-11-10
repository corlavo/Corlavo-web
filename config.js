/* ============================================================
   CORLAVO — contenido editable sin tocar el diseño.
   Cambia aquí los precios, enlaces y supuestos de la calculadora.
   El texto de ejemplo del HTML se reemplaza con estos valores al cargar.
   Precios en MXN, sin IVA. Son una hipótesis a validar con las primeras clínicas.
   ============================================================ */
window.CORLAVO = {
  links: {
    calendly: "https://calendly.com/corlavocontact/demo-corlavo-20-min",
    email: "hola@corlavo.com",
    instagram: "https://instagram.com/corlavo.mx",
    // Número de WhatsApp de CORLAVO con lada del país y solo dígitos (ej. 5215512345678).
    // Mientras esté vacío, los botones de WhatsApp se ocultan.
    whatsapp: ""
  },

  planes: {
    presencia: {
      instalacion: 6900,
      mensual: 990,
      // Enlaces de pago de Mercado Pago. Mientras estén vacíos no se muestra el botón.
      // Créalos desde tu cuenta de Mercado Pago (Link de pago / Suscripción).
      pagoInstalacion: "",
      pagoMensual: ""
    },
    agenda: {
      instalacion: 9900,
      mensual: 3900,
      pagoInstalacion: "",
      pagoMensual: ""
    },
    crecimiento: {
      instalacion: 14900,
      mensual: 7900,
      pagoInstalacion: "",
      pagoMensual: ""
    }
  },

  fundadoras: { cupo: 5, descuento: 40 },

  // Valores iniciales y supuestos de la calculadora de pacientes perdidos.
  calculadora: {
    citasPorSemana: 40,
    inasistenciaPct: 15,
    valorCita: 1200,
    mensajesSinResponder: 10,
    // Supuesto: de cada mensaje sin responder, qué fracción se habría vuelto cita.
    conversionMensajes: 0.2,
    // Qué parte de lo perdido se supone recuperable en el escenario conservador.
    recuperacion: 0.5
  }
};
