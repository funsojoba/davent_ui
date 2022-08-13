import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import HomePage from "./home"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Davent</title>
        <meta name="description" content="Davent Website" />
        <link rel="icon" href="/DaventLogo.svg" />
      </Head>

      <main className={styles.main}>
        <HomePage />
      </main>
      
    </div>
  )
}
