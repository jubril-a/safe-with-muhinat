import styles from './Intro.module.scss'
import Button from './Button'

const Intro = () => {
  return (
    <section className={`${styles.intro} section`}>
        <div className="constraint-500">
          <div className={styles.paragraph}>
            <p className={styles.p1}>The isolation and confusion that often come with  dealing with mental health challenges can feel overwhelming, especially when people around you dismiss your struggles or when you can&apos;t find someone who truly understands your challenges while honoring your values.</p>
            <p className={styles.p2}>My own recovery journey inspired my path into mental health coaching and Islamic psychology, equipping me to offer practical, faith-aligned guidance. <span className={styles.cta}>Take the first step towards healing today - your story matters, and you don&apos;t have to navigate this journey alone.</span></p>
            <Button label="Get Help Now" eClass="variant2" to=""></Button>
          </div>
        </div>
    </section>
  )
}

export default Intro