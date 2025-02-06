import Navbar from "../../components/Navbar"
import BookHero from "../../components/BookHero"
import Content from "../../components/Content"
import BookDescription from "../../components/BookDescription"
import Cta from "../../components/Cta"
import Footer from "../../components/Footer"

const page = () => {
  return (
    <>
        <Navbar page="wlfym" />
        <BookHero />
        <Content />
        <BookDescription />
        <Cta />
        <Footer />
    </>
  )
}

export default page