import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://andikadayu.my.id"),
  title: {
    default:
      "Andika Dayu - Senior Backend Developer | Go, C#, Python, PHP Expert",
    template: "%s | Andika Dayu - Backend Developer",
  },
  description:
    "Muhammad Andika Dayu Anglita Putra - Experienced Backend Developer with 3+ years expertise in Go, C#, Python, PHP, Laravel, React, and microservices architecture. Building scalable web applications and APIs.",
  keywords: [
    "Backend Developer",
    "Go Developer",
    "C# Developer",
    "Python Developer",
    "PHP Developer",
    "Laravel Developer",
    "React Developer",
    "Next.js Developer",
    "Microservices",
    "API Development",
    "Full Stack Developer",
    "Malang",
    "Indonesia",
    "Andika Dayu",
    "Muhammad Andika Dayu",
    "Software Engineer",
    "Web Developer",
    "Venturo Pro Indonesia",
    "TypeScript",
    "Node.js",
    "MongoDB",
    "Redis",
    "RabbitMQ",
    "gRPC",
    "Docker",
    "REST API",
    "GraphQL",
  ],
  authors: [
    {
      name: "Muhammad Andika Dayu Anglita Putra",
      url: "https://github.com/andikadayu",
    },
  ],
  creator: "Muhammad Andika Dayu Anglita Putra",
  publisher: "Andika Dayu",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://andikadayu.my.id",
    title:
      "Andika Dayu - Senior Backend Developer | Go, C#, Python, PHP Expert",
    description:
      "Experienced Backend Developer with 3+ years expertise in Go, C#, Python, PHP, Laravel, React, and microservices architecture. Building scalable web applications and APIs.",
    siteName: "Andika Dayu Portfolio",
    images: [
      {
        url: "https://avatars.githubusercontent.com/u/180908597?v=4",
        width: 1200,
        height: 630,
        alt: "Andika Dayu - Backend Developer Portfolio",
      },
    ],
  },
  alternates: {
    canonical: "https://andikadayu.my.id",
  },
  category: "technology",
  classification: "Portfolio Website",
  verification: {
    google: "v49p2JHxag6KyM21YlgTMz0LVco1EcYtXBhkyzHlgT4", // Replace with actual verification code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark" data-theme="dark">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
        <meta name="theme-color" content="#0f172a" />
        <meta name="color-scheme" content="dark" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Muhammad Andika Dayu Anglita Putra",
              alternateName: "Andika Dayu",
              jobTitle: "Senior Backend Developer",
              description:
                "Experienced Backend Developer with 3+ years expertise in Go, C#, Python, PHP, Laravel, React, and microservices architecture.",
              url: "https://andikadayu.my.id",
              image: "https://avatars.githubusercontent.com/u/180908597?v=4",
              email: "dikapolk@gmail.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Malang",
                addressCountry: "Indonesia",
              },
              sameAs: [
                "https://github.com/andikadayu",
                "https://github.com/andikaventuro",
                "https://www.linkedin.com/in/muhammad-andika-dayu-anglita-putra-796838142/",
                "http://t.me/andikadayu",
              ],
              knowsAbout: [
                "Backend Development",
                "Go Programming",
                "C# Programming",
                "Python Programming",
                "PHP Programming",
                "Laravel Framework",
                "React.js",
                "Next.js",
                "Microservices Architecture",
                "API Development",
                "Database Design",
                "MongoDB",
                "Redis",
                "RabbitMQ",
                "gRPC",
                "Docker",
                "TypeScript",
                "Node.js",
              ],
              worksFor: {
                "@type": "Organization",
                name: "PT Venturo Pro Indonesia",
              },
            }),
          }}
        />
      </head>
      <body className="bg-slate-900 text-white antialiased dark">{children}</body>
    </html>
  );
}
