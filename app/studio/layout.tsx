import type { Metadata } from "next";
import { preloadModule } from "react-dom";

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

const bridgeScript = "https://core.sanity-cdn.com/bridge.js";

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  preloadModule(bridgeScript, { as: "script" });

  return (
    <>
      <script src={bridgeScript} async type="module" />
      {children}
    </>
  );
}
