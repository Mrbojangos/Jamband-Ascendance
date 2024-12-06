export interface JamBand {
    name: string
    tier: number // 1-5, with 1 being headliner
  }
  
  export const popularBands: JamBand[] = [
    // Tier 1 (Headliners)
    { name: "Phish", tier: 1 },
    { name: "Dead & Company", tier: 1 },
    { name: "Widespread Panic", tier: 1 },
    { name: "String Cheese Incident", tier: 1 },
    
    // Tier 2
    { name: "Umphrey's McGee", tier: 2 },
    { name: "Goose", tier: 2 },
    { name: "Billy Strings", tier: 2 },
    { name: "The Disco Biscuits", tier: 2 },
    
    // Tier 3
    { name: "Lotus", tier: 3 },
    { name: "Spafford", tier: 3 },
    { name: "Pigeons Playing Ping Pong", tier: 3 },
    { name: "moe.", tier: 3 },
    
    // Tier 4
    { name: "Dopapod", tier: 4 },
    { name: "Twiddle", tier: 4 },
    { name: "The Magic Beans", tier: 4 },
    { name: "Aqueous", tier: 4 },
    
    // Tier 5
    { name: "Cycles", tier: 5 },
    { name: "Kitchen Dwellers", tier: 5 },
    { name: "Neighbor", tier: 5 },
    { name: "Eggy", tier: 5 }
  ]
  
  