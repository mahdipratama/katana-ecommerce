'use client';

import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Cart from '@/components/Cart';
import { SkeletonTheme } from 'react-loading-skeleton';
import { ProductContextProvider } from './context/ProductsContext';
import { Toaster } from 'react-hot-toast';
import './globals.css';

const metadata = {
  title: 'Mr. Bushido',
  description: 'Katana E-commerce',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden">
        <ProductContextProvider>
          <SkeletonTheme baseColor="#f4f4f4" highlightColor="#ecebeb">
            <main className="app">
              <Nav />
              <Cart />
              {children}
              <Footer />
            </main>
            <Toaster position="bottom-center" reverseOrder={false} />
          </SkeletonTheme>
        </ProductContextProvider>
      </body>
    </html>
  );
}
