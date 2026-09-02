import { IGDBRequest } from "..";

export type Cover = {
  id: number;
  image_id: string;
}

export async function getCover(coverIds: number[]) {
  if (coverIds.length === 0) {
    return [];
  }

  const query = `
    fields id, image_id;
    where id = (${coverIds.join(',')});
    limit 500;
  `;

  return await IGDBRequest<Cover[]>(
    'covers',
    query
  );
}