'use client';

import Nav from '@/components/Nav';
import './globals.css';
import Footer from '@/components/Footer';
import { SkeletonTheme } from 'react-loading-skeleton';
import Cart from '@/components/Cart';
import { ProductContextProvider } from './context/ProductsContext';

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
          </SkeletonTheme>
        </ProductContextProvider>
      </body>
    </html>
  );
}
