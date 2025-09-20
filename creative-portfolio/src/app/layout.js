//import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { inter } from './../utils/fonts.js';

import Header from '../components/header.js';




export const metadata = {
  title: "Creative Portfolio",
  description: "a simple portfolio site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
        id='home'
      >

        <Header />
        {children}

      </body>
    </html>
  );
}
