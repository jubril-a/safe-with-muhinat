import { Lato } from "../fontLoader"
import styles from './Hero.module.scss'
import Button from "./Button"

export default function Hero() {
    return (
        <div className={styles.heroContent}>
            <h1 className={`${styles.h1} ${Lato.className}`}>Personalized Coaching for Muslimahs Ready to Heal, Grow,
                and Step into the best version of themselves.</h1>
            <p>Let&apos;s work together to help you build confidence, clarity,
                and resilience with faith-based guidance.</p>
            <Button label="Book a Recovery Call" />
        </div>
        
    )
}   