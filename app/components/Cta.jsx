import styles from "./Cta.module.scss"
import Button from "./Button"

const Cta = () => {
  return (
    <section className={`${styles.ctaSection} section center`}>
        <div className={styles.ctaContent}>
            <h2>Ready to Start Your Healing Journey?</h2>
            <p>You don&apos;t have to navigate this alone. Take the first step towards healing today.</p>
            <Button label="Get Help Now" eClass="variant2" />
        </div>
    </section>
  )
}

export default Cta