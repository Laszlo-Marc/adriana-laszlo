import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar/Navbar";
import CookieBanner from "@/components/cookies/CookiesBanner";
import ConsentScripts from "@/components/cookies/ConsentScripts";
import { CookieConsentProvider } from "@/components/cookies/CookiesConsentProvider";
import NewsletterPopup from "@/components/newsletter/NewsLetterPopup";

import { JsonLd } from "@/lib/seo/JsonLd";
import {
  personSchema,
  professionalServiceSchema,
  websiteSchema,
} from "@/lib/seo/schema";

import { SpeedInsights } from "@vercel/speed-insights/next";

type WebsiteLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function WebsiteLayout({ children }: WebsiteLayoutProps) {
  return (
    <CookieConsentProvider>
      <JsonLd
        data={[websiteSchema(), personSchema(), professionalServiceSchema()]}
      />

      <Navbar />
      <NewsletterPopup />

      <main id="main-content">{children}</main>

      <Footer />
      <CookieBanner />
      <ConsentScripts />
      <SpeedInsights />
    </CookieConsentProvider>
  );
}
