import { platform } from "os";
import { AboutMeData, Game, GameEngine, LinkImageSource, MediaType, Platform } from "./types";

export const PersonalInfo: AboutMeData = {
  name: "Zeeshan A.Raoof",
  role: "Game Developer | Unity & C#",
  introduction: "Hi, I’m Zeeshan — a Unity Game Developer passionate about crafting immersive and engaging gameplay experiences.",
  description: "Hey, I’m Zee! Gaming has been a big part of my life, and turning that passion into making games has been the most rewarding step I’ve taken. Over the past 1.5+ years, I’ve built projects across different genres—exploring different mechanics and styles to sharpen my skills. Along the way, I earned a Professional Diploma in Game Development from Big Boy School of Gaming, which gave me a strong foundation in design and programming. My goal now is to keep pushing my creativity, collaborate with other passionate developers, and bring players exciting, memorable experiences.",
  image: `${process.env.PUBLIC_URL}/images/Profile.jpg`,
  cvUri: `${process.env.PUBLIC_URL}/files/YOUR_CV.pdf`,
  links: {
    github: "https://github.com/omgzee",
    itchIO: "https://omgzee.itch.io",
    linkedIn: "https://www.linkedin.com/in/omgzee",
  }
};

export const games: Game[] = [
  {
    name: "NightFall: Survival FPS (PC)",
    description: "Stuck in a desolate house at the edge of the outbreak, you must fight your way through relentless waves of the undead. Scavenge weapons, gather supplies, and stay alive—defeated zombies may drop vital health or ammo. Your mission is to locate the hidden cure sample in a secret lab and hold out until the military arrives. Humanity’s fate rests on your survival.",
    genres: ["FPS", "Survival", "Shooter"],
    platforms: [Platform.Windows],
    engine: GameEngine.Unity,
    links: [
      { source: LinkImageSource.Github, url: "https://github.com/YOUR_REPO" },
      { source: LinkImageSource.ItchIo, url: "https://YOUR_ITCH.itch.io/GAME_NAME" },
    ],
    media: [
      { source: "/images/games/NightFall/cover.png", type: MediaType.Image },
      { source: "https://www.youtube.com/embed/K-1Y1czYeeo?si=2E-M7ZkNEa_uRfe_", type: MediaType.YouTube },
      { source: "/images/games/NightFall/new-1.png", type: MediaType.Image },
      { source: "/images/games/NightFall/new-2.png", type: MediaType.Image },
      { source: "/images/games/NightFall/new-3.png", type: MediaType.Image },
      { source: "/images/games/NightFall/Nightfall Screenshot 2025.08.29 - 02.14.23.38.png", type: MediaType.Image },
      
    ],
  },
  {
    name: "Blade Spiral (Mobile)",
    description: "A 2D knife-throwing arcade game featuring rotating elemental spirals with progressive difficulty.",
    genres: ["Arcade", "2D", "Casual"],
    platforms: [Platform.Android],
    engine: GameEngine.Unity,
    links: [
      { source: LinkImageSource.Github, url: "https://github.com/YOUR_REPO" },
      { source: LinkImageSource.ItchIo, url: "https://YOUR_ITCH.itch.io/GAME_NAME" },
    ],
    media: [
      { source: "/images/games/BladeSpiral/Screenshot_20250826-223503_Blade Spiral.jpg", type: MediaType.Image },
      { source: "https://www.youtube.com/embed/9bXc8NYiq30?si=bZEeygJZCYfpj-zv", type: MediaType.YouTube },
      { source: "/images/games/BladeSpiral/Screenshot_20250826-223426_Blade Spiral.jpg", type: MediaType.Image },
      { source: "/images/games/BladeSpiral/Screenshot_20250826-223410_Blade Spiral.jpg", type: MediaType.Image },
      { source: "/images/games/BladeSpiral/Screenshot_20250826-223403_Blade Spiral.jpg", type: MediaType.Image },
    ],
  },
  {
    name: "Rocket Launcher 3D (PC)",
    description: "A simple 2.5D rocket adventure where precision matters! Start from the launch pad, navigate through four challenging levels, avoid obstacles, and fight against gravity as you carefully guide your rocket to a safe landing.",
    genres: ["Physics-Based Arcade"],
    platforms: [Platform.Windows],
    engine: GameEngine.Unity,
    links: [
      { source: LinkImageSource.Github, url: "https://github.com/YOUR_REPO" },
      { source: LinkImageSource.ItchIo, url: "https://YOUR_ITCH.itch.io/GAME_NAME" },
    ],
    media: [
      { source: "/images/games/RocketLauncher3D/Rocketlauncher3d Screenshot 2025.08.26 - 23.11.39.61.png", type: MediaType.Image },
      { source: "https://www.youtube.com/embed/oZrzbyaEUrI?si=5ApByFOx7M8q7e2H", type: MediaType.YouTube },
      { source: "/images/games/RocketLauncher3D/Rocketlauncher3d Screenshot 2025.08.26 - 23.10.48.85.png", type: MediaType.Image },
      { source: "/images/games/RocketLauncher3D/Rocketlauncher3d Screenshot 2025.08.26 - 22.59.45.93.png", type: MediaType.Image },
      { source: "/images/games/RocketLauncher3D/Rocketlauncher3d Screenshot 2025.08.26 - 23.12.01.02.png", type: MediaType.Image },
    ],
  },
  {
    name: "Hungry Bob(Mobile & PC)",
    description: "A simple flappy bird clone with an added twist where as it collects food along the way it makes him fat which inturn gains him size making it challenging along the way!",
    genres: ["Arcade", "Endless Runner", "Casual"],
    platforms: [Platform.Android,Platform.Windows],
    engine: GameEngine.Unity,
    links: [
      { source: LinkImageSource.Github, url: "https://github.com/YOUR_REPO" },
      { source: LinkImageSource.ItchIo, url: "https://YOUR_ITCH.itch.io/GAME_NAME" },
    ],
    media: [
      { source: "/images/games/HungryBob/Hungry Bob Screenshot 2025.08.26 - 15.51.12.05.png", type: MediaType.Image },
      { source: "https://www.youtube.com/embed/5s8Ht5xwv5k?si=TfE-ynIouNM9ZPhn", type: MediaType.YouTube },
      { source: "/images/games/HungryBob/Hungry Bob Screenshot 2025.08.26 - 15.50.45.71.png", type: MediaType.Image },
      { source: "/images/games/HungryBob/Hungry Bob Screenshot 2025.08.26 - 15.45.55.99.png", type: MediaType.Image },
      { source: "/images/games/HungryBob/Hungry Bob Screenshot 2025.08.26 - 15.50.54.21.png", type: MediaType.Image },
    ],
  },
  {
    name: "War Tanks(PC)",
    description: "A fast-paced tank arena game where you choose from up to 4 different tanks and battle against AI-controlled enemies. Each tank has its own playstyle, and players must outmaneuver and shoot down enemies to survive. The last tank standing wins the round, and your performance contributes to a highscore deciding the winner.",
    genres: ["Action", "Shooter", "Arcade"],
    platforms: [Platform.Windows],
    engine: GameEngine.Unity,
    links: [
      { source: LinkImageSource.Github, url: "https://github.com/YOUR_REPO" },
      { source: LinkImageSource.ItchIo, url: "https://YOUR_ITCH.itch.io/GAME_NAME" },
    ],
    media: [
      { source: "/images/games/WarTanks/Panzer Commander Screenshot 2025.08.25 - 04.03.57.38.png", type: MediaType.Image },
      { source: "https://www.youtube.com/embed/Cfhadg4mEzE?si=CIC61BQffjNhttHr", type: MediaType.YouTube },
      { source: "/images/games/WarTanks/Panzer Commander Screenshot 2025.08.25 - 04.06.36.29.png", type: MediaType.Image },
      { source: "/images/games/WarTanks/Panzer Commander Screenshot 2025.08.25 - 04.04.29.59.png", type: MediaType.Image },
      { source: "/images/games/WarTanks/Panzer Commander Screenshot 2025.08.25 - 04.04.52.38.png", type: MediaType.Image },
      
    ],
  },
  {
    name: "Chains of Freedom (PC)",
    description: "A narrative-driven adventure game created in under 72 hours for a game jam hosted by Zimension3D in partnership with GDAI. Set during British colonial rule, the story follows a middle-aged man living in a farmhouse near a prison where freedom fighters were held captive. The player’s mission is to break into the prison, collect letters of hope written by the freedom fighters, and deliver them to the community, symbolizing the fight for freedom.",
    genres: ["0pen World", "Narrative"],
    platforms: [Platform.Windows],
    engine: GameEngine.Zimension3D,
    links: [
      { source: LinkImageSource.Github, url: "https://github.com/YOUR_REPO" },
      { source: LinkImageSource.ItchIo, url: "https://www.zimension3d.com/shrt/qZxrOT" },
    ],
    media: [
      { source: "/images/games/RocketLauncher3D/Screenshot_1.png", type: MediaType.Image },
      { source: "https://www.youtube.com/embed/VEwgFProIR0?si=XDWeFpkik5Rwo2cO&amp", type: MediaType.YouTube },
      { source: "/images/games/RocketLauncher3D/Screenshot_2.png", type: MediaType.Image },
      { source: "/images/games/RocketLauncher3D/Screenshot_3.png", type: MediaType.Image },
      { source: "/images/games/RocketLauncher3D/Screenshot_4.png", type: MediaType.Image },
    ],
  },
  {
    name: "Fight or Flight (PC)",
    description: "A Prototype flight shooter flying through a beautiful terrain in a fixed path using the timeline feature in unity shooting opponents blocking the way to reach the finish line.",
    genres: ["Arcade", "Shooter", "Casual"],
    platforms: [Platform.Windows],
    engine: GameEngine.Unity,
    links: [
      { source: LinkImageSource.Github, url: "https://github.com/YOUR_REPO" },
      { source: LinkImageSource.ItchIo, url: "https://YOUR_ITCH.itch.io/GAME_NAME" },
    ],
    media: [
      { source: "/images/games/FightorFlight/Fight Or Flight Screenshot 2025.08.26 - 19.35.51.08.png", type: MediaType.Image },
      { source: "https://www.youtube.com/embed/98HLUWlpuC8?si=OxxzPzdAvRUSxJk5", type: MediaType.YouTube },
      { source: "/images/games/FightorFlight/Fight Or Flight Screenshot 2025.08.26 - 18.57.14.44.png", type: MediaType.Image },
      { source: "/images/games/FightorFlight/Fight Or Flight Screenshot 2025.08.26 - 19.35.58.68.png", type: MediaType.Image },
      { source: "/images/games/FightorFlight/Fight Or Flight Screenshot 2025.08.26 - 19.36.06.48.png", type: MediaType.Image },
    ],
  },
  {
    name: "PONG (PC)",
    description: "A 2 player pong game with an added score and ball changing speeds according to the amount of hits.",
    genres: ["2D", "Arcade", "Skill"],
    platforms: [Platform.Windows],
    engine: GameEngine.Zimension3D,
    links: [
      { source: LinkImageSource.Github, url: "https://github.com/YOUR_REPO" },
      { source: LinkImageSource.ItchIo, url: "https://YOUR_ITCH.itch.io/GAME_NAME" },
    ],
    media: [
      { source: "/images/games/Pong/Pong Screenshot 2025.08.25 - 01.49.48.26.png", type: MediaType.Image },
      { source: "https://www.youtube.com/embed/z5leJ8hyE-c?si=PLBp8FNwuUbGZX82", type: MediaType.YouTube },
      { source: "/images/games/Pong/Pong Screenshot 2025.08.25 - 01.49.38.76.png", type: MediaType.Image },
    ],
  },
  {
    name: "Pizza Taxi (PC)",
    description: "A Top Down 2D pizza delivery game where you collect and deliver pizzas to customers with scores and a timer system to beat!.",
    genres: ["2D", "Casual",],
    platforms: [Platform.Windows],
    engine: GameEngine.Zimension3D,
    links: [
      { source: LinkImageSource.Github, url: "https://github.com/YOUR_REPO" },
      { source: LinkImageSource.ItchIo, url: "https://YOUR_ITCH.itch.io/GAME_NAME" },
    ],
    media: [
      { source: "/images/games/PizzaCab/Pizzacab Screenshot 2025.08.25 - 00.28.47.67.png", type: MediaType.Image },
      { source: "https://www.youtube.com/embed/ObqF8FC_A58?si=1sTlc7TOWHtISrnz&amp;start=8", type: MediaType.YouTube },
      { source: "/images/games/PizzaCab/Pizzacab Screenshot 2025.08.25 - 00.28.56.81.png", type: MediaType.Image },
      { source: "/images/games/PizzaCab/Pizzacab Screenshot 2025.08.25 - 00.26.04.73.png", type: MediaType.Image },
      
    ],
  },
];
