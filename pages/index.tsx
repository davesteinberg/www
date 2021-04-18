import Head from 'next/head'
import styles from '../styles/Home.module.css'

import StoryForm from '../components/form'
import Footer from '../components/footer'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Covid Story</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Share your Covid Story</h1>
        <div className={styles.formContainer}>
          <StoryForm />
        </div>
      </main>

      <Footer />
    </div>
  )
}