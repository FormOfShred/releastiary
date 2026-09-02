import { Badge } from "../ui/badge";
import { Card, CardHeader, CardTitle } from "../ui/card";

const GameCard = () => {
  return (
    <Card className="bg-background">
      <img src="https://placehold.co/264x374" className="object-cover mx-4 mt-4 rounded-sm" />
      <CardHeader>
        <Badge variant="secondary" className="text-muted-foreground">PC</Badge>
        <CardTitle>Game Title</CardTitle>
      </CardHeader>
    </Card>
  )
}

export default GameCard;