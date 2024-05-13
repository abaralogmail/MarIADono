// EmbeddingLocal.ts
import {
  ContextChatEngine,
  Document,
  Settings,
  VectorStoreIndex,
} from "llamaindex";
//import { Document, VectorStoreIndex } from "llamaindex";
import OpenAI from "openai";
import fs from "fs/promises";


class EmbeddingLocal {
  private index: VectorStoreIndex;
  private documentObj: Document;

  constructor() {
    // Configura LlamaIndex con tus preferencias (por ejemplo, el modelo de embeddings)
    //this.index = VectorStoreIndex.fromDocuments([]);

  }

  async retrieveDataFromDocument(): Promise<string> {
    // Implementa la lógica para recuperar datos del documento no estructurado
    // y agregarlos al índice
    // ...
    console.log("retrieveDataFromDocument - Prompt...");
    const essay = await fs.readFile("./src/services/openai/prompt.ts", "utf-8",);
    console.log("retrieveDataFromDocument - essay: " + essay);
    const documentObj = new Document({ text: essay });
    //console.log(this.documentObj.text);
    this.index = await VectorStoreIndex.fromDocuments([documentObj]);
    console.log("retrieveDataFromDocument - this.index: ok");


   /* 
    console.log("Retrieving data from index :" + this.index.toString());
    const retriever = this.index.asRetriever();
    retriever.similarityTopK = 5;
    const chatEngine = new ContextChatEngine({ retriever });

    console.log("ChataEngine");
    const stream = await chatEngine.chat({ message: "Cursos"});
*/
  
    /*
    console.log("Performing query...");
    const queryEngine = this.index.asQueryEngine();
    const response = await queryEngine.query({
      query: "What did the author do in college?",
    });*/

   // console.log("stream: "+stream.toString());
//    const response = await chatEngine.chat({ message: "Cursos" });


    // Create Document object with essay
   // console.log("stream: " + stream);
   return "Retorna RetrieveDataFromDocument";
        
  }

  async chatQuery(query: string): Promise<string> {
    
    console.log("chatQuery - Retrieving data from index :");
    const retriever = this.index.asRetriever();
    retriever.similarityTopK = 5;
    const chatEngine = new ContextChatEngine({ retriever });
    console.log("chatQuery - ChataEngine");
    const stream = await chatEngine.chat({ message: "Cursos"});
    console.log("chatQuery - stream: "+stream.toString());
    return stream.toString();


/*    console.log("Retrieving data from index...");
    this.index = await VectorStoreIndex.fromDocuments([this.documentObj]);
    console.log("asQueryEngine...");
    const queryEngine = this.index.asQueryEngine();
    console.log("asQueryEngine.query");
    const response = await queryEngine.query({
      query: "donde queda la torre Eifel"
    });

    console.log("response: " + response);
    return response.toString();*/
  }
}

export default EmbeddingLocal;
