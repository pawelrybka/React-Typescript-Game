import '../styles/index.css'
import '../styles/variables.css'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import ButtonSection from '../components/ButtonSection/ButtonSection'
import Content from '../components/Content/Content'

const App = () => {
  return (
    <Content>
      <Header/>
      <ButtonSection />
      <Footer/>
    </Content>
  )
}

export default App

