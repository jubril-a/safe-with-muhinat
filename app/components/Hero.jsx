import { Lato } from "../fontLoader"
import styles from './Hero.module.scss'
import Button from "./Button"
import { MonaSans } from "../fontLoader"
import Image from "next/image"

export default function Hero() {
    return (
        <header className={styles.hero}>
            <div className={styles.heroImage}>

            </div>
            <div>
                <div className={styles.heroContent}>
                    <div className={styles.tagline}>
                        <Image src="/images/lotus.png" width="16" height="16" alt=""/>
                        <p>Your wellness journey starts here</p>
                    </div>
                    <h1 className={`${styles.h1} ${Lato.className}`}>Personalized Coaching for Muslimahs Ready to Heal, Grow,
                        and Step into the Best Version of Themselves.</h1>
                    <p className={`${MonaSans.className} ${styles.subheading}`}>Discover a holistic approach to well-being inspired by Islamic values. Nurture your health, strengthen your faith, and find peace within.</p>
                    <Button label="Book a Recovery Call" />
                </div>
            </div>
        </header> 
    )
}