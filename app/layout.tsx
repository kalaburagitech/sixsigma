import type React from "react";
import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title:
    "6sigma - Premium Metal Supply Corporation | High Quality Industrial Materials",
  description:
    "Leading supplier of high-quality metals including capacitors, tantalum, titanium, copper, and stainless steel. Serving chemical, construction, aerospace, and power generation industries.",
  keywords:
    "metal supply, industrial materials, capacitors, tantalum, titanium, copper, stainless steel, Bengaluru",
  authors: [{ name: "6sigma Metal Supply Corporation" }],
  openGraph: {
    title: "6sigma - Premium Metal Supply Corporation",
    description:
      "Leading supplier of high-quality industrial metals and materials",
    url: "https://6sigma.in",
    siteName: "6sigma",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://6sigma.in/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "6sigma Metal Supply Corporation - Premium Industrial Materials",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "6sigma - Premium Metal Supply Corporation",
    description:
      "Leading supplier of high-quality industrial metals and materials",
    images: ["https://6sigma.in/og-image.jpg"],
  },
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
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://6sigma.in",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${roboto.variable}`}>
      <head>
        <link rel="canonical" href="https://6sigma.in" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "6sigma Metal Supply Corporation",
              url: "https://6sigma.in",
              logo: "https://6sigma.in/logo.png",
              description:
                "Leading supplier of high-quality metals and industrial materials",
              address: {
                "@type": "PostalAddress",
                streetAddress:
                  "78, 7th main Defence Colony, Vinayak Nagar, Bagalur Main Rd, cross, Kattigenahalli",
                addressLocality: "Bengaluru",
                addressRegion: "Karnataka",
                postalCode: "560064",
                addressCountry: "IN",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-8453396612",
                contactType: "customer service",
                email: "info.6sigma.co@gmail.com",
              },
              sameAs: ["https://6sigma.in"],
              foundingDate: "2015",
              industry: "Metal Supply and Industrial Materials",
              areaServed: {
                "@type": "Country",
                name: "India",
              },
            }),
          }}
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0d9488" />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
