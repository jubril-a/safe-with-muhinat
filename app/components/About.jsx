import { MonaSans } from '../fontLoader';
import styles from './About.module.scss';
import Button from './Button';

const About = ({page}) => {
    return (
        <section className={`${styles.about} constraint-500 section`}>
            <div className={styles.aboutMain}>
                <div className={styles.aboutImage} >
                    <img src="/images/muhinart.png" alt='' />
                </div>
                <div className={styles.aboutContent}>
                    <h2>Hi 👋, I&apos;m <span>Muhinat</span></h2>
                    <p className={`${styles.introText} bodyText`}>I&apos;m a WHO-certified mental health and recovery coach dedicated to supporting young Muslimahs (ages 12–35) in navigating life&apos;s challenges with faith, resilience, and clarity.</p>
                    <p className={`${styles.introText} bodyText`}>As a student of Islamic psychology and a mental health and recovery coach, my focus areas include self-discovery, self-esteem, identity development, confidence building, and recovery from porn addiction. I&apos;m here to help you heal, grow, and step into the best version of yourself—mind, heart, and soul.  </p>
                    <Button label={page == "about" ? "Book a Recovery Call" : "Get to Know Me"} to={page == "about" ? "#" : "/about"}/>
                </div>
            </div>
            {page == "about" ? <div className={styles.certifications}>
                <h3 className={`${MonaSans.className} ${styles.h3}`}>Certifications</h3>
                <div className={styles.certs}>
                    <div className={styles.cert}>
                        <div className={`${styles.imgWrappper} center`}>
                            <img src="/images/who.png" alt="" />
                        </div>
                        <p>WHO-Certified Mental Health & Recovery Coach</p>
                    </div>
                    <div className={styles.cert}>
                        <div className={`${styles.imgWrappper} center`}>
                            <img src="/images/bsc.png" alt="" />
                        </div>
                        <p>Bachelor&apos;s in Islamic Psychology (in progress)</p>
                    </div>
                </div>
            </div> : null}
        </section>
    );
};

export default About;