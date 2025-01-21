import styles from './mnv.module.scss'

const mnv = () => {
  return (
    <div>
        <div className={styles.mission}>
            <div className={styles.missionContent}>
                <h3>Mission</h3>
                <p>My Mission is to empower young Muslim women to overcome personal challenges, build self-worth, and live intentionally faith-aligned lives through holistic coaching. </p>
            </div>
            <div className={styles.missionImage}></div>
        </div>
        <div className={styles.vision}>

        </div>
    </div>
  )
}

export default mnv