import { useEffect, useState } from "react";
import GameCard from "./GameCard";
import type { Game } from "@/types/game";
import { getGames } from "@/service/Game/game";
import { Spinner } from "../ui/spinner";
import GameCardSkeleton from "./GameCardSkeleton";
import { Empty, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "../ui/empty";
import { Gamepad } from "lucide-react";

type GameGridProps = {
  selectedDate: Date;
  selectedPlatform?: number;
}

const EmptyGameGrid = () => {
  return (
    <Empty className="border border-dashed bg-muted/30 h-100">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <Gamepad />
        </EmptyMedia>
        <EmptyTitle>No games</EmptyTitle>
        <EmptyDescription>No games found for this date</EmptyDescription>
      </EmptyHeader>
    </Empty>
  )
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
    <div className="max-w-6xl mx-auto p-5 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {
        loadingGames ? 
          <>
            <GameCardSkeleton />
            <div className="flex gap-3 col-span-2 items-center">
              <Spinner className="size-8" />
              <span>Taking too long? Try refreshing</span>
            </div>
          </>
        :
        games.length > 0 ? 
          games.map((game) => (
            <GameCard key={game.id} game={game} />
          ))
          : 
          <EmptyGameGrid />
      }
    </div>
  )
}

export default GameGrid;