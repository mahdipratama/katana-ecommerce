import Nav from '@/components/Nav';
import './globals.css';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Mr. Bushido',
  description: 'Katana E-commerce',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main className="app">
          <Nav />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
