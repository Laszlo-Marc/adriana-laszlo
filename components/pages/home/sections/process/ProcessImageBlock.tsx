import Image from "next/image";

export function ProcessImageBlock() {
  return (
    <div className="relative mt-11">
      {/* soft editorial panel */}
      <div
        aria-hidden="true"
        className="absolute -left-6 top-10 h-56 w-[calc(100%+3rem)] bg-sand/45"
      />

      {/* subtle gold atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 top-0 h-56 w-56 rounded-full bg-gold/12 blur-3xl"
      />

      {/* image */}
      <div className="relative z-20 mx-auto aspect-5/4 w-[86%] max-w-88 overflow-hidden rounded-4xl bg-sand/20 shadow-[0_24px_70px_rgba(44,44,44,0.12)]">
        <Image
          src="/home-page/process2.jpg"
          alt="Spațiu calm de reflecție înainte de începerea procesului terapeutic"
          fill
          sizes="86vw"
          className="object-cover object-center"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-linear-to-b from-transparent via-transparent to-charcoal/10"
        />

        <div className="absolute bottom-4 left-4 rounded-full bg-cream/85 px-4 py-2 text-[0.68rem] font-medium uppercase tracking-[0.16em] text-charcoal shadow-sm backdrop-blur-sm">
          01 — 03
        </div>
      </div>
    </div>
  );
}
