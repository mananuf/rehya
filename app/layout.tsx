import React from "react"
import type { Metadata } from 'next'
import { Instrument_Sans, Instrument_Serif, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const instrumentSans = Instrument_Sans({ 
  subsets: ["latin"],
  variable: '--font-instrument'
});

const instrumentSerif = Instrument_Serif({ 
  subsets: ["latin"],
  weight: "400",
  variable: '--font-instrument-serif'
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: '--font-jetbrains'
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://ncdc.gov.ng'
const SITE_DESCRIPTION =
  'The North Central Development Commission (NCDC) drives reconstruction, rehabilitation and sustainable development across Benue, Kogi, Kwara, Nasarawa, Niger, Plateau and the FCT — serving over 20 million Nigerians.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'NCDC — North Central Development Commission',
    template: '%s — NCDC',
  },
  description: SITE_DESCRIPTION,
  applicationName: 'North Central Development Commission',
  generator: 'v0.app',
  keywords: [
    'NCDC',
    'North Central Development Commission',
    'Nigeria',
    'regional development',
    'Benue',
    'Kogi',
    'Kwara',
    'Nasarawa',
    'Niger State',
    'Plateau',
    'FCT',
    'Lafia',
    'infrastructure',
    'rehabilitation',
    'federal commission',
  ],
  authors: [{ name: 'North Central Development Commission' }],
  creator: 'North Central Development Commission',
  publisher: 'Federal Republic of Nigeria',
  category: 'government',
  formatDetection: { telephone: false },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_NG',
    url: '/',
    siteName: 'North Central Development Commission',
    title: 'NCDC — North Central Development Commission',
    description: SITE_DESCRIPTION,
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'NCDC — Rebuilding the heart of Nigeria. 6 states + FCT, 121 LGAs, 20M+ people served.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NCDC — North Central Development Commission',
    description: SITE_DESCRIPTION,
    images: ['/og.png'],
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/favicon-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: '/apple-icon.png',
    shortcut: '/favicon-32x32.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${instrumentSans.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable} font-sans antialiased bg-background`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
