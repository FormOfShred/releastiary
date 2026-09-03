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
    `${import.meta.env.VITE_BACKEND_URL}/games?selectedDate=${timestamp}`
  );

  if (!response.ok) {
    throw new Error('Failed to fetch games');
  }

  return response.json();
}