import { Inter } from 'next/font/google';

export const interFont = Inter({
  weight: ['400', '600', '700'],
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  fallback: ['sans-serif'],
  preload: true,
});
