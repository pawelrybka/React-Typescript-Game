import '../styles/index.css'
import '../styles/variables.css'
import Footer from '../components/footer/footer'
import Header from '../components/header/Header'
import AddPoint from '@/components/addPoint/AddPoint'

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header/>
      <Component {...pageProps} />
      <AddPoint/>
      <Footer/>
    </>
  )
}

