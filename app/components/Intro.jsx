import styles from './Intro.module.scss'

const Intro = () => {
  return (
    <section className={`${styles.intro} section`}>
        <div className="constraint-500">
            <p className={styles.p1}>The isolation and confusion that often come with  dealing with mental health challenges can feel overwhelming, especially when people around you dismiss your struggles or when you can’t find someone who truly understands your challenges while honoring your values.</p>
            <p className={styles.p2}>My own recovery journey inspired my path into mental health coaching and Islamic psychology, equipping me to offer practical, faith-aligned guidance.</p>
        </div>
    </section>
  )
}

export default Intro