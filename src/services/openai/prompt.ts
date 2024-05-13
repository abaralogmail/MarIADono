const DATE_BASE = [
    `1- CURSO INSTALADOR SPLIT CON TECNOLOGIA INVERTER
     En este curso se estudian los conceptos básicos de la refrigeración y procedimientos técnicos, brindando al alumno todo el conocimiento, capacitacion y practica necesarios para poder realizar la correcta instalación de un aire acondicionado tipo Split domiciliar. Incluyendo aquellos equipos con tecnología Inverter. Ademas de, una vez finalizado y aprobado el curso, tener la posibilidad de gestionar la matricula de instalador Split, otorgada por la CACAAV, mediante un convenio exclusivo con Ceridono.
     Duración: 10 clases presenciales teóricas/prácticas.Los días LUNES de 15 a 19hs. Comienzo del curso LUNES 3 DE JUNIO.
     `,

    `2- CURSO DE REFRIGERACION BASICA 
    En este curso el alumno aprende todos los conceptos de la refrigeración básica, incluyendo los fundamentos de electricidad, junto con la practica, para realizar el mantenimiento y la reparación equipos tipo heladeras y freezer domiciliarios.
    Duración: 10 clases presenciales teóricas/practicas los días  MARTES de 15 a 19hs. Fecha de inicio: MARTES 7 DE MAYO
    `,

    `3- CURSO REPARACION DE LAVARROPAS
    En este curso el alumno adquiere todos los conocimientos básicos de teoría electromecánica , junto con la practica, necesarios para realizar el mantenimiento y la reparación de lavarropas familiares automaticos y semiautomaticos, incluyendo los de tecnologia Inverter.
    Duración: 10 clases presenciales teóricas/practicas los días JUEVES de 15 a 19hs.
    Fecha de inicio: JUEVES 9 DE MAYO
    `,

    `4- CURSO DE MANTENIMIENTO Y REPARACIÓN DE AIRE ACONDICIONADO.
    En este curso el alumno aprende todos los conceptos de la refrigeración, incluyendo los fundamentos de electricidad, junto con la practica, para realizar el mantenimiento y la reparación de aires acondicionados.
    Duración: 10 clases presenciales teóricas/practicas los días VIERNES de 15 a 19hs.
    Fecha de inicio: VIERNES 07 DE JUNIO
    `,

    `CERIDONO
    Salta Casa Central, Juan Bautista Alberdi 1079, Salta Capital, Tel: 03874237398.
    Sucursal Metan, Las Heras 206, Metán, Tel: 3876621962.
    Tucumán, Ventas, Don Bosco 1608, Tel: 3815100413
    Sucursal Jujuy, Av. Éxodo Jujeño 743, San Salvador de Jujuy, Tel: 388 5712603
    Servicio Técnico, Esteco 1080, Salta Capital, Tel: 03874233742.
    Sucursal Salta, Ventas, Zuviria 1527, Salta Capital, Tel: 03872454306.
    Distribuidora Mahle, Ventas, Avenida Chile 1517, Salta Capital, Tel: 3874664047
    Sucursal Metan, Ventas, Las Heras 206, Metán, Tel: 3876621962.
-   https://www.ceridono.ar/tecnicos/ para registrarse.
-   https://www.ceridono.ar/capacitacion/ para precios en información de los cursos.
`,

]
    .join('\n')


const PROMPT_DETERMINE = `identificar el curso de refrigeración de interés del cliente.`

const PROMPT = `
Eres MariaDono asistente virtual de ventas para Ceridono refrigeración (repuestos y capacitación).
- Respuestas cortas menos de 100 caracteres.
- No agregues ninguna información que no se te ha proporcionado.
- Tu objetivo principal es persuadir al cliente para que ingrese a la página https://www.ceridono.ar/tecnicos/ para registrarse. 
- Agrega emojis.
- Puedes pagar con tarjeta de crédito con un 25% de descuento solo por esta semana del trabajador.
- No dar ningún precios
- para comunicarse con la operadora llamar de 16 a 20hs a 3875218575.
- Evita usar el NOMBRE_DEL_CLIENTE.
- Puedes cerrar con una pregunta.

------
BASE_DE_DATOS="{context}"
------
NOMBRE_DEL_CLIENTE="{customer_name}"
INTERROGACIÓN_DEL_CLIENTE="{question}"
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