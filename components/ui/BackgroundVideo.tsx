// components/ui/BackgroundVideo.tsx

"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

type BackgroundVideoProps = {
  src: string;
  posterSrc: string;
  posterAlt?: string;
  priority?: boolean;
  fetchPriority?: "high" | "low" | "auto";
  sizes?: string;
  className?: string;
  imageClassName?: string;
  videoClassName?: string;
};

export default function BackgroundVideo({
  src,
  posterSrc,
  posterAlt = "",
  priority = false,
  fetchPriority = "auto",
  sizes = "100vw",
  className,
  imageClassName,
  videoClassName,
}: BackgroundVideoProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;

    if (prefersReducedMotion) {
      video.pause();
      return;
    }

    const tryPlay = async () => {
      if (document.hidden) return;

      try {
        await video.play();
      } catch {
        // Autoplay can still be blocked by iOS Safari, Low Power Mode,
        // Data Saver, or browser-level autoplay heuristics.
        // The poster remains visible as the fallback.
      }
    };

    const handleVisibilityChange = () => {
      if (!document.hidden) {
        void tryPlay();
      }
    };

    const handlePageShow = () => {
      void tryPlay();
    };

    const handleCanPlay = () => {
      void tryPlay();
    };

    video.addEventListener("canplay", handleCanPlay);
    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("pageshow", handlePageShow);

    void tryPlay();

    return () => {
      video.removeEventListener("canplay", handleCanPlay);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("pageshow", handlePageShow);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className={cn("absolute inset-0 overflow-hidden", className)}
    >
      <Image
        src={posterSrc}
        alt={posterAlt}
        fill
        priority={priority}
        fetchPriority={fetchPriority}
        sizes={sizes}
        className={cn("object-cover object-center", imageClassName)}
      />

      <video
        ref={videoRef}
        className={cn(
          "absolute inset-0 size-full object-cover object-center transition-opacity duration-700",
          isPlaying ? "opacity-100" : "opacity-0",
          videoClassName,
        )}
        src={src}
        poster={posterSrc}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        controls={false}
        disablePictureInPicture
        onPlaying={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => setIsPlaying(false)}
        onError={() => setIsPlaying(false)}
      />
    </div>
  );
}
