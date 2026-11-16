import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import BookingPolicy from './components/BookingPolicy'
import Booking from './components/Booking'
import WhyChooseUs from './components/WhyChooseUs'
import Contact from './components/Contact'
import SocialFollow from './components/SocialFollow'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <WhyChooseUs />
        <BookingPolicy />
        <Booking />
        <Contact />
        <SocialFollow />
      </main>
      <Footer />
    </div>
  )
}
