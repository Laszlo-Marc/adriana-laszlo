"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

type BackgroundVideoProps = {
  src: string;
  mobileSrc?: string;
  posterSrc: string;
  posterAlt?: string;
  priority?: boolean;
  fetchPriority?: "high" | "low" | "auto";
  sizes?: string;
  className?: string;
  imageClassName?: string;
  videoClassName?: string;
  objectPosition?: string;
  decorative?: boolean;
};

export default function BackgroundVideo({
  src,
  mobileSrc,
  posterSrc,
  posterAlt = "",
  priority = false,
  fetchPriority = "auto",
  sizes = "100vw",
  className,
  imageClassName,
  videoClassName,
  objectPosition,
  decorative = true,
}: BackgroundVideoProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const tryPlay = async () => {
      if (document.hidden || mediaQuery.matches) {
        video.pause();
        setIsPlaying(false);
        return;
      }

      try {
        video.muted = true;
        video.defaultMuted = true;
        video.playsInline = true;
        await video.play();
      } catch {
        setIsPlaying(false);
      }
    };

    const handleVisibilityChange = () => void tryPlay();
    const handleCanPlay = () => void tryPlay();
    const handleMotionChange = () => void tryPlay();

    video.addEventListener("canplay", handleCanPlay);
    document.addEventListener("visibilitychange", handleVisibilityChange);
    mediaQuery.addEventListener("change", handleMotionChange);

    void tryPlay();

    return () => {
      video.removeEventListener("canplay", handleCanPlay);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      mediaQuery.removeEventListener("change", handleMotionChange);
    };
  }, []);

  return (
    <div
      aria-hidden={decorative ? "true" : undefined}
      className={cn("absolute inset-0 overflow-hidden", className)}
    >
      <Image
        src={posterSrc}
        alt={decorative ? "" : posterAlt}
        fill
        priority={priority}
        fetchPriority={fetchPriority}
        sizes={sizes}
        className={cn("object-cover", imageClassName)}
        style={objectPosition ? { objectPosition } : undefined}
      />

      <video
        ref={videoRef}
        className={cn(
          "absolute inset-0 size-full object-cover transition-opacity duration-700 motion-reduce:hidden",
          isPlaying ? "opacity-100" : "opacity-0",
          videoClassName,
        )}
        style={objectPosition ? { objectPosition } : undefined}
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
      >
        {mobileSrc ? (
          <source src={mobileSrc} type="video/mp4" media="(max-width: 767px)" />
        ) : null}
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
}
