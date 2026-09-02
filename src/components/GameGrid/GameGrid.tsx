import { useEffect, useState } from "react";
import GameCard from "./GameCard";
import type { Game } from "@/types/game";
import { getTodaysGames } from "@/service/Game/game";

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const data = await getTodaysGames();
        setGames(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchGames();
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-5 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
      {
        games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))
      }
    </div>
  )
}

export default GameGrid;