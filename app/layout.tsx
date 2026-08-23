import type { Metadata } from 'next';
import { Manrope, Space_Grotesk } from 'next/font/google';
import './globals.css';

const manrope = Manrope({ variable: '--font-body', subsets: ['latin'] });
const space = Space_Grotesk({ variable: '--font-display', subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://automation-point-portfolio.abdullahyz018.workers.dev'),
  title: 'Automation Point — Prepress Automation & Digital Solutions',
  description: 'Automation Point builds prepress automation, quality systems, workflow engineering and practical digital products.',
  openGraph: {
    title: 'Automation Point — Automation that moves work forward.',
    description: 'Prepress automation, quality systems and digital solutions built around real production needs.',
    type: 'website',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Automation Point — Automation that moves work forward.' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Automation Point — Automation that moves work forward.',
    description: 'Prepress automation, quality systems and digital solutions built around real production needs.',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${manrope.variable} ${space.variable}`}>{children}</body></html>;
}
