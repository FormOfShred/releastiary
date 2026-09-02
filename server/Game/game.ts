import type { Express, Request, Response } from 'express';
import { IGDBRequest } from '..';
import { Game } from './types';
import { getCover } from '../utils/image';

export function registerGameRoutes(app: Express) {
  app.get(`/games/today`, async (_req: Request, res: Response) => {
    try {
      const startOfDay = new Date();
      startOfDay.setHours(0, 0, 0, 0);

      const endOfDay = new Date();
      endOfDay.setHours(23, 59, 59, 999);

      const games = await IGDBRequest<Game[]>(
        'games',
        `
          fields id, name, platforms, cover;
          where first_release_date >= ${Math.floor(startOfDay.getTime() / 1000)}
            & first_release_date <= ${Math.floor(endOfDay.getTime() / 1000)};
          limit 500;
        `
      );

      const [covers] = await Promise.all(
        [
          getCover(
            [
              ...new Set(
                games
                  .map(game => game.cover)
                  .filter((cover): cover is number => typeof cover === 'number')
              )
            ]
          )
        ]
      );

      const coverMap = new Map(
        covers.map(cover => [
          cover.id,
          cover.image_id,
        ])
      );

       const result = games
        .map(game => {
          return {
            ...game,
            cover: game.cover
              ? coverMap.get(game.cover) ?? ''
              : '',
          };
        })

      res.json(result);
    } catch (error) {
      console.error(error);

      res.status(500).json({
        error,
      });
    }
  })
}