import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { SkeletonTheme } from 'react-loading-skeleton';
import { CartContextProvider } from './context/CartContext';
import { Toaster } from 'react-hot-toast';
import './globals.css';

export const metadata = {
  title: 'Mr. Bushido',
  description: 'Katana E-commerce',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden">
        <CartContextProvider>
          <SkeletonTheme baseColor="#f4f4f4" highlightColor="#ecebeb">
            <main className="app">
              <Nav />
              {children}
              <Footer />
            </main>
            <Toaster position="bottom-center" reverseOrder={false} />
          </SkeletonTheme>
        </CartContextProvider>
      </body>
    </html>
  );
}
