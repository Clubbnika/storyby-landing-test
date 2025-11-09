import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'StorybyWriter',
  description: 'Platform for Writers',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="h-full w-full overflow-x-hidden min-w-0">
        {children}
      </body>
    </html>
  );
}