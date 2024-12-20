'use client'

import { useState, useEffect } from 'react'
import { Button } from "../components/ui/button"
import { Card, CardContent } from "../components/ui/card"
import { Input } from "../components/ui/input"
import { generateBandName, generateFestivalName } from '../utils/generators'
import { actions } from '../utils/actions'
import { Band } from '../types/band'
import { FestivalPoster } from '../components/festival-poster'
import { Scoreboard } from '../components/scoreboard'
import { popularBands, JamBand } from '../utils/bands'

export default function JambandAscendancy() {
  const [band, setBand] = useState<Band>({
    name: '',
    popularity: 0,
    money: 1000,
    days: 0,
    headyPoints: 0
  })

  const [message, setMessage] = useState<string>('')
  const [festivalName, setFestivalName] = useState('')
  const [festivalLineup, setFestivalLineup] = useState<JamBand[]>([])
  const [gameStarted, setGameStarted] = useState(false)
  const [gameEnded, setGameEnded] = useState(false)
  const [tempBandName, setTempBandName] = useState('')

  useEffect(() => {
    setTempBandName(generateBandName())
    setFestivalName(generateFestivalName())
    setFestivalLineup(generateLineup())
  }, [])

  const generateLineup = () => {
    const lineup: JamBand[] = []
    for (let tier = 1; tier <= 5; tier++) {
      const tierBands = popularBands.filter(band => band.tier === tier)
      const selectedBands = tierBands.sort(() => 0.5 - Math.random()).slice(0, 6 - tier)
      lineup.push(...selectedBands)
    }
    return lineup
  }

  const startGame = () => {
    setBand(prevBand => ({ ...prevBand, name: tempBandName }))
    setGameStarted(true)
  }

  const regenerateBandName = () => {
    setTempBandName(generateBandName())
  }

  const performAction = (action: any) => {
    const result = action.perform()
    setBand(prevBand => ({
      ...prevBand,
      popularity: Math.max(0, prevBand.popularity + result.popularityChange),
      money: prevBand.money + result.moneyChange,
      headyPoints: Math.max(0, prevBand.headyPoints + result.headyPointsChange),
      days: prevBand.days + 1
    }))
    setMessage(result.message)

    // Check for legendary status and trigger end game
    if (band.headyPoints >= 1000 && !gameEnded) {
      const endGameScenarios = [
        "Your lead guitarist tragically passed away. The band decides to break up, leaving behind a legendary legacy.",
        "Creative differences have torn the band apart. You've decided to go on an indefinite hiatus at the peak of your career.",
        "Your frontman has gone solo, effectively ending the band's legendary run.",
        "The band's excessive lifestyle has caught up. You've collectively decided to retire and focus on health and family.",
        "Your final album was so groundbreaking, you all agree nothing can top it. The band disbands at its absolute peak."
      ]
      const endGameMessage = endGameScenarios[Math.floor(Math.random() * endGameScenarios.length)]
      setMessage(endGameMessage)
      setGameEnded(true)
    }

    // Regenerate festival lineup when band reaches a new tier
    if (Math.floor(band.headyPoints / 250) < Math.floor((band.headyPoints + result.headyPointsChange) / 250)) {
      setFestivalName(generateFestivalName())
      setFestivalLineup(generateLineup())
    }
  }

  if (!gameStarted) {
    return (
      <div className="container mx-auto p-4 max-w-sm sm:max-w-md">
        <h1 className="text-2xl sm:text-3xl font-bold mb-4">Jamband Ascendancy</h1>
        <Card>
          <CardContent className="pt-6">
            <h2 className="text-xl font-semibold mb-4">Name Your Band</h2>
            <div className="flex mb-4">
              <Input
                type="text"
                value={tempBandName}
                onChange={(e) => setTempBandName(e.target.value)}
                className="flex-grow mr-2"
                placeholder="Enter your band name"
              />
              <Button onClick={regenerateBandName} variant="outline">
                🎲
              </Button>
            </div>
            <Button onClick={startGame} className="w-full">
              Start Your Journey
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4">Jamband Ascendance</h1>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Scoreboard band={band} />

          <div className="grid grid-cols-2 gap-2 mb-4">
            {actions.map((action, index) => (
              <Button 
                key={index} 
                onClick={() => performAction(action)}
                disabled={gameEnded}
                className="text-sm py-1"
              >
                {action.name}
              </Button>
            ))}
          </div>

          {message && (
            <Card className="mb-4">
              <CardContent>
                <p className="py-2 text-sm">{message}</p>
              </CardContent>
            </Card>
          )}

          {gameEnded && (
            <Card className="mb-4 bg-yellow-100">
              <CardContent>
                <h2 className="text-xl font-semibold mb-2">Game Over</h2>
                <p className="text-sm">Your band has reached legendary status and the journey has come to an end. Thanks for playing!</p>
                <Button onClick={() => window.location.reload()} className="mt-4">
                  Start New Game
                </Button>
              </CardContent>
            </Card>
          )}
        </div>

        <div className="sticky top-4">
          <FestivalPoster 
            playerBand={band} 
            festivalName={festivalName}
            lineup={festivalLineup}
          />
        </div>
      </div>
    </div>
  )
}

