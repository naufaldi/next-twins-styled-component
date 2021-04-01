import Head from 'next/head'
import tw from 'twin.macro'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <main tw="min-h-screen w-full bg-yellow-500">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita
          iure, inventore saepe aut quidem nulla? Unde autem nisi in architecto
          repudiandae alias voluptatem, provident molestias dolores eius ipsum
          praesentium cupiditate.
        </main>
      </Layout>
    </div>
  )
}
