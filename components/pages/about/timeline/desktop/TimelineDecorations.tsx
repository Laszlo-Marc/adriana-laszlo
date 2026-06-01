import Image from "next/image";

export function TimelineDecorations() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0"
    >
      <Image
        src="/backgrounds/df-purple-down.png"
        alt=""
        width={110}
        height={110}
        className="absolute right-[18%] top-10 rotate-12 opacity-40"
      />
      <Image
        src="/backgrounds/single.png"
        alt=""
        width={110}
        height={110}
        className="absolute left-[18%] top-60  opacity-40"
      />
      <Image
        src="/backgrounds/df-purple-down.png"
        alt=""
        width={110}
        height={110}
        className="absolute left-[18%] top-70 rotate-12 opacity-40"
      />
      <Image
        src="/backgrounds/df-teal-down.png"
        alt=""
        width={96}
        height={96}
        className="absolute right-[17%] bottom-82 -rotate-12 opacity-40"
      />
      <Image
        src="/backgrounds/single.png"
        alt=""
        width={120}
        height={120}
        className="absolute right-[17%] bottom-72  opacity-40"
      />

      <Image
        src="/backgrounds/df-teal-down.png"
        alt=""
        width={96}
        height={96}
        className="absolute left-[17%] bottom-32 -rotate-12 opacity-40"
      />

      <div className="absolute left-1/2 top-[46%] h-72 w-72 -translate-x-1/2 rounded-full bg-teal/10 blur-3xl" />
    </div>
  );
}
