import './globals.css';
import { Inter } from 'next/font/google';
import Header from '../components/Header';
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
      <body className={`${inter.className} bg-gray-50`}>
        <div className="flex min-h-screen">

          <div className="fixed left-0 top-0 h-full w-54 bg-white shadow-md z-50">
            <Header />
          </div>

          <div className="flex flex-col flex-1 ml-54 md:ml-56">
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
