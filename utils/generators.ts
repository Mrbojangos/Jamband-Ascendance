const bandNamePrefixes = ['Cosmic', 'Funky', 'Groovy', 'Psychedelic', 'Electric']
const bandNameSuffixes = ['Jam', 'Groove', 'Fusion', 'Collective', 'Experience']

const festivalNamePrefixes = ['Sonic', 'Harmony', 'Rhythm', 'Melody', 'Vibe']
const festivalNameSuffixes = ['Fest', 'Gathering', 'Celebration', 'Explosion', 'Convergence']

const venueTypes = ['Bar', 'Club', 'Lounge', 'Tavern', 'Pub']
const venueAdjectives = ['Groovy', 'Funky', 'Cosmic', 'Jazzy', 'Rockin\'']

export function generateBandName(): string {
  const prefix = bandNamePrefixes[Math.floor(Math.random() * bandNamePrefixes.length)]
  const suffix = bandNameSuffixes[Math.floor(Math.random() * bandNameSuffixes.length)]
  return `${prefix} ${suffix}`
}

export function generateFestivalName(): string {
  const prefix = festivalNamePrefixes[Math.floor(Math.random() * festivalNamePrefixes.length)]
  const suffix = festivalNameSuffixes[Math.floor(Math.random() * festivalNameSuffixes.length)]
  return `${prefix} ${suffix}`
}

export function generateVenueName(): string {
  const adjective = venueAdjectives[Math.floor(Math.random() * venueAdjectives.length)]
  const type = venueTypes[Math.floor(Math.random() * venueTypes.length)]
  return `${adjective} ${type}`
}

