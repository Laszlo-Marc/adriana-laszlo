import Button from "@/components/ui/Button";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";

type FeaturedEventSignupFormProps = {
  eventTitle: string;
};

const inputClassName =
  "min-h-12 w-full min-w-0 rounded-full border border-charcoal/10 bg-cream/70 px-5 text-charcoal outline-none transition-[border-color,box-shadow,background-color] placeholder:text-muted focus:border-teal focus-visible:ring-2 focus-visible:ring-teal/35";

const textareaClassName =
  "w-full min-w-0 resize-none rounded-[1.5rem] border border-charcoal/10 bg-cream/70 px-5 py-4 text-charcoal outline-none transition-[border-color,box-shadow,background-color] placeholder:text-muted focus:border-teal focus-visible:ring-2 focus-visible:ring-teal/35";

export default function FeaturedEventSignupForm({
  eventTitle,
}: FeaturedEventSignupFormProps) {
  return (
    <form
      action="/api/event-signup"
      method="post"
      className="w-full min-w-0 max-w-full overflow-hidden rounded-[2rem] border border-white/70 bg-white/80 p-5 sm:p-8"
    >
      <input type="hidden" name="eventTitle" value={eventTitle} />

      <div className="min-w-0">
        <Heading
          as="h3"
          size="h3"
          align="center"
          className="mx-auto max-w-[16rem] text-balance sm:max-w-none"
        >
          Îți dorești să participi?
        </Heading>

        <Text
          as="p"
          size="sm"
          color="muted"
          align="center"
          className="mx-auto mt-3 max-w-sm"
        >
          Lasă-ne datele tale și revenim cu detalii despre program.
        </Text>
      </div>

      <div className="mt-7 grid min-w-0 gap-4">
        <label className="grid min-w-0 gap-2">
          <span className="text-sm font-medium text-charcoal">Nume</span>
          <input
            name="name"
            type="text"
            autoComplete="name"
            required
            className={inputClassName}
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
            className={inputClassName}
            placeholder="email@example.com"
          />
        </label>

        <label className="grid min-w-0 gap-2">
          <span className="text-sm font-medium text-charcoal">Telefon</span>
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            className={inputClassName}
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
            className={textareaClassName}
            placeholder="Scrie câteva cuvinte despre ce ai vrea să clarifici."
          />
        </label>
      </div>

      <Button type="submit" className="mt-6 w-full" variant="primary">
        Înscrie-te acum
      </Button>
    </form>
  );
}
