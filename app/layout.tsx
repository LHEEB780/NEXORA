import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'NEXORA — AI Business Operating System',
  description: 'AI Business Operating System — Unified intelligent management platform for businesses and enterprises.',
  openGraph: {
    title: 'NEXORA — AI Business Operating System',
    description: 'AI Business Operating System — Unified intelligent management platform for businesses and enterprises.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#090D16] text-slate-100 antialiased selection:bg-indigo-500/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
