//import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { inter } from './../utils/fonts.js';

import Header from '../components/header.js';
import ThemeProvider from './../utils/themeProvider.js';


export const metadata = {
  title: "Creative Portfolio",
  description: "a simple portfolio site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} antialiased`}
        id='home'
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          <Header />
          <main className='text-black dark:text-white'>{children}</main>

        </ThemeProvider>
      </body>
    </html>
  );
}
