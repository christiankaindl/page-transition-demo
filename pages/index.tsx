import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'
import { MotionText } from '../components/MotionText'
import styles from '../styles/Home.module.css'
import { motion } from 'framer-motion'

const backdropVariants = {
  transparent: {
    opacity: 0
  },
  opaque: {
    opacity: 1
  }
}

const Home: NextPage = () => {
  useEffect(() => {
    console.log('first render home page')
  }, [])
  return (
    <motion.div variants={backdropVariants} initial='transparent' animate='opaque' exit='transparent' className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.tsx</code>
        </p>

        <div className={styles.grid}>
          <Link href="/page-1?text=Awesome Title for The Views" as='/page-1' className={styles.card}>
            <h2>
              <MotionText text='Awesome Title for The Views' id='/page-1' />
            </h2>
            <p>Even better description of the blog post, omg!</p>
          </Link>

          <Link href="/page-2?text=Another Crazy Page Title" as='/page-2' className={styles.card}>
            <h2>
              <MotionText text='Another Crazy Page Title' id='/page-2' />
            </h2>
            <p>Even better description of the blog post, omg!</p>
          </Link>

          <Link href="/page-3?text=It is what it is" as='/page-3' className={styles.card}>
            <h2>
              <MotionText text='It is what it is' id='/page-3' />
            </h2>
            <p>Even better description of the blog post, omg!</p>
          </Link>

          <Link href="/page-4?text=Thoughts on Page Transitions" as='/page-4' className={styles.card}>
            <h2>
              <MotionText text='Thoughts on Page Transitions' id='/page-4' />
            </h2>
            <p>Even better description of the blog post, omg!</p>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </motion.div>
  )
}

export default Home


