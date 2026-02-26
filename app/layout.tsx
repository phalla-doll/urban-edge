import type {Metadata} from 'next';
import { Inter, Anton } from 'next/font/google';
import './globals.css'; // Global styles

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const anton = Anton({ weight: '400', subsets: ['latin'], variable: '--font-display' });

export const metadata: Metadata = {
  title: 'Urban Edge | Streetwear Redefined',
  description: 'Minimal. Bold. Made for the streets.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${anton.variable}`}>
      <body className="font-sans antialiased text-[#111] bg-[#F8F8F8]" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
