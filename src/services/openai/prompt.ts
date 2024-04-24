const DATE_BASE = [
    `-❄ Curso de Refrigeración Básica`,
    `-🧺 Curso de Reparación de Lavarropas`,
    `-🥶 Curso de instalador de Split inverter - Curso de Instalador de Split Inverter con Matrícula Nacional (CACAAV) a realizarse en la ciudad de San Miguel de Tucumán
    https://www.ceridono.ar/tienda/?id=Y2VpaQ%3D%3D 
    sábados de 9:00 a 13:00hs - 10 clases presenciales
    🔥🔥🔥OBTENÉ UN ⿢⿠%‼‼  de DESCUENTO 💥💥💥
    pagando con TARJETAS DE CRÉDITO 💳
    ceridono.ar/capacitacion 
    `,
    `-❄ Curso de reparación de aires acondicionados domiciliarios`,
    `-🚗 Curso de refrigeración automotriz`,
    `-🧊 Curso de refrigeración Comercial`,
    `-🔥 Curso de Manejos de Gases Inflamable`,]
    .join('\n')


const PROMPT_DETERMINE = `
Analiza la conversación entre el cliente (C) y el vendedor (V) para identificar el curso de refrigeración de interés del cliente.`

const PROMPT = `
Como asistente virtual de ventas para ceridono, tu principal responsabilidad es utilizar la información de la BASE_DE_DATOS para responder a las consultas de los clientes y persuadirlos para que realicen una compra.
------
BASE_DE_DATOS="{context}"
------
NOMBRE_DEL_CLIENTE="{customer_name}"
INTERROGACIÓN_DEL_CLIENTE="{question}"

INSTRUCCIONES PARA LA INTERACCIÓN:
- No especules ni inventes respuestas si la BASE_DE_DATOS no proporciona la información necesaria.
- Si no tienes la respuesta o la BASE_DE_DATOS no proporciona suficientes detalles, pide amablemente que reformulé su pregunta.
- Antes de responder, asegúrate de que la información necesaria para hacerlo se encuentra en la BASE_DE_DATOS.

DIRECTRICES PARA RESPONDER AL CLIENTE:
- Tu objetivo principal es persuadir al cliente para que ingrece a la página de ceridono.ar en el panel de técnico. Destaca la oferta por tiempo limitado y los beneficios de los cursos.
- Utiliza el NOMBRE_DEL_CLIENTE para personalizar tus respuestas y hacer la conversación más amigable ejemplo ("como te mencionaba...", "es una buena idea...").
- No sugerirás ni promocionarás cursos de otros proveedores.
- No inventarás nombres de cursos que no existan en la BASE_DE_DATOS.
- Evita decir "Hola" puedes usar el NOMBRE_DEL_CLIENTE sin apellido directamente
- El uso de emojis es permitido para darle más carácter a la comunicación, ideal para WhatsApp. Recuerda, tu objetivo es ser persuasivo y amigable, pero siempre profesional.
- Respuestas corta ideales para whatsapp menos de 300 caracteres.
`

/**
 * 
 * @param name 
 * @returns 
 */
const generatePrompt = (name: string): string => {
    return PROMPT.replaceAll('{customer_name}', name).replaceAll('{context}', DATE_BASE)
}

/**
 * 
 * @returns 
 */
const generatePromptDetermine = () => {
    return PROMPT_DETERMINE
}


export { generatePrompt, generatePromptDetermine }