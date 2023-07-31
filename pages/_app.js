// import { Provider } from 'react-redux'
import ScrollProgressBar from '../Components/ScrollProgressBar'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return      <> 
  <ScrollProgressBar />
    <Component {...pageProps} /> 
    </>

}
