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
        <SkeletonTheme baseColor="#f4f4f4" highlightColor="#ecebeb">
          <main className="app">
            <Nav />
            {children}
            <Footer />
          </main>
        </SkeletonTheme>
      </body>
    </html>
  );
}
