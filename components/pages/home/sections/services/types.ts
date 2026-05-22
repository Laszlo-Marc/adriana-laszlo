export type ServiceItem = {
  id: string;
  title: string;
  subtitle: string;
  href: string;
  label: string;
  image: {
    src: string;
    alt: string;
  };
  accent: {
    overlayActive: string;
    overlayInactive: string;
    borderActive: string;
    pillBg: string;
    pillText: string;
    mobileRow: string;
    mobileRowActive: string;
  };
};
