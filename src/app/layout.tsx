import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/ui/ScrollToTop';
import './globals.css';

const amberly = localFont({
  src: '../../public/fonts/AmberlySans-ExtraBold.ttf',
  variable: '--font-amberly',
  display: 'swap',
  weight: '800',
});

export const metadata: Metadata = {
  title: 'Cactus Coffee | Where Creativity Meets Nature',
  description:
    'A curated space blending contemporary art, lush botanicals, and handcrafted specialty coffee. Visit us in the heart of the creative district.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={amberly.variable}>
      <body className="antialiased" suppressHydrationWarning>
        <Navbar />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
