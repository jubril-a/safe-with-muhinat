import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Intro from "./components/Intro"
import About from "./components/About"
import Specialties from "./components/Specialties"
import Mnv from "./components/Mnv"

export default function Home() {
  return (
      <>
        <Navbar />
        <Hero />
        <Intro />
        <About />
        <Specialties />
        <Mnv />
      </>
  )
}
