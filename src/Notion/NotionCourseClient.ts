import { Client } from "@notionhq/client";

export class NotionCourseClient {

  private notion: Client;

  constructor() {
    this.notion = new Client({
      auth: process.env.NOTION_API_KEY
    });
  }

  
async getCourses() {
const response = await this.notion.databases.query({
database_id: "c57138e021dd478d8be823e453b0dc4d",
filter: {
property: "Fecha de Inicio",
date: {
after: new Date().toISOString()
}
/*      property: "Tipo",
select: {
equals: "Curso"
}*/
}
});


return response.results.map(result => {
const properties = (result as any).properties;
return {
id: result.id,
name: properties.Nombre.title[0]?.plain_text || '',
description: properties.Descripción.rich_text[0]?.plain_text || ''
};
});
}

}