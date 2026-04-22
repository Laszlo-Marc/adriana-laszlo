export type SocialVideoItem = {
  id: string;
  src: string;
  poster?: string;
  href: string;
  title: string;
  handle?: string;
};

export const homeSocialVideos: SocialVideoItem[] = [
  {
    id: "social-1",
    src: "/videos/social/reel-1.mp4",
    poster: "/images/social/reel-1-poster.jpg",
    href: "https://www.instagram.com/adrianalaszlo/",
    title: "Resurse și reflecții despre traumă și vindecare",
    handle: "@adrianalaszlo",
  },
  {
    id: "social-2",
    src: "/videos/social/reel-2.mp4",
    poster: "/images/social/reel-2-poster.jpg",
    href: "https://www.instagram.com/adrianalaszlo/",
    title: "Conținut scurt, clar și ușor de urmărit",
    handle: "@adrianalaszlo",
  },
  {
    id: "social-3",
    src: "/videos/social/reel-3.mp4",
    poster: "/images/social/reel-3-poster.jpg",
    href: "https://www.instagram.com/adrianalaszlo/",
    title: "Perspective utile între ședințe",
    handle: "@adrianalaszlo",
  },
];
