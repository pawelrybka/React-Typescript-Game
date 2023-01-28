import '../styles/index.css'
import '../styles/variables.css'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import ButtonSection from '../components/ButtonSection/ButtonSection'

import type { AppProps } from 'next/app';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header/>
      <Component {...pageProps} />
      <ButtonSection />
      <Footer/>
    </>
  )
}

export default App

