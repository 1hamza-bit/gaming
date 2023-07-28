import Image from 'next/image'

import ScrollProgressBar from './Components/ScrollProgressBar'
import About from './app/Components/About'
// import Hero from './Components/Home'


export default function About() {
  // useClient(); // Marking the parent component as a Client Component

  return (
    <>  
    <ScrollProgressBar />
      <About />
      </>

  )
}
