import type { Metadata } from 'next';
import { Manrope, Space_Grotesk } from 'next/font/google';
import './globals.css';

const manrope = Manrope({ variable: '--font-body', subsets: ['latin'] });
const space = Space_Grotesk({ variable: '--font-display', subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://automationpoint.pages.dev'),
  title: 'Automation Point — Prepress Automation & Digital Solutions',
  description: 'Automation Point delivers practical prepress automation, quality assurance systems and digital workflow solutions that improve accuracy, speed and production efficiency.',
  openGraph: {
    title: 'Automation Point — Automation that moves work forward.',
    description: 'Automation Point delivers practical prepress automation, quality assurance systems and digital workflow solutions that improve accuracy, speed and production efficiency.',
    type: 'website',
    images: [{ url: '/og-linkedin-v2.png', width: 1200, height: 630, alt: 'Automation Point — Automation that moves work forward.' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Automation Point — Automation that moves work forward.',
    description: 'Automation Point delivers practical prepress automation, quality assurance systems and digital workflow solutions that improve accuracy, speed and production efficiency.',
    images: ['/og-linkedin-v2.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${manrope.variable} ${space.variable}`}>{children}</body></html>;
}
