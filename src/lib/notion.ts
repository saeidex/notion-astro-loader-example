import { Client } from "@notionhq/client";

export const notion = new Client({
  auth: import.meta.env.NOTION_TOKEN,
});

export const fetchPages = async () => {
  return await notion.databases.query({
    database_id: import.meta.env.NOTION_DATABASE_ID,
  });
};
