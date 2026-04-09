import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const quickLinks = [
  { href: "/", label: "Acasă" },
  { href: "/servicii", label: "Servicii" },
  { href: "/blog", label: "Blog" },
  { href: "/evenimente", label: "Evenimente" },
  { href: "/contact", label: "Contact" },
];

const serviceLinks = [
  { href: "/servicii#emdr", label: "Terapie EMDR" },
  { href: "/servicii#eft", label: "Terapie EFT" },
  { href: "/servicii#online", label: "Ședințe online" },
  { href: "/servicii#cuplu", label: "Terapie de cuplu" },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream/80">
      {/* Main footer */}
      <div className="section-container pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-5">
              <div className="flex flex-col leading-none">
                <span className="font-display text-base text-cream tracking-[0.15em] font-medium uppercase">
                  Adriana
                </span>
                <span className="font-display text-base text-cream tracking-[0.15em] font-medium uppercase">
                  Laszlo
                </span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-cream/60 mb-6 max-w-[280px]">
              Psiholog-psihoterapeut cu peste 15 ani de experiență. Specializare
              în EMDR și EFT pentru tratarea traumelor.
            </p>
            {/* Social links */}
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/psiholg/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-cream/15 flex items-center justify-center text-cream/50 hover:text-teal hover:border-teal/40 transition-all"
                aria-label="Facebook"
              >
                <FaFacebookF size={14} />
              </a>
              <a
                href="https://www.instagram.com/trauma_center_cluj/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-cream/15 flex items-center justify-center text-cream/50 hover:text-teal hover:border-teal/40 transition-all"
                aria-label="Instagram"
              >
                <FaInstagram size={15} />
              </a>
              <a
                href="https://www.linkedin.com/in/psihologadrianalaszlo/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-cream/15 flex items-center justify-center text-cream/50 hover:text-teal hover:border-teal/40 transition-all"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn size={14} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display text-xs font-medium text-cream tracking-[0.15em] uppercase mb-5">
              Navigare
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-cream/50 hover:text-cream transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-xs font-medium text-cream tracking-[0.15em] uppercase mb-5">
              Servicii
            </h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-cream/50 hover:text-cream transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="font-display text-xs font-medium text-cream tracking-[0.15em] uppercase mb-5">
              Contact
            </h4>
            <ul className="space-y-3.5">
              <li>
                <a
                  href="tel:+40744473869"
                  className="flex items-start gap-3 text-sm text-cream/50 hover:text-cream transition-colors group"
                >
                  <Phone
                    size={15}
                    strokeWidth={1.5}
                    className="mt-0.5 flex-shrink-0 text-gold group-hover:text-gold-200"
                  />
                  <span>+40 744 473 869</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:adrianalaszlo@gmail.com"
                  className="flex items-start gap-3 text-sm text-cream/50 hover:text-cream transition-colors group"
                >
                  <Mail
                    size={15}
                    strokeWidth={1.5}
                    className="mt-0.5 flex-shrink-0 text-gold group-hover:text-gold-200"
                  />
                  <span>adrianalaszlo@gmail.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-sm text-cream/50">
                  <MapPin
                    size={15}
                    strokeWidth={1.5}
                    className="mt-0.5 flex-shrink-0 text-gold"
                  />
                  <span>Str. Artelor 35, Cluj-Napoca</span>
                </div>
              </li>
            </ul>

            {/* Trauma Center reference */}
            <div className="mt-6 pt-5 border-t border-cream/10">
              <p className="text-[0.65rem] text-cream/35 mb-1.5 uppercase tracking-[0.12em]">
                Fondator
              </p>
              <a
                href="https://traumacenter.ro"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-sm text-cream/50 hover:text-teal transition-colors"
              >
                Trauma Center Cluj-Napoca ↗
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-cream/10">
        <div className="section-container py-5 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-xs text-cream/30">
            © {new Date().getFullYear()} Adriana Laszlo. Toate drepturile
            rezervate.
          </p>
          <p className="text-xs text-cream/30 uppercase tracking-[0.08em]">
            Colegiul Psihologilor din România · ARPI
          </p>
        </div>
      </div>
    </footer>
  );
}
