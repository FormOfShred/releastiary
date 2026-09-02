import type { Game } from "@/types/game";

export async function getTodaysGames(): Promise<Game[]> {
  const response = await fetch(
    `http://localhost:3000/games/today`
  );

  if (!response.ok) {
    throw new Error('Failed to fetch games');
  }

  return response.json();
}