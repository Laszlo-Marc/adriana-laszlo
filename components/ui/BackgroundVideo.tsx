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
  preload?: "none" | "metadata" | "auto";
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
  preload = "auto",
}: BackgroundVideoProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [canShowVideo, setCanShowVideo] = useState(false);
  const [shouldRenderVideo, setShouldRenderVideo] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    let retryTimeout: number | null = null;
    let retryCount = 0;
    let isMounted = true;

    const clearRetryTimeout = () => {
      if (retryTimeout !== null) {
        window.clearTimeout(retryTimeout);
        retryTimeout = null;
      }
    };

    const tryPlay = async () => {
      if (!isMounted) return;

      if (document.hidden || mediaQuery.matches) {
        video.pause();
        setShouldRenderVideo(!mediaQuery.matches);
        setCanShowVideo(false);
        return;
      }

      setShouldRenderVideo(true);

      try {
        video.muted = true;
        video.defaultMuted = true;
        video.playsInline = true;
        video.autoplay = true;
        video.loop = true;

        await video.play();

        if (video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
          setCanShowVideo(true);
        }

        retryCount = 0;
      } catch {
        setCanShowVideo(false);

        if (retryCount < 5) {
          retryCount += 1;

          clearRetryTimeout();

          retryTimeout = window.setTimeout(() => {
            void tryPlay();
          }, 350 * retryCount);
        }
      }
    };

    const handleReady = () => {
      if (video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
        setCanShowVideo(true);
      }

      retryCount = 0;
      void tryPlay();
    };

    const handleVisibilityChange = () => {
      retryCount = 0;
      void tryPlay();
    };

    const handleMotionChange = () => {
      retryCount = 0;
      void tryPlay();
    };

    const handleError = () => {
      setCanShowVideo(false);
    };

    retryCount = 0;

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.autoplay = true;
    video.loop = true;
    video.load();

    video.addEventListener("loadeddata", handleReady);
    video.addEventListener("canplay", handleReady);
    video.addEventListener("playing", handleReady);
    video.addEventListener("error", handleError);

    document.addEventListener("visibilitychange", handleVisibilityChange);
    mediaQuery.addEventListener("change", handleMotionChange);

    void tryPlay();

    return () => {
      isMounted = false;
      clearRetryTimeout();

      video.removeEventListener("loadeddata", handleReady);
      video.removeEventListener("canplay", handleReady);
      video.removeEventListener("playing", handleReady);
      video.removeEventListener("error", handleError);

      document.removeEventListener("visibilitychange", handleVisibilityChange);
      mediaQuery.removeEventListener("change", handleMotionChange);
    };
  }, [src, mobileSrc]);

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

      {shouldRenderVideo ? (
        <video
          key={`${mobileSrc ?? ""}-${src}`}
          ref={videoRef}
          className={cn(
            "absolute inset-0 size-full object-cover transition-opacity duration-700 motion-reduce:hidden",
            canShowVideo ? "opacity-100" : "opacity-0",
            videoClassName,
          )}
          style={objectPosition ? { objectPosition } : undefined}
          poster={posterSrc}
          autoPlay
          muted
          loop
          playsInline
          preload={preload}
          controls={false}
          disablePictureInPicture
          aria-hidden="true"
          tabIndex={-1}
          onLoadedData={() => setCanShowVideo(true)}
          onCanPlay={() => setCanShowVideo(true)}
          onPlaying={() => setCanShowVideo(true)}
          onError={() => setCanShowVideo(false)}
        >
          {mobileSrc ? (
            <source
              src={mobileSrc}
              type="video/mp4"
              media="(max-width: 767px)"
            />
          ) : null}

          <source src={src} type="video/mp4" />
        </video>
      ) : null}
    </div>
  );
}
