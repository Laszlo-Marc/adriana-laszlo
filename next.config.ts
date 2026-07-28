/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Old WordPress privacy-policy URL
      {
        source: "/privacy-policy",
        destination: "/politica-de-confidentialitate",
        permanent: true,
      },

      // Old WordPress author archive
      {
        source: "/author/adriana",
        destination: "/despre",
        permanent: true,
      },

      // Common Romanian/about aliases, only keep these if they existed before
      {
        source: "/despre-mine",
        destination: "/despre",
        permanent: true,
      },

      // Common service aliases, only keep these if they existed before
      {
        source: "/psihoterapie",
        destination: "/servicii",
        permanent: true,
      },
      {
        source: "/servicii-psihoterapie",
        destination: "/servicii",
        permanent: true,
      },

      // Old EMDR aliases, only keep those known to have existed
      {
        source: "/emdr",
        destination: "/af-emdr",
        permanent: true,
      },
      {
        source: "/terapia-emdr",
        destination: "/af-emdr",
        permanent: true,
      },

      // Old blog archive naming
      {
        source: "/articole",
        destination: "/blog",
        permanent: true,
      },

      // Old contact alias
      {
        source: "/contacteaza-ma",
        destination: "/contact",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
};

module.exports = nextConfig;
