import "./globals.css";
import { Roboto } from 'next/font/google';

import Nav from "@/components/Nav";

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300'],
});

export const metadata = {
  title: "DeannaRoth",
  description: "Welcome",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className} >
        <div >
          <Nav />
          {children}
        </div>
      </body>
    </html>
  );
}
