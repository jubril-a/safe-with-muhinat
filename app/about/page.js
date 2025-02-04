import Navbar from "../components/Navbar"
import About from "../components/About"
import Mnv from "../components/Mnv"
import Footer from "../components/Footer"
import Cta from "../components/Cta"
import styles from '../components/aboutPage.module.scss'

const page = () => {
  return (
    <>
      <Navbar page="about" />
      <div className={styles.about} style={{backgroundColor: 'rgba(255, 212, 72, .2)'}}>
        <About page="about" />
      </div>
      <Mnv />
      <Cta />
      <Footer />
    </>
  )
}

export default page