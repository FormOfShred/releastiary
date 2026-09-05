import { Card, CardHeader } from "../ui/card"
import { Skeleton } from "../ui/skeleton"

const GameCardSkeleton = () => {
  return (
    <Card className="bg-background">
      <Skeleton className="object-cover mx-4 rounded-sm h-80" />
      <CardHeader>
        <Skeleton className="h-[15px] w-[20px] rounded-full" />
        <Skeleton className="h-[20px] w-[100px] rounded-full" />
      </CardHeader>
    </Card>
  )
}

export default GameCardSkeleton;