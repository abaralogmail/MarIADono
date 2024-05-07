import mysql from 'mysql';
/*import { Configuration, OpenAIApi } from 'openai';
import { LangChain } from 'langchain/langchain';

class WordPressMySQLDB {

  private connection: mysql.Connection;

  constructor() {
    this.connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'password',
      database: 'wordpress' 
    });
  }

  public async queryProperties(question: string) {

    // Fetch properties from MySQL
    const properties = await this.getPropertiesFromDB();

    // Create LangChain instance
    const openaiApi = new OpenAIApi(new Configuration({
      apiKey: 'sk-xxx',
    }));
    const langChain = new LangChain(openaiApi);

    // Pass properties to LangChain context
    const context = `\nProperties:\n${properties}\n`;

    // Use LangChain to query properties
    const response = await langChain.query(context + question);

    return response;

  }

  private async getPropertiesFromDB(): Promise<string> {
    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM wp_properties';
      this.connection.query(query, (error, results) => {
        if (error) return reject(error);
        let properties = '';
        results.forEach(property => {
          const { id, title, description } = property;
          properties += `- ID: ${id} Title: ${title} Description: ${description}\n`;
        });
        resolve(properties);
      });
    });
  }

}*/