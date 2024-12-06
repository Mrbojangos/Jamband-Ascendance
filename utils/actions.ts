import { generateVenueName } from './generators'

export interface ActionResult {
  popularityChange: number
  moneyChange: number
  headyPointsChange: number
  message: string
}

export interface Action {
  name: string
  perform: () => ActionResult
}

const generateMessage = (messages: string[], placeholders?: { [key: string]: string }) => {
  let message = messages[Math.floor(Math.random() * messages.length)]
  if (placeholders) {
    Object.entries(placeholders).forEach(([key, value]) => {
      message = message.replace(`{${key}}`, value)
    })
  }
  return message
}

const actions: Action[] = [
  {
    name: 'Play Local Gig',
    perform: () => {
      const venue = generateVenueName()
      return {
        popularityChange: Math.floor(Math.random() * 5) + 1,
        moneyChange: Math.floor(Math.random() * 100) + 50,
        headyPointsChange: Math.floor(Math.random() * 10) + 5,
        message: generateMessage([
          "Crushed a gig at {venue}! The crowd was grooving all night long.",
          "Rocked the house at {venue}! Your improvised jam had everyone mesmerized.",
          "Left the crowd wanting more at {venue}! They're already asking when you'll be back.",
          "Jammed all night long at {venue}! Your extended encore was the talk of the town.",
          "Turned {venue} into a groovy dance party! Even the bartenders were getting down.",
          "Your set at {venue} was pure fire! The energy was electric from start to finish.",
          "Blew the roof off {venue}! Your new material was a hit with the audience.",
          "Created a vibe so thick at {venue}, you could cut it with a knife. Unforgettable night!",
          "Your performance at {venue} was transcendent. People were floating on cloud nine.",
          "The crowd at {venue} couldn't get enough! They demanded three encores!",
          "The chompers weren't even chompin' during your set at {venue}!"
        ], { venue })
      }
    }
  },
  {
    name: 'Record Demo',
    perform: () => ({
      popularityChange: Math.floor(Math.random() * 10) + 5,
      moneyChange: -200,
      headyPointsChange: Math.floor(Math.random() * 20) + 10,
      message: generateMessage([
        "Recorded a killer demo tape! The sound engineer said it's the best he's heard in years.",
        "Laid down some funky tracks in the studio! Your bassist was in the pocket all day.",
        "Captured the essence of your jam in a stellar demo! It's raw, authentic, and groovy.",
        "Created a mind-bending sonic experience in the studio! This demo will turn heads.",
        "Produced a demo that will melt faces and blow minds! It's pure psychedelic bliss.",
        "Your demo session was magical! Every take felt inspired and effortless.",
        "The new demo showcases your evolution as a band. It's a quantum leap forward.",
        "Your improvisational skills shone through in the demo. It's lightning in a bottle!",
        "The demo captures your live energy perfectly. It's like being at one of your shows.",
        "Your producer is raving about the demo. He says it's going to open a lot of doors.",
        "PT loves the new demo!"
      ])
    })
  },
  {
    name: 'Social Media Campaign',
    perform: () => ({
      popularityChange: Math.floor(Math.random() * 15) + 10,
      moneyChange: -100,
      headyPointsChange: Math.floor(Math.random() * 15) + 5,
      message: generateMessage([
        "Launched a viral social media campaign! Your follower count is skyrocketing.",
        "Your latest TikTok dance challenge is taking off! Even celebrities are joining in.",
        "Your Instagram Live jam session got thousands of views! The comments were on fire.",
        "Your witty tweets are gaining traction in the music community! Blue checkmark incoming.",
        "Your behind-the-scenes Facebook content is building a loyal fanbase! They feel connected.",
        "Your YouTube channel just hit a milestone! Subscribers are pouring in.",
        "A meme featuring your band's catchphrase has gone viral! It's all over the internet.",
        "Your Reddit AMA was a huge success! The jam band community is buzzing.",
        "Your Spotify playlist is gaining serious traction. Streams are through the roof!",
        "Your band's podcast episode is trending! Listeners can't get enough of your stories.",
        "Got a slot on Andy Frasco's World Saving Podcast!"
      ])
    })
  },
  {
    name: 'Collaborate with Artist',
    perform: () => ({
      popularityChange: Math.floor(Math.random() * 25) + 10,
      moneyChange: -150,
      headyPointsChange: Math.floor(Math.random() * 30) + 15,
      message: generateMessage([
        "Your collaboration with a popular artist was a huge success! Fans are begging for more.",
        "The unexpected mashup with another band created a new sub-genre! Critics are raving.",
        "Your joint performance went viral and gained massive attention! #CollabOfTheYear is trending.",
        "The collaborative album is receiving rave reviews from critics! It's a game-changer.",
        "Your musical fusion with another artist is topping the charts! It's a match made in heaven.",
        "The surprise guest appearance at your show sent the crowd into a frenzy! Epic moment.",
        "Your collab track is being hailed as the anthem of the summer! It's on every playlist.",
        "The music video for your collab is a visual masterpiece! It's racking up millions of views.",
        "Your joint tour announcement crashed the ticket website! Fans can't wait to see you together.",
        "The industry is buzzing about your latest collaboration! It's opened up new creative avenues."
      ])
    })
  },
  {
    name: 'Experimental Album',
    perform: () => {
      const success = Math.random() > 0.5
      return {
        popularityChange: success ? Math.floor(Math.random() * 30) + 20 : -Math.floor(Math.random() * 15) - 5,
        moneyChange: -300,
        headyPointsChange: success ? Math.floor(Math.random() * 40) + 30 : -Math.floor(Math.random() * 20) - 10,
        message: generateMessage(success ? [
          "Your experimental album is being hailed as groundbreaking! It's redefining the genre.",
          "Critics are calling your new sound 'the future of jam bands'! You're ahead of the curve.",
          "Your risk-taking paid off, and fans are loving the new direction! It's a breath of fresh air.",
          "The experimental album has become a cult classic overnight! It's all anyone's talking about.",
          "Your innovative sound is attracting a whole new audience! You're bridging musical worlds.",
          "The album's unconventional structure is being studied in music schools! You're influencing the next generation.",
          "Your bold artistic choices have paid off! The album is being compared to legendary experimental works.",
          "Music journalists are scrambling to decode the layers in your new album! It's sparked intense discussion.",
          "Your experimental techniques have other bands following suit! You're starting a movement.",
          "The album's unique sound design is winning awards! You're pushing the boundaries of what's possible in music."
        ] : [
          "Your experimental album received mixed reviews... Some fans are struggling to connect with it.",
          "Some fans are confused by your new direction. It might take time for them to come around.",
          "Critics are unsure what to make of your experimental sound. It's polarizing the music community.",
          "The risk didn't quite pay off this time. The album's complexity might be overshadowing its appeal.",
          "Your experimental album is considered too 'out there' for mainstream success. It's a niche hit at best.",
          "The album's avant-garde approach has left some listeners scratching their heads. It's not for everyone.",
          "Your core fanbase is divided over the new sound. It's sparked heated debates online.",
          "Music critics are calling the album 'ambitious but flawed'. It might be ahead of its time.",
          "The experimental elements overshadowed the music for some. It's being called 'self-indulgent' by detractors.",
          "Your attempt to push boundaries has resulted in a polarizing release. It's a love-it-or-hate-it situation."
        ])
      }
    }
  },
  {
    name: 'Music Video',
    perform: () => ({
      popularityChange: Math.floor(Math.random() * 20) + 10,
      moneyChange: -250,
      headyPointsChange: Math.floor(Math.random() * 25) + 15,
      message: generateMessage([
        "Your trippy music video is breaking view records! It's a visual feast that keeps people coming back.",
        "The innovative visuals in your music video are captivating audiences! It's being called a modern psychedelic masterpiece.",
        "Your music video's storyline is resonating with fans everywhere! It's sparking deep discussions online.",
        "The artistic direction of your music video is earning critical acclaim! Film festivals are reaching out.",
        "Your music video has become a cultural phenomenon! It's being parodied and referenced everywhere.",
        "The choreography in your new video has sparked a dance craze! Everyone's trying to recreate it.",
        "Your video's practical effects are blowing minds! BTS content is going viral on its own.",
        "The star cameos in your video are causing a stir! Collaborations are pouring in.",
        "Your one-take video is being praised for its technical brilliance! It's a landmark achievement.",
        "The video's powerful message is making waves! It's being used in classrooms and seminars."
      ])
    })
  },
  {
    name: 'Charity Concert',
    perform: () => ({
      popularityChange: Math.floor(Math.random() * 15) + 10,
      moneyChange: -100,
      headyPointsChange: Math.floor(Math.random() * 35) + 25,
      message: generateMessage([
        "Your charity concert raised awareness and boosted your reputation! The cause is close to your hearts.",
        "Fans admire your commitment to giving back to the community! Your authenticity shines through.",
        "Your benefit show was a huge success, both musically and charitably! You've made a real difference.",
        "The positive press from your charity event is boosting your image! You're using your platform for good.",
        "Your philanthropic efforts are earning you respect in the industry! Other bands are following your lead.",
        "The charity livestream broke donation records! Your fans really showed up for a good cause.",
        "Your benefit album is topping charts while raising funds! It's a win-win situation.",
        "The star-studded lineup you assembled for the charity event is making headlines! Networking pays off.",
        "Your hands-on approach to the charity work is inspiring fans! They're starting grassroots movements.",
        "The innovative fundraising ideas at your charity gig are being adopted industry-wide! You're a trendsetter."
      ])
    })
  },
  {
    name: 'Continue Tour',
    perform: () => {
      const events = [
        { type: 'negative', message: "Got a flat tire on the tour van. Lost some time and money for repairs, but the roadside jam session was epic!", popularityChange: 0, moneyChange: -100, headyPointsChange: -5 },
        { type: 'negative', message: "The C was K. Had to cancel a show, but the impromptu acoustic set in the hotel lobby became legendary.", popularityChange: -5, moneyChange: -200, headyPointsChange: -10 },
        { type: 'negative', message: "Stuck in K hole. Missed a crucial networking opportunity, but wrote a mind-bending new track in the process.", popularityChange: -10, moneyChange: 0, headyPointsChange: -15 },
        { type: 'positive', message: "Met Pete Shapiro at a rest stop! He's interested in booking you for a show. Sometimes, it's all about being in the right place at the right time.", popularityChange: 15, moneyChange: 0, headyPointsChange: 20 },
        { type: 'positive', message: "Brownie liked your Instagram post! Fans are going wild, and your follower count is skyrocketing.", popularityChange: 10, moneyChange: 0, headyPointsChange: 15 },
        { type: 'positive', message: "A music blog wrote a glowing review of your latest show! The writer compared you to some all-time greats.", popularityChange: 5, moneyChange: 100, headyPointsChange: 10 },
        { type: 'neutral', message: "Long drive today. Nothing eventful happened, but the band bonding was priceless. Sometimes, it's about the journey, not the destination.", popularityChange: 0, moneyChange: -50, headyPointsChange: 0 },
        { type: 'positive', message: "Your guitarist's solo went viral! A clip of last night's show is everywhere on social media.", popularityChange: 20, moneyChange: 150, headyPointsChange: 25 },
        { type: 'negative', message: "Food poisoning hit the band hard. Had to power through a gig, but fans appreciated the raw, vulnerable performance.", popularityChange: -5, moneyChange: -100, headyPointsChange: 5 },
        { type: 'positive', message: "A famous musician was spotted in the crowd at your gig! They jammed with you for the encore, creating an unforgettable moment.", popularityChange: 25, moneyChange: 200, headyPointsChange: 30 },
      ]
      
      const event = events[Math.floor(Math.random() * events.length)]
      
      return {
        popularityChange: event.popularityChange,
        moneyChange: event.moneyChange,
        headyPointsChange: event.headyPointsChange,
        message: event.message
      }
    }
  }
]

export { actions }

