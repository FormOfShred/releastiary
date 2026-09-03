import type { Game } from "@/types/game";

export async function getGames(
  {
    selectedDate
  }: 
  {
    selectedDate: Date;
  }
): Promise<Game[]> {
  const timestamp = selectedDate.getTime();
  const response = await fetch(
    `http://localhost:3000/games?selectedDate=${timestamp}`
  );

  if (!response.ok) {
    throw new Error('Failed to fetch games');
  }

  return response.json();
}