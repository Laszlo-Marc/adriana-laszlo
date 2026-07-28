import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Studio | Adriana Laszlo",
  description: "Sanity content management studio.",
  robots: {
    index: false,
    follow: false,
    noarchive: true,
    nosnippet: true,
  },
};

type StudioLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function StudioLayout({ children }: StudioLayoutProps) {
  return children;
}
