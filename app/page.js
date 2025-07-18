import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Intro from "./components/Intro"
import About from "./components/About"
import Specialties from "./components/Specialties"
import Product from "./components/Product"
import Faq from "./components/Faq"
import Action from "./components/Action"
import Cta from "./components/Cta"
import Footer from "./components/Footer"

export default function Home() {
  return (
      <>
        <Navbar page="home" />
        {/* <Hero />
        <Intro />
        <About page="home"/>
        <Specialties />
        <Product />
        <Faq />
        <Action />
        <Cta />
        <Footer /> */}
      </>
  )
}
