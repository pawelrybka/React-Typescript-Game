import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Roadmap from './components/Roadmap/Roadmap'
import ContextProvider from './components/ContextProvider/ContextProvider'
import ButtonSection from './components/ButtonSection/ButtonSection'

function App() {

  return (
    <div className='app'>
      <ContextProvider>
        <Header/>
        <Roadmap/>
        <ButtonSection/>
        <Footer/>
      </ContextProvider>
    </div>
  )
}

export default App


