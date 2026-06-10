import Heading from "@/components/ui/Heading";

export default function FeaturedEventSignupForm() {
  return (
    <form className="w-full min-w-0 max-w-full overflow-hidden rounded-[2rem] border border-white/70 bg-white/80 p-5  sm:p-8">
      <div className="min-w-0">
        <Heading
          as="h3"
          size="h3"
          align="center"
          className="mx-auto max-w-[16rem] text-balance sm:max-w-none"
        >
          Îți dorești să participi?
        </Heading>
      </div>

      <div className="mt-7 grid min-w-0 gap-4">
        <label className="grid min-w-0 gap-2">
          <span className="text-sm font-medium text-charcoal">Nume</span>
          <input
            name="name"
            type="text"
            autoComplete="name"
            required
            className="min-h-12 w-full min-w-0 rounded-full border border-charcoal/10 bg-cream/70 px-5 text-charcoal outline-none transition placeholder:text-muted focus:border-teal"
            placeholder="Numele tău"
          />
        </label>

        <label className="grid min-w-0 gap-2">
          <span className="text-sm font-medium text-charcoal">Email</span>
          <input
            name="email"
            type="email"
            autoComplete="email"
            required
            className="min-h-12 w-full min-w-0 rounded-full border border-charcoal/10 bg-cream/70 px-5 text-charcoal outline-none transition placeholder:text-muted focus:border-teal"
            placeholder="email@example.com"
          />
        </label>

        <label className="grid min-w-0 gap-2">
          <span className="text-sm font-medium text-charcoal">Telefon</span>
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            className="min-h-12 w-full min-w-0 rounded-full border border-charcoal/10 bg-cream/70 px-5 text-charcoal outline-none transition placeholder:text-muted focus:border-teal"
            placeholder="Opțional"
          />
        </label>

        <label className="grid min-w-0 gap-2">
          <span className="text-sm font-medium text-charcoal">
            Ce te interesează la acest program?
          </span>
          <textarea
            name="message"
            rows={4}
            className="w-full min-w-0 resize-none rounded-[1.5rem] border border-charcoal/10 bg-cream/70 px-5 py-4 text-charcoal outline-none transition placeholder:text-muted focus:border-teal"
            placeholder="Scrie câteva cuvinte despre ce ai vrea să clarifici."
          />
        </label>
      </div>

      <button
        type="submit"
        className="mt-6 inline-flex min-h-12 w-full min-w-0 items-center justify-center rounded-full bg-teal px-5 text-center text-sm font-semibold uppercase tracking-[0.16em] text-charcoal transition hover:bg-teal/85 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 sm:px-6 sm:tracking-[0.18em]"
      >
        Înscrie-te acum
      </button>
    </form>
  );
}
