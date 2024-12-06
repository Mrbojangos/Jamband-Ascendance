import { JamBand } from '../utils/bands'

interface FestivalPosterProps {
  playerBand: {
    name: string
    headyPoints: number
  }
  festivalName: string
  lineup: JamBand[]
}

export function FestivalPoster({ playerBand, festivalName, lineup }: FestivalPosterProps) {
  const getPlayerTier = (headyPoints: number): number => {
    if (headyPoints >= 1000) return 1
    if (headyPoints >= 750) return 2
    if (headyPoints >= 500) return 3
    if (headyPoints >= 250) return 4
    return 5
  }

  const playerTier = getPlayerTier(playerBand.headyPoints)

  // Group bands by tier
  const bandsByTier: { [key: number]: string[] } = {
    1: [],
    2: [],
    3: [],
    4: [],
    5: []
  }

  // Add other bands to their respective tiers
  lineup.forEach(band => {
    bandsByTier[band.tier].push(band.name)
  })

  // Add player band to appropriate tier
  bandsByTier[playerTier].push(playerBand.name)

  // Shuffle bands within each tier
  Object.keys(bandsByTier).forEach(tier => {
    bandsByTier[Number(tier)] = bandsByTier[Number(tier)].sort(() => Math.random() - 0.5)
  })

  const gradientColors = [
    'from-orange-300 to-red-500',
    'from-yellow-300 to-orange-500',
    'from-green-300 to-teal-500',
    'from-blue-300 to-indigo-500',
    'from-purple-300 to-pink-500'
  ]

  return (
    <div className={`relative w-full max-w-sm sm:max-w-md mx-auto p-4 sm:p-6 bg-gradient-to-b ${gradientColors[playerTier - 1]} rounded-lg shadow-xl`}>
      <div className="absolute inset-0 border-4 border-white rounded-lg opacity-50" />
      
      <div className="relative mb-4 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white font-display mb-1">
          {festivalName}
        </h2>
        <p className="text-lg sm:text-xl text-white font-bold">MUSIC FESTIVAL 2024</p>
      </div>

      <div className="relative space-y-2 text-center">
        {[1, 2, 3, 4, 5].map(tier => (
          bandsByTier[tier].length > 0 && (
            <div key={tier} className={`text-${5-tier}xl sm:text-${6-tier}xl font-bold ${tier === 1 ? 'text-yellow-300' : 'text-white'} tracking-wide`}>
              {bandsByTier[tier].join(' • ')}
            </div>
          )
        ))}
      </div>

      <div className="relative mt-4 text-center">
        <div className="inline-block bg-white px-4 py-1 rounded-full">
          <p className="text-xs sm:text-sm font-bold" style={{color: `var(--${gradientColors[playerTier - 1].split('-')[2]})`}}>
            JUNE 20-23 • GROOVE MOUNTAIN • JAMVILLE, USA
          </p>
        </div>
      </div>
    </div>
  )
}

