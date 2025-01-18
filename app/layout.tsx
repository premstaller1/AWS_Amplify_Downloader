import type { Metadata } from "next";
import { Inter } from "next/font/google";
import './globals.css';
import Navbar from './components/Navbar'; // Import Navbar
import Footer from './components/Footer'; // Import Footer

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Next.js App",
  description: "This is a simple app using Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Navigation Bar */}
        <Navbar />

        {/* Main content */}
        <main>
          {children}
        </main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
