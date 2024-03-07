import { Metadata } from 'next';

export const meta: Metadata = {
  metadataBase: new URL('https://explorer.bitnft.io/'),
  title: 'BitStacks Explorer by Hiro',
  description: 'Generated by Next.js',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
  },
  openGraph: {
    title: 'BitStacks Explorer by Hiro',
    type: 'website',
    siteName: 'explorer.bitnft.io',
    description:
      'Explore transactions and accounts on the Stacks blockchain. Clone any contract and experiment in your browser with the Explorer sandbox.',
    images: '/StacksExplorer-OG.jpg',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@stacks',
    creator: '@stacks',
    images: '/StacksExplorer-OG.jpg',
  },
  icons: {
    icon: {
      type: 'image/svg+xml',
      url: '/static/favicon.png',
    },
  },
};
