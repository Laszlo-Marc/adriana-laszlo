export type SocialReel = {
  id: string;
  title: string;
  description: string;
  videoSrc: string;
  posterSrc?: string;
};

export const socialReels: SocialReel[] = [
  {
    id: "trauma-relationala",
    title: "Ce înseamna reprocesarea traumei în EMDR?",
    description: "Semnele subtile prin care trecutul rămâne prezent.",
    videoSrc: "/blogs/reels/reel1.MP4",
    posterSrc: "/poster-reels.png",
  },
  {
    id: "limite-sanatoase",
    title: "De ce avem nevoie de resurse pozitive?",
    description: "Cum începi să spui nu fără să te pierzi pe tine.",
    videoSrc: "/blogs/reels/reel2.MP4",
    posterSrc: "/poster-reels.png",
  },
  {
    id: "atasament",
    title: "Atașament și siguranță",
    description: "De ce apropierea poate activa frică, nu doar iubire.",
    videoSrc: "/blogs/reels/reel-3.mp4",
    posterSrc: "/poster-reels.png",
  },
];
