import type { Game } from "@/types/game";
import { Badge } from "../ui/badge";
import { Card, CardHeader, CardTitle } from "../ui/card";
import { formatPlatform } from "@/utils/platforms";
import { useState } from "react";

type GameCardProps = {
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

const GameCover = ({cover, name}: {cover: string, name: string}) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return cover ? (
    <>
      <img
        src={`https://images.igdb.com/igdb/image/upload/t_720p_2x/${cover}.jpg`}
        className={`object-cover mx-4 mt-4 rounded-sm`}
        loading="lazy"
        onLoad={() =>setImageLoaded(true)}
         onError={(e) => {
          console.error("Image failed:", e);
        }}
        alt={`${name} cover`}
      />

      {!imageLoaded && (
        <div className="mx-4 rounded-sm bg-accent/20 h-80 flex items-center justify-center">
          <span className="text-muted-foreground p-2">{name}</span>
        </div>
      )}
    </>
  ) : (
    <div className="mx-4 rounded-sm bg-accent/20 h-80 flex items-center justify-center">
      <span className="text-muted-foreground p-2">{name}</span>
    </div>
  )
}

const GameCard = ({ game }: GameCardProps) => {
  const { name, platforms, cover } = game;

  return (
      <Card className="bg-background flex flex-col h-full">
        <GameCover cover={cover} name={name}/>
        <CardHeader className="mt-auto">
          <div className="flex gap-1 flex-wrap">
            {
              platforms.map((platform) => (
                <PlatformBadge key={platform} platform={platform} />
              ))
            }
          </div>
          <CardTitle>{name}</CardTitle>
        </CardHeader>
      </Card>
  )
}

export default GameCard;