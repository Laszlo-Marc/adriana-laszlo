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
    title: "Trauma relațională",
    description: "Semnele subtile prin care trecutul rămâne prezent.",
    videoSrc: "/videos/reels/trauma-relationala.mp4",
    posterSrc: "/images/reels/trauma-relationala.jpg",
  },
  {
    id: "limite-sanatoase",
    title: "Limite sănătoase",
    description: "Cum începi să spui nu fără să te pierzi pe tine.",
    videoSrc: "/videos/reels/limite-sanatoase.mp4",
    posterSrc: "/images/reels/limite-sanatoase.jpg",
  },
  {
    id: "atasament",
    title: "Atașament și siguranță",
    description: "De ce apropierea poate activa frică, nu doar iubire.",
    videoSrc: "/videos/reels/atasament-si-siguranta.mp4",
    posterSrc: "/images/reels/atasament-si-siguranta.jpg",
  },
];
