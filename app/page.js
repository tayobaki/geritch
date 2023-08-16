import FindUs from './FindUs'
import Footer from './Footer'
import Video from './components/Video'
import About from './components/about/About'
import Header from './components/header/header'
import Navbar from './components/navbar/navbar'

export default function Home() {
  return (
    <div className=''>
      <Navbar />
      <Header />
      <About />
      <Video />
      <FindUs />
      <Footer />
    </div>
  )
}
