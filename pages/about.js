import Image from 'next/image'

// import ScrollProgressBar from '../src/app/Components/ScrollProgressBar'
import ScrollProgressBar from '../Components/ScrollProgressBar'
import Abouts from '../Components/About'
// import Hero from './Components/Home'


export default function About() {
  // useClient(); // Marking the parent component as a Client Component

  return (
    <>  
    <ScrollProgressBar />
      <Abouts />
      </>

  )
}
