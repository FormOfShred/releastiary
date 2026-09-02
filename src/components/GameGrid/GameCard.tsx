import type { Game } from "@/types/game";
import { Badge } from "../ui/badge";
import { Card, CardHeader, CardTitle } from "../ui/card";
import { formatPlatform } from "@/utils/platforms";

type GameCard = {
  game: Game;
}

const PlatformBadge = ({platform}: {platform: number}) => {
  const formattedPlatform = formatPlatform(platform);
  
  return (
    formattedPlatform && <Badge 
      variant="secondary" 
      className="text-muted-foreground"
    >
      {formattedPlatform}
    </Badge>
  )
}

const GameCard = ({ game }: GameCard) => {
  const { name, platforms, cover } = game;

  return (
    <Card className="bg-background">
      <img 
        src={`https://images.igdb.com/igdb/image/upload/t_720p_2x/${cover}.jpg`}
        className="object-cover mx-4 mt-4 rounded-sm h-80" 
      />
      <CardHeader>
        <div className="flex gap-1">
          {
            platforms.map((platform) => (
              <PlatformBadge platform={platform} />
            ))
          }
        </div>
        <CardTitle>{name}</CardTitle>
      </CardHeader>
    </Card>
  )
}

export default GameCard;