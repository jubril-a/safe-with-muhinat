import Image from 'next/image'
import styles from './footer.module.scss'

const Footer = () => {
  return (
    <footer>
        <div className={styles.helplines}>
            <div className="constraint-500">
                <p className={styles.helpline}>If you are in crisis, please call <span>+2348091116264</span> or <span>+2348080551376 </span>or <span>+2348033236814</span></p>
            </div>
        </div>
        <div className={styles.socials}>
            <div className="constraint-500">
                <span>&copy; Muhinat, 2025.</span>
                <div className={styles.links}>
                    <a href="#" className={`${styles.iconBox} center`}>
                        <Image src="/images/facebook.png" alt="" width={20} height={20} />
                    </a>
                    <a href="#" className={`${styles.iconBox} center`}>
                        <Image src="/images/youtube.png" alt="" width={20} height={20} />
                    </a>
                    <a href="#" className={`${styles.iconBox} center`}>
                        <Image src="/images/twitter.png" alt="" width={20} height={20} />
                    </a>
                    <a href="#" className={`${styles.iconBox} center`}>
                        <Image src="/images/instagram.png" alt="" width={20} height={20} />
                    </a>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer