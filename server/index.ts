import express, { type Express, type Request, type Response } from 'express';
import { registerGameRoutes } from './Game/game';
import cors from "cors";

const app: Express = express();

app.use(cors());

export async function IGDBRequest<T>(
  endpoint: string,
  body: string
): Promise<T> {
  const clientId = process.env.IGDB_CLIENT_ID;
  const accessToken = process.env.IGDB_ACCESS_TOKEN;

  if (!clientId || !accessToken) {
    throw new Error('IGDB credentials are not configured');
  }

  const response = await fetch(`https://api.igdb.com/v4/${endpoint}`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Client-ID': clientId,
      Authorization: `Bearer ${accessToken}`,
    },
    body,
  });

  if (!response.ok) {
    throw new Error(
      `IGDB request failed: ${response.status} ${response.statusText}`
    );
  }

  return response.json();
}

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

registerGameRoutes(app);

app.listen(3000);