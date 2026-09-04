import { IGDBRequest } from "..";

type GamePopularity = {
  id: number;
  game_id: number;
  value: number;
}

export async function getMostWantToPlay(gameIds: number[]) {
  return await IGDBRequest<GamePopularity[]>(
    'popularity_primitives',
    `
      fields game_id, popularity_type, value;
      where game_id = (${gameIds.join(',')})
        & popularity_type = 2;
      limit 500;
    `
  );
}