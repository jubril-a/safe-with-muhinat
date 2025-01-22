import { Lato } from "../fontLoader"
import styles from './Hero.module.scss'
import Button from "./Button"
import { MonaSans } from "../fontLoader"

export default function Hero() {
    return (
        <div className={styles.hero}>
            <div className={styles.heroImage}>

            </div>
            <div>
                <div className={styles.heroContent}>
                    <h1 className={`${styles.h1} ${Lato.className}`}>Personalized Coaching for Muslimahs Ready to Heal, Grow,
                        and Step into the Best Version of Themselves.</h1>
                    <p className={`${MonaSans.className} ${styles.subheading}`}>Let&apos;s work together to help you build confidence, clarity,
                        and resilience with faith-based guidance.</p>
                    <Button label="Book a Recovery Call" />
                </div>
            </div>
        </div>
        
    )
}   