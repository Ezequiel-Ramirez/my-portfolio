import { Inter } from "next/font/google";
import {montserrat} from './ui/fonts.js'
import "./globals.css";
import styles from "./home.module.css";
import Image from "next/image";
import Link from "next/link.js";

const inter = Inter({ subsets: ["latin"] }); //fuente de letra desde google

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} >
      <header className={styles.header}>
        <nav className={styles.nav}>
          <Link href="https://nextjs.org/docs" className={styles.link}>
            Docs
          </Link>
          <Link href="https://nextjs.org/learn" className={styles.link}>
            Learn
          </Link>
          <Link href="https://vercel.com/templates" className={styles.link}>
            Templates
          </Link>
          <Link href="https://vercel.com/new" className={styles.link}>
            Deploy
          </Link>
        </nav>
      </header>
      {children}
      <footer className={styles.footer}>
        <Link
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <Image
          width={180}
          height={37}
           src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </Link>
      </footer>
      </body>
    </html>
  );
}
