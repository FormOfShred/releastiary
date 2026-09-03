import type { Game } from "@/types/game";

export async function getGames(
  {
    selectedDate,
    selectedPlatform
  }: 
  {
    selectedDate: Date;
    selectedPlatform?: number | undefined;
  }
): Promise<Game[]> {
  const timestamp = selectedDate.getTime();
  
  const response = await fetch(
  `${import.meta.env.VITE_BACKEND_URL}/games?selectedDate=${timestamp}${
    selectedPlatform ? `&selectedPlatform=${selectedPlatform}` : ""
  }`
);

  if (!response.ok) {
    throw new Error('Failed to fetch games');
  }

  return response.json();
}