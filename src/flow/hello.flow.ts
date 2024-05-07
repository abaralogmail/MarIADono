import BotWhatsapp from '@bot-whatsapp/bot';
import { delay } from '@whiskeysockets/baileys';
import { InmobiliariaDB } from 'src/services/openai/InmobiliariaDB';

/**
 * Un flujo conversacion que responder a las palabras claves "hola", "buenas", ...
 */
export default BotWhatsapp.addKeyword(['prueba', 'escribiendo'])
    .addAnswer('Un gusto tenerte de nuevo ¿Como puedo ayudarte el día de hoy 😀?')
 /*   .addAction(async (ctx, {flowDynamic, state}) => {
 //       const email = state.get('email')
   //     const paypalLink = await generatePaymentLink('39.00', email)
     //   await flowDynamic(paypalLink)
     //inmobiliariaDB
      console.log("Accion");
      
     const inmobiliariaDB = new InmobiliariaDB();
      
     inmobiliariaDB.connect();
     console.log("Connected");


            inmobiliariaDB.consultarPropiedades()
            .then((propiedades) => {
                console.log('Propiedades encontradas:', propiedades);
            })
            .catch((error) => {
                console.error('Error al consultar propiedades:', error);
            })
            .finally(() => {
                inmobiliariaDB.disconnect();
            });

    })*/
    .addAction(async (ctx, {flowDynamic, state}) => {
    
        const simulateTyping = async (ctx, provider) => {
            // view message 
            await provider.vendor.readMessages([ctx?.key])
            await provider.vendor.presenceSubscribe(ctx?.key?.remoteJid)
        
            //esperar un tiempo
            await delay(3000);
            // simulare writing
            await provider.vendor.sendPresenceUpdate('composing', ctx?.key?.remoteJid)
            await delay(3000);

        }
    
    })
 