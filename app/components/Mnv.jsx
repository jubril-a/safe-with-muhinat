import { MonaSans } from '../fontLoader'
import Image from 'next/image'
import styles from './mnv.module.scss'

const Mnv = () => {
  return (
    <section className={`${styles.mnv} section`}>
        <div className="constraint-500">
            <div className={styles.mission}>
                <div className={styles.missionContent}>
                    <h3 className={`${styles.heading} ${MonaSans.className}`} style={{backgroundColor: "#98FF98"}}>My Mission</h3>
                    <p className={styles.text} style={{color: "#290629"}}>My Mission is to empower young Muslim women to overcome personal challenges, build self-worth, and live intentionally faith-aligned lives through holistic coaching. </p>
                </div>
                <div className={`${styles.missionImage} center`}>
                    <Image src="/images/mission.png" width="484" height="440" alt=""/>
                </div>
            </div>
            <div className={styles.vision}>
                <div className={styles.vision1}>
                    <h3 className={`${styles.heading} ${MonaSans.className}`} style={{backgroundColor: "#FFD448"}}>My Vision</h3>
                    <p className={styles.text} style={{color: "white"}}>To create a nurturing and inclusive space where Muslimahs feel valued and supported as they thrive emotionally, spiritually, and mentally.</p>
                </div>
                <div className={styles.vision2}>
                    <div className={styles.visionImage}>
                    </div>
                    <p className="bodyText">My vision is to inspire transformation and growth through faith-based guidance, helping young women find strength in themselves and connection with their Creator. I also aim to reduce stigma around mental health within the Muslim community and normalize recovery conversations rooted in Islam.  </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Mnv