import { CartContextProvider } from './context/CartContext';
import { ProductsContextProvider } from './context/ProductsContext';
import { SkeletonTheme } from 'react-loading-skeleton';
import { Toaster } from 'react-hot-toast';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import './globals.css';

export const metadata = {
  title: 'Mr. Bushido',
  description: 'Katana E-commerce',
  icons: {
    icon: './favicon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden">
        <ProductsContextProvider>
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
        </ProductsContextProvider>
      </body>
    </html>
  );
}
