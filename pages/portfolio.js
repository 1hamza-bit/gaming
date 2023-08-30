import Image from 'next/image'

// import ScrollProgressBar from '../src/app/Components/ScrollProgressBar'
import ScrollProgressBar from '../Components/ScrollProgressBar'
import Abouts from '../Components/About'
import Contacts from '../Components/Contact'
import Header from '../Components/Header'
import Projects from '../Components/Portfolio'
import Footer from '../Components/Footer'
// import Hero from './Components/Home'


export default function Contact() {
  // useClient(); // Marking the parent component as a Client Component

  return (
    <>  
    <ScrollProgressBar />
    <Header />
    <Projects />
    <Footer />
      </>

  )
}
