import { Geist, Geist_Mono, Lato } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/sections/navbar";
import { albraBold } from "./fonts";
import { LandingPageProvider } from "@/context/LandingPageContext";
import Footer from "@/components/sections/Footer.js";
import { Analytics } from '@vercel/analytics/next';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata = {
  title: "NBM RHYTHM PHYSIOTHERAPY & INTEGRATED WELLNESS CENTRE",
  description:
    "Regain your mobility and live pain-free. NBM Physiotherapy provides expert rehabilitation, pain management, and personalized physical therapy in Chennai.",
  keywords: [
    "Physiotherapy",
    "Physical Therapy",
    "Rehabilitation",
    "Pain Management",
    "Sports Injury Clinic",
    "NBM Physiotherapy",
    "Back Pain Relief",
    "Post-Surgery Rehab",
  ],
  openGraph: {
    title: "NBM RHYTHM PHYSIOTHERAPY & INTEGRATED WELLNESS CENTRE",
    description:
      "Personalized physical therapy and expert rehabilitation to help you move better and live pain-free. Book your consultation with NBM today.",
    url: "https://www.nbmrhythm.com/", // TODO: Replace with your actual live URL
    siteName: "NBM Physiotherapy",
    images: [
      {
        url: "/opengraph-image.png", // Next.js will look for this in your public/ or app/ folder
        width: 1200,
        height: 630,
        alt: "NBM Physiotherapy Clinic",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NBM Physiotherapy | Expert Care",
    description:
      "Expert rehabilitation and personalized physical therapy at NBM Physiotherapy.",
    images: ["/opengraph-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png", sizes: "192x192" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={albraBold.variable}>
      <body
        className={`
          
          ${lato.className}

          antialiased
        `}
      >
        <LandingPageProvider>
          <Navbar />
          {children}
          <Analytics/>
          <Footer />
        </LandingPageProvider>
      </body>
    </html>
  );
}
