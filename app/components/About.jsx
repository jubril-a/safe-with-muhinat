import styles from './About.module.scss';
import Button from './Button';

const About = () => {
    return (
        <>
            <div>
                <div className={styles.aboutImage}></div>
                <div className={styles.aboutContent}>
                    <h2>Hi 👋, I’m Muhinat</h2>
                    <p className={styles.subheading}>I&apos;m a WHO-certified mental health and recovery coach dedicated to supporting young Muslimahs (ages 12–35) in navigating life’s challenges with faith, resilience, and clarity.</p>
                    <p className={styles.subheading}>As a student of Islamic psychology and a mental health and recovery coach, my focus areas include self-discovery, self-esteem, identity development, confidence building, and recovery from porn addiction. I’m here to help you heal, grow, and step into the best version of yourself—mind, heart, and soul.  </p>
                    <Button label="Book a Recovery Call" />
                </div>
            </div>
            <div className={styles.certs}>
                <h3>Certifications</h3>
                <div>
                    <div className={styles.cert}>
                        <div>
                            <img src="null" alt="WHO logo" />
                        </div>
                        <p>WHO-Certified Mental Health & Recovery Coach</p>
                    </div>
                    <div className={styles.cert}>
                        <div>
                            <img src="null" alt="BSc. logo" />
                        </div>
                        <p>Bachelor’s in Islamic Psychology (in progress)</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;