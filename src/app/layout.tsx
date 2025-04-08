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
      <body
        className={`${inter.className} bg-gray-50 overflow-x-hidden text-gray-900`}
      >
        <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] grid-rows-[auto_1fr_auto] min-h-screen max-w-full overflow-x-hidden">

          {/* Мобільне меню (показується лише на маленьких екранах) */}
          <div className="md:hidden col-span-full row-start-1 z-50">
            <MobileHeader />
          </div>

          {/* Сайдбар */}
          <aside className="hidden md:block bg-white shadow-md h-screen sticky top-0 left-0 row-span-3 z-40">
            <Header />
          </aside>

          {/* Контент */}
          <main className="col-span-full md:col-start-2 row-start-2 p-4 sm:p-6 lg:p-8">
            {children}
          </main>

          {/* Футер */}
          <footer className="col-span-full md:col-start-2 row-start-3">
            <Footer />
          </footer>
        </div>
      </body>
    </html>
  );
}
