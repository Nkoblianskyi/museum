import './globals.css';
import { Inter } from 'next/font/google';
import Header from '../components/Header';
import MobileHeader from '../components/MobileHeader';
import Footer from '../components/Footer';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata = {
  title: 'Museen Deutschlands',
  description: 'Entdecken Sie die besten Museen in Deutschland',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className={`${inter.className} bg-gray-50 text-gray-900 overflow-x-hidden`}>
        <div className="min-h-screen w-full grid grid-rows-[auto_1fr_auto] md:grid-cols-[220px_1fr] md:grid-rows-[1fr_auto] overflow-x-hidden">

          <div className="block md:hidden row-start-1 col-span-full z-50">
            <MobileHeader />
          </div>

          <aside className="hidden md:block sticky top-0 left-0 h-screen bg-white shadow-md z-40">
            <Header />
          </aside>

          <main className="row-start-2 md:row-start-1 col-span-full md:col-start-2 p-4 sm:p-6 lg:p-8 overflow-x-hidden">
            {children}
          </main>

          <footer className="row-start-3 md:row-start-2 col-span-full md:col-start-2">
            <Footer />
          </footer>

        </div>
      </body>
    </html>
  );
}
