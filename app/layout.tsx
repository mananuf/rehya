import React from "react"
import type { Metadata } from 'next'
import { Instrument_Sans, Instrument_Serif, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { SplashScreen } from '@/components/site/splash-screen'
import { SITE_URL } from '@/lib/site-url'

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

const SITE_DESCRIPTION =
  'The Renewed Hope Youth Engagement (RHYE) mobilises young Nigerians into governance — through coordinating units in all 36 states and the FCT, and mobilisers across 774 local government areas and 8,809 wards.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'RHYE — Renewed Hope Youth Engagement',
    template: '%s — RHYE',
  },
  description: SITE_DESCRIPTION,
  applicationName: 'Renewed Hope Youth Engagement',
  generator: 'v0.app',
  keywords: [
    'RHYE',
    'Renewed Hope Youth Engagement',
    'Renewed Hope Agenda',
    'Nigeria',
    'youth engagement',
    'civic engagement',
    'youth mobilisation',
    'governance',
    'All Progressives Congress',
    'Abuja',
    '774 local government areas',
    'young Nigerians',
    'national youth programme',
  ],
  authors: [{ name: 'Renewed Hope Youth Engagement' }],
  creator: 'Renewed Hope Youth Engagement',
  publisher: 'Renewed Hope Youth Engagement',
  category: 'organization',
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
    siteName: 'Renewed Hope Youth Engagement',
    title: 'RHYE — Renewed Hope Youth Engagement',
    description: SITE_DESCRIPTION,
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'RHYE — Renewed Hope Youth Engagement. National, 36 states + FCT, 774 LGAs.',
      },
      {
        url: '/og-logo.jpg',
        width: 1200,
        height: 1200,
        alt: 'Official mark of the Renewed Hope Youth Engagement',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RHYE — Renewed Hope Youth Engagement',
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
        <SplashScreen />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
