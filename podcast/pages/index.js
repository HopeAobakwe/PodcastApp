import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import styles from "@/styles/Home.module.css";

export default function Home() {
  useEffect(() => {
    // Fetch podcast data or any initial setup
  }, []);

  return (
    <>
      <Head>
        <title>Podcast App</title>
        <meta name="description" content="Discover and listen to podcasts" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <header className={styles.header}>
          <h1 className={styles.title}>Listen With Hope</h1>
          <Image
            src="/logo.png"
            alt="Podcast Logo"
            width={180}
            height={37}
          />
        </header>

        <section className={styles.grid}>
          <a
            href="/category/news"
            className={styles.card}
          >
            <h2>News</h2>
            <p>Stay updated with the latest news podcasts.</p>
          </a>

          <a
            href="/category/technology"
            className={styles.card}
          >
            <h2>Technology</h2>
            <p>Explore the world of technology through podcasts.</p>
          </a>

          <a
            href="/category/business"
            className={styles.card}
          >
            <h2>Business</h2>
            <p>Learn about business strategies and entrepreneurship.</p>
          </a>

          <a
            href="/category/health"
            className={styles.card}
          >
            <h2>Health</h2>
            <p>Discover podcasts about health and wellness.</p>
          </a>
        </section>

        <footer className={styles.footer}>
          <p>Powered by{' '}
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vercel
            </a>
          </p>
        </footer>
      </main>
    </>
  );
}
