import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'JB Cars',
  description: 'Next.js 14',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <head>
        <meta property="title" content="JB Cars" />
        <meta
          property="description"
          content="..."
        />

        <meta property="og:title" content="JB Cars" />
        <meta
          property="og:description"
          content="..."
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="JB Cars..." />
        <meta property="og:url" content="..." />
        <meta property="og:title" content="JB Cars" />

        <meta
          property="og:image"
          content="..."
        />
        <meta property="og:image:type" content="png" />
        <meta property="og:image:width" content="400" />
        <meta property="og:image:height" content="400" />
        <meta property="og:image:alt" content="JB Cars" />
        <meta property="fb:app_id" content="627076731624225" />
      </head> */}

      <body>{children}</body>
    </html>
  );
}
