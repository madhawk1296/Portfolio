import Head from 'next/head'
import Image from 'next/image'
import { Portfolio } from '../components/Portfolio'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Cristian Silva Portfolio</title>
        <meta name="description" content="Cristian Silva Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Portfolio />
    </div>
  )
}
