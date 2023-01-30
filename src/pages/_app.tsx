import '../styles/index.css'
import '../styles/variables.css'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import ButtonSection from '../components/ButtonSection/ButtonSection'
import Content from '../components/Content/Content'
import Roadmap from '../components/Roadmap/Roadmap'

const App = () => {
  return (
    <Content>
      <Header/>
      <Roadmap/>
      <ButtonSection />
      <Footer/>
    </Content>
  )
}

export default App

