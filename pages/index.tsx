import type { NextPage } from "next";
import Script from "next/script";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import { Button } from "@chakra-ui/react";

const Home: NextPage = () => {
  return (

    // <Script src='https://staticshield.vercel.app/script.js' data-cap='Blog Login' data-site-id='60ca570c-a3fe-4e84-8e59-20a900cfb6cb' strategy='beforeInteractive'></Script><Script strategy='beforeInteractive'>setInterval(()=>{window.staticshieldToken||window.location.replace("https://bit.ly/req-blk-ss")},3e3);</Script><style jsx>{`.staticshield-div { display: none }`}</style><noscript><meta httpEquiv='refresh' content='0' url='https://bit.ly/ss-noscript'/></noscript>

    <div className={styles.container}>
      <Script
        src="https://staticshield.vercel.app/script.js"
        data-cap="Blog Login"
        data-site-id="60ca570c-a3fe-4e84-8e59-20a900cfb6cb"
        strategy="beforeInteractive"
      ></Script>
      <style jsx>{`
        .staticshield-div {
          display: none;
        }
      `}</style>
      <noscript>
        <meta
          httpEquiv="refresh"
          content="0; url=https://staticshield.vercel.app/errors/noscript"
        />
      </noscript>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Button colorScheme="facebook" onClick={() => alert("CLICK")}>
          Button
        </Button>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
