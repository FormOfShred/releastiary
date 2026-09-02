import GameCard from "./GameCard";

const GameGrid = () => {
  return (
    <div className="max-w-6xl mx-auto p-5 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
      <GameCard />
      <GameCard />
      <GameCard />
    </div>
  )
}

export default GameGrid;