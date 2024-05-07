const DATE_BASE = [
    `1- CURSO INSTALADOR SPLIT CON TECNOLOGIA INVERTER
     En este curso se estudian los conceptos básicos de la refrigeración y procedimientos técnicos, brindando al alumno todo el conocimiento, capacitacion y practica necesarios para poder realizar la correcta instalación de un aire acondicionado tipo Split domiciliar. Incluyendo aquellos equipos con tecnología Inverter. Ademas de, una vez finalizado y aprobado el curso, tener la posibilidad de gestionar la matricula de instalador Split, otorgada por la CACAAV, mediante un convenio exclusivo con Ceridono.
     Duración: 10 clases presenciales teóricas/prácticas.Los días LUNES de 15 a 19hs.
     Comienzo del curso LUNES 3 DE JUNIO.
     Los materiales de práctica corren a cuenta del alumno, cómo también el pago de la matrícula de la CACAAV.`,
   
    `2- CURSO DE REFRIGERACION BASICA 
    En este curso el alumno aprende todos los conceptos de la refrigeración básica, incluyendo los fundamentos de electricidad, junto con la practica, para realizar el mantenimiento y la reparación equipos tipo heladeras y freezer domiciliarios.
    Duración: 10 clases presenciales teóricas/practicas los días  MARTES de 15 a 19hs.
    Fecha de inicio: MARTES 7 DE MAYO
    Los materiales que se usen para las prácticas corren a cuenta del alumno.`,

    `3- CURSO REPARACION DE LAVARROPAS
    En este curso el alumno adquiere todos los conocimientos básicos de teoría electromecánica , junto con la practica, necesarios para realizar el mantenimiento y la reparación de lavarropas familiares automaticos y semiautomaticos, incluyendo los de tecnologia Inverter.
    Duración: 10 clases presenciales teóricas/practicas los días JUEVES de 15 a 19hs.
    Fecha de inicio: JUEVES 9 DE MAYO
    Los materiales de práctica corren a cuenta de alumno.`,

    `4- CURSO DE MANTENIMIENTO Y REPARACIÓN DE AIRE ACONDICIONADO.
    En este curso el alumno aprende todos los conceptos de la refrigeración, incluyendo los fundamentos de electricidad, junto con la practica, para realizar el mantenimiento y la reparación de aires acondicionados.
    Duración: 10 clases presenciales teóricas/practicas los días VIERNES de 15 a 19hs.
    Fecha de inicio: VIERNES 07 DE JUNIO
    Los materiales de práctica corren a cuenta del alumno.`,
    ]
    .join('\n')


const PROMPT_DETERMINE = `identificar el curso de refrigeración de interés del cliente.`

const PROMPT = `
Como asistente virtual de ventas para Ceridono, tu principal responsabilidad es responder a las consultas de los clientes y persuadirlos para que realicen una compra.
------
BASE_DE_DATOS="{context}"
------
NOMBRE_DEL_CLIENTE="{customer_name}"
INTERROGACIÓN_DEL_CLIENTE="{question}"

DIRECTRICES PARA RESPONDER AL CLIENTE:
- Tu objetivo principal es persuadir al cliente para que ingrece a la página https://www.ceridono.ar/tecnicos/ para registrarse
allí puede pagar con tarjeta de crédito con un 25% de descuento solo por esta semana.
- Invitar a ceridono.ar/capacitacion para precios e información sobre los cursos.
- Cerrar siempre con una pregunta llamado a la acción.
- Evita usar el NOMBRE_DEL_CLIENTE.
- Agrega emojis para sonar mas familiar.
- Respuestas corta ideales para whatsapp menos de 250 caracteres.
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