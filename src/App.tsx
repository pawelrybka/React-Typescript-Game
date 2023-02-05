import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Roadmap from './components/Roadmap/Roadmap'
import MainLayout from './components/MainLayout/MainLayout'


function App() {

  return (
    <MainLayout>
      <Header/>
      <Roadmap/>
      <Footer/>
    </MainLayout>
  )
}

export default App
