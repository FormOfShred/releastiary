import type { Express, Request, Response } from 'express';
import { IGDBRequest } from '..';
import { Game } from './types';
import { getCover } from '../utils/image';
import { getMostWantToPlay } from '../utils/popularity';

export function registerGameRoutes(app: Express) {
  app.get(`/games`, async (req: Request, res: Response) => {
    try {
      const selectedDate = Number(req.query.selectedDate);
      const selectedPlatform =
        req.query.selectedPlatform !== undefined
          ? Number(req.query.selectedPlatform)
          : undefined;


      if (!Number.isFinite(selectedDate)) {
        res.status(400).json({
          error: 'selectedDate must be a valid Unix timestamp',
        });
        return;
      }
      
      const startOfDay = new Date(selectedDate);
      startOfDay.setHours(0, 0, 0, 0);

      const endOfDay = new Date(selectedDate);
      endOfDay.setHours(23, 59, 59, 999);

      const platformQuery =
        selectedPlatform !== undefined
          ? `& platforms = (${selectedPlatform})`
          : '';


      const games = await IGDBRequest<Game[]>(
        'games',
        `
          fields id, name, platforms, cover;
          where first_release_date >= ${Math.floor(startOfDay.getTime() / 1000)}
            & first_release_date <= ${Math.floor(endOfDay.getTime() / 1000)}
            ${platformQuery};
          limit 500;
        `
      );

      // Get additional information
      const [covers, wantToPlay] = await Promise.all(
        [
          getCover(
            [
              ...new Set(
                games
                  .map(game => game.cover)
                  .filter((cover): cover is number => typeof cover === 'number')
              )
            ]
          ),
          getMostWantToPlay(
            games.map(game => game.id)
          ),
        ]
      );

      // Mapping
      const coverMap = new Map(
        covers.map(cover => [
          cover.id,
          cover.image_id,
        ])
      );

      const wantToPlayMap = new Map(
        wantToPlay.map(item => [item.game_id, item.value])
      );

       const result = games
        .map(game => {
          return {
            ...game,
            popularity_value: wantToPlayMap.get(game.id) ?? 0,
            cover: game.cover
              ? coverMap.get(game.cover) ?? ''
              : '',
          };
        })
        .sort((a, b) => b.popularity_value - a.popularity_value);

      res.json(result);
    } catch (error) {
      console.error(error);

      res.status(500).json({
        error,
      });
    }
  })
}