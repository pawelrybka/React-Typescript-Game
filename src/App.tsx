import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Roadmap from './components/Roadmap/Roadmap'
import MainLayout from './components/MainLayout/MainLayout'
import ButtonSection from './components/ButtonSection/ButtonSection'
import ShareButton from './components/ShareButton/ShareButton'

function App() {

  return (
    <MainLayout>
      <Header/>
      <Roadmap/>
      <ButtonSection/>
      <Footer/>
    </MainLayout>
  )
}

export default App
