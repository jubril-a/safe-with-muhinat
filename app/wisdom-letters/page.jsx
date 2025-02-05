import Navbar from "../components/Navbar"
import BookHero from "../components/BookHero"
import BookDescription from "../components/BookDescription"

const page = () => {
  return (
    <>
        <Navbar page="wlfym" />
        <BookHero />

        <BookDescription />
    </>
  )
}

export default page