import Nav from './components/Nav'
import Hero from './components/Hero'
import Services from './components/Services'
import HowItWorks from './components/HowItWorks'
import PhotoBanner from './components/PhotoBanner'
import Clients from './components/Clients'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Services />
        <HowItWorks />
        <PhotoBanner />
        <Clients />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
