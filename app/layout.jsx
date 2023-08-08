import Nav from '@/components/Nav';
import './globals.css';
import Footer from '@/components/Footer';
import { SkeletonTheme } from 'react-loading-skeleton';

export const metadata = {
  title: 'Mr. Bushido',
  description: 'Katana E-commerce',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden">
        <main className="app">
          <Nav />
          <SkeletonTheme baseColor="#f4f4f4" highlightColor="#ecebeb">
            {children}
          </SkeletonTheme>
          <Footer />
        </main>
      </body>
    </html>
  );
}
