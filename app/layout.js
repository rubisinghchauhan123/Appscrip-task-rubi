'use client'

import { Poppins } from "next/font/google";
import "./globals.css";
import { useState, createContext } from "react";

const poppins = Poppins({ subsets: ["latin"], weight: '500' });

// Create a new context
export const MenuContext = createContext();

export default function RootLayout({ children }) {
  const [isShowMenu, setIsShowMenu] = useState(false)

  return (
    <html lang="en" className={isShowMenu ? 'show-menu' : ''}>
      <title>E-commerce shop task</title>
      <meta name="description" content="This is a e-commerce website where you can buy many products." />
      <MenuContext.Provider value={{ isShowMenu, setIsShowMenu }}>
        <body className={poppins.className}>{children}</body>
      </MenuContext.Provider>
    </html>
  );
}