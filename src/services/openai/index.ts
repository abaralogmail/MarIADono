import OpenAI from "openai";
import { ChatCompletionMessageParam, Embeddings } from "openai/resources";
import { generatePrompt, generatePromptDetermine } from "./prompt";
import { NotionCourseClient } from "src/Notion/NotionCourseClient";
import { InmobiliariaDB } from "./InmobiliariaDB";
import EmbeddingLocal from "./embeddingLocal";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

/**
 * 
 * @param name 
 * @param history 
 */
const run = async (name: string, history: ChatCompletionMessageParam[]): Promise<string> => {

    //NotionDb
    /* const notion = new NotionCourseClient();
     const courses = await notion.getCourses();
     console.log("courses :", courses.toString());
 */
    console.log("run - EmbeddingLocal");
    const embed = new EmbeddingLocal;
    console.log("run - Ejecuta embed.retrieveDataFromDocument();");
    embed.retrieveDataFromDocument();
    console.log("run - embed.chatQuery(name);");
    const response = embed.chatQuery(name);
    //return "Embed.chatQuery(name)";


    /*
        const promtp = generatePrompt(name)
        console.log(promtp);
        /*
        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [
                {
                    "role": "system",
                    "content": promtp
                },
                ...history
            ],
            temperature: 1,
            max_tokens: 800,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
        });*/
        //console.log("response :"+ response);
        return response
        //return response.choices[0].message.content
}


const runDetermine = async (history: ChatCompletionMessageParam[]): Promise<string> => {
/*
    const promtp = generatePromptDetermine()
    const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
            {
                "role": "system",
                "content": promtp
            },
            ...history
        ],
        temperature: 1,
        max_tokens: 800,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
    });
    return response.choices[0].message.content*/
    return "HOla";
}

export { run, runDetermine }


