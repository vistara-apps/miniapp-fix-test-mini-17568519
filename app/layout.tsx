import type { Metadata } from 'next';
import './globals.css';
import { Providers } from './providers';

export const metadata: Metadata = {
  title: 'Miniapp Fix Test',
  description: 'A Next.js Base mini app using OnchainKit and Farcaster Mini App SDK',
  authors: [{ name: 'Vistara Apps' }],
  keywords: ['base', 'miniapp', 'farcaster', 'onchainkit', 'web3', 'blockchain'],
  openGraph: {
    title: 'Miniapp Fix Test',
    description: 'A Next.js Base mini app using OnchainKit and Farcaster Mini App SDK',
    url: 'https://miniapp-fix-test.vistara.dev',
    siteName: 'Miniapp Fix Test',
    images: [
      {
        url: 'https://miniappfixtest-b8id-cq4uzmlp5-vistara.vercel.app/image.png',
        width: 1200,
        height: 630,
        alt: 'Miniapp Fix Test',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Miniapp Fix Test',
    description: 'A Next.js Base mini app using OnchainKit and Farcaster Mini App SDK',
    images: ['https://miniappfixtest-b8id-cq4uzmlp5-vistara.vercel.app/image.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
