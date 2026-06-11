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
        width={150}
        height={110}
        sizes="150px"
        className="absolute right-[18%] top-10 h-auto w-37.5 rotate-12 opacity-40"
      />

      <Image
        src="/backgrounds/single.png"
        alt=""
        width={200}
        height={110}
        sizes="200px"
        className="absolute left-[18%] top-60 h-auto w-50 opacity-40"
      />

      <Image
        src="/backgrounds/df-purple-down.png"
        alt=""
        width={150}
        height={110}
        sizes="150px"
        className="absolute left-[18%] top-80 h-auto w-37.5 rotate-12 opacity-40"
      />

      <Image
        src="/backgrounds/df-teal-down.png"
        alt=""
        width={120}
        height={96}
        sizes="120px"
        className="absolute right-[17%] bottom-92 h-auto w-30 -rotate-12 opacity-40"
      />

      <Image
        src="/backgrounds/single.png"
        alt=""
        width={200}
        height={120}
        sizes="200px"
        className="absolute right-[17%] bottom-72 h-auto w-50 opacity-40"
      />

      <Image
        src="/backgrounds/df-teal-down.png"
        alt=""
        width={140}
        height={96}
        sizes="140px"
        className="absolute left-[17%] bottom-32 h-auto w-35 -rotate-12 opacity-40"
      />

      <div className="absolute left-1/2 top-[46%] h-72 w-72 -translate-x-1/2 rounded-full bg-teal/10 blur-3xl" />
    </div>
  );
}
