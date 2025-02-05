import Button from './Button';
import styles from "./BookHero.module.scss"
import Image from 'next/image';

const BookHero = () => {
  return (
    <section className={`${styles.about} constraint-600 section`}>
        <div className={styles.heroMain}>
            <div className={styles.heroImage}>
                <Image src="/images/BookMockup.png" width="500" height="664" alt="Wisdom Letters for the Young Muslimah"/>
            </div>
            <div className={styles.heroContent}>
                <h2>Wisdom Letters For The Young Muslimah</h2>
                <h3 className={styles.h3}>Product Description:</h3>
                <p className={`${styles.introText} bodyText`}>Your guide to navigating life with faith, purpose, and intentionality. Wisdom Letters for the Young Muslimah is a collection of 30 heartfelt letters for young Muslim women seeking guidance in different areas of life. This book is your companion for self-growth, providing practical advice, spiritual inspiration, and a reminder of the strength and beauty of your faith.</p>
                <Button label="Get Your Copy" to="/"/>
            </div>
        </div>
    </section>
  )
}

export default BookHero