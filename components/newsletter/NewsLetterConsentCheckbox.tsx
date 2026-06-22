type NewsletterConsentCheckboxProps = {
  checked: boolean;
  onChange: (checked: boolean) => void;
};

export default function NewsletterConsentCheckbox({
  checked,
  onChange,
}: NewsletterConsentCheckboxProps) {
  return (
    <label className="flex gap-3 text-sm leading-6 text-muted">
      <input
        type="checkbox"
        name="newsletterConsent"
        checked={checked}
        onChange={(event) => onChange(event.target.checked)}
        className="mt-1 h-4 w-4 rounded border-border text-teal focus:ring-gold"
      />

      <span>
        Doresc să primesc ocazional anunțuri despre evenimente, resurse gratuite
        și materiale utile. Îmi pot retrage consimțământul oricând.
      </span>
    </label>
  );
}
