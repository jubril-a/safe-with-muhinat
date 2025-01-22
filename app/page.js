import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Intro from "./components/Intro"
import About from "./components/About"
import Specialties from "./components/Specialties"
import Mnv from "./components/Mnv"
import Product from "./components/Product"

export default function Home() {
  return (
      <>
        <Navbar />
        <Hero />
        <Intro />
        <About />
        <Specialties />
        <Mnv />
        <Product />
      </>
  )
}
