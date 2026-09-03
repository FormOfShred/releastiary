import { useEffect, useState } from "react";
import GameCard from "./GameCard";
import type { Game } from "@/types/game";
import { getGames } from "@/service/Game/game";
import { Card, CardHeader } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

type GameGridProps = {
  selectedDate: Date;
  selectedPlatform?: number;
}

const GameGrid = ({ selectedDate, selectedPlatform }: GameGridProps) => {
  const [games, setGames] = useState<Game[]>([]);
  
  const [loadingGames, setLoadingGames] = useState<boolean>(true);

  useEffect(() => {
    const fetchGames = async ({ selectedDate, selectedPlatform }: {selectedDate: Date, selectedPlatform?: number}) => {
      setLoadingGames(true);
      try {
        const data = await getGames({selectedDate, selectedPlatform});
        setGames(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoadingGames(false)
      }
    }

    fetchGames({selectedDate, selectedPlatform});
  }, [selectedDate, selectedPlatform]);

  return (
    <div className="max-w-6xl mx-auto p-5 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
      {
        loadingGames ? 
          <Card className="bg-background">
            <Skeleton className="object-cover mx-4 rounded-sm h-80" />
            <CardHeader>
              <Skeleton className="h-[15px] w-[20px] rounded-full" />
              <Skeleton className="h-[20px] w-[100px] rounded-full" />
            </CardHeader>
          </Card>
        :
        games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))
      }
    </div>
  )
}

export default GameGrid;