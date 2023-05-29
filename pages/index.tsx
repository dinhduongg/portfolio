import { Inter } from 'next/font/google'
import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Main from '@/components/Main'
import About from '@/components/About'
import Work from '@/components/Work'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Head>
        <title>My portfolio</title>
        <meta name='description' content='owned by Duong' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      <Main />
      <About />
      <Work />
    </div>
  )
}
