import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

const themeScript = `(function(){try{var t=localStorage.getItem("romer-theme");document.documentElement.classList.toggle("dark",t!=="light");}catch(e){}})();`;

export const metadata: Metadata = {
  title: "Romer Necesario | Senior Software Engineer",
  description:
    "Romer Necesario — Senior Software Engineer in Bacolod City. PHP, Laravel, Golang, Vue.js, and microservices for high-volume e-commerce and distributed systems.",
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
