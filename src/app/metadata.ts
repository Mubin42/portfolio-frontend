import { Metadata } from "next";

const siteConfig = {
  name: "Kazi Ehsanul Mubin",
  title: "Kazi Ehsanul Mubin | Software Engineer",
  description:
    "I'm a software engineer who loves to build things for the web. I'm passionate about creating high-qualitycallable software that is easy to use and maintain.",
  url: "https://kazimubin.dev",
  ogImage: "https://kazimubin.dev/profile_photo.jpg",
  links: {
    github: "https://github.com/Mubin42",
    linkedin: "https://www.linkedin.com/in/kazi-mubin/",
  },
  keywords: [
    "Kazi Ehsanul Mubin",
    "Kazi Mubin",
    "Software Engineer",
    "Web Developer",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "Bangladesh",
  ],
};

const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.title,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.title,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification tokens
    google: "your-google-verification-code",
    // other verification tokens
  },
};

export default defaultMetadata;
