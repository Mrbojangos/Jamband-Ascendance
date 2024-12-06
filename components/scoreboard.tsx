import { Card, CardContent } from "@/components/ui/card"
import { Band } from "../types/band"

interface ScoreboardProps {
  band: Band
}

export function Scoreboard({ band }: ScoreboardProps) {
  const getTier = (headyPoints: number) => {
    if (headyPoints >= 1000) return "Legendary"
    if (headyPoints >= 750) return "Headliner"
    if (headyPoints >= 500) return "Main Stage"
    if (headyPoints >= 250) return "Up and Coming"
    return "Local Act"
  }

  return (
    <Card className="mb-4">
      <CardContent className="p-4">
        <h2 className="text-xl sm:text-2xl font-bold mb-2">{band.name}</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm">
          <div>
            <p className="font-semibold">Popularity</p>
            <p>{band.popularity}</p>
          </div>
          <div>
            <p className="font-semibold">Money</p>
            <p>${band.money}</p>
          </div>
          <div>
            <p className="font-semibold">Days</p>
            <p>{band.days}</p>
          </div>
          <div>
            <p className="font-semibold">Heady Points</p>
            <p>{band.headyPoints}</p>
          </div>
          <div className="col-span-2">
            <p className="font-semibold">Tier</p>
            <p>{getTier(band.headyPoints)}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

