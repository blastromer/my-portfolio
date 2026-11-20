import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

const themeScript = `(function(){try{var t=localStorage.getItem("romer-theme");document.documentElement.classList.toggle("dark",t!=="light");}catch(e){}})();`;

const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Romer Necesario | Senior Software Engineer | Laravel, Golang, AWS & Cloud",
  description:
    "Senior Software Engineer specializing in Laravel, Golang, APIs, microservices, AWS, Kubernetes, e-commerce platforms, and production systems.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Romer Necesario | Senior Software Engineer",
    description:
      "I build and operate production systems end-to-end — architecture, backend, integrations, cloud infrastructure, and scaling.",
    url: "/",
    siteName: "Romer Necesario Portfolio",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Romer Necesario | Senior Software Engineer",
    description:
      "End-to-end systems engineer specializing in Laravel, Golang, APIs, cloud infrastructure, and production operations.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${jakarta.variable} dark h-full antialiased`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-full font-sans">{children}</body>
    </html>
  );
}
