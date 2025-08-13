import { Manrope } from "next/font/google";
import "./globals.css";
import Menu from "@/components/Menu/Menu";
import Footer from "@/components/footer/Footer";

const manrope = Manrope({
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Core Studio",
  description: "Web and mobile development studio creating exceptional digital experiences",
  icons: {
    icon: [
      { url: '/favicon/favicon.ico', type: 'image/x-icon' },
      { url: '/favicon/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
    ],
    apple: [
      { url: '/favicon/apple-touch-icon.png', type: 'image/png' },
    ],
  },
  openGraph: {
    title: 'Core Studio - Web & Mobile Development',
    description: 'We craft elegant web & mobile experiences',
    url: 'https://corestudio.az',
    siteName: 'Core Studio',
    images: [
      {
        url: '/favicon.ico',
        width: 1200,
        height: 630,
        alt: 'Core Studio Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Core Studio - Web & Mobile Development',
    description: 'We craft elegant web & mobile experiences',
    images: ['/favicon.ico'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${manrope.className} antialiased`}>
        <Menu />
        {children}
        <Footer />
      </body>
    </html>
  );
}
