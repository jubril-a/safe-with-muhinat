import Button from './Button'
import styles from './action.module.scss'

const Action = () => {
  return (
    <section className={`${styles.action} constraint-500`}>
        <div className={styles.form}>
            <div className="constraint-300">
                <h2>Didn&apos;t find the answer you were looking for?</h2>
                <p className="bodyText">Let me know below, and I&apos;ll get back to you soon!</p>
                <form>
                    <label htmlFor="name">Email
                        <input type="email" name="Email" id="email" />
                    </label>
                    <label htmlFor="question">Question
                        <textarea name="Question" id="question"></textarea>
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </div>
        <div className={styles.booking}>
            <div className="constraint-300">
                <div className={styles.bookingContent}>
                    <h2>Book an Appointment Instead</h2>
                    <p className="bodyText">Need more than just answers? Book an appointment with me for a personalized session. Whether it&apos;s a quick consultation or an in-depth discussion, I&apos;m here to help.</p>
                    <Button label="Book a Recovery Call" eClass="variant" />
                </div>
                <div className={styles.shapesWrapper}>
                    <div className={`${styles.shape} ${styles.shape1}`}></div>
                    <div className={`${styles.shape} ${styles.shape2}`}></div>
                    <div className={`${styles.shape} ${styles.shape3}`}></div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Action