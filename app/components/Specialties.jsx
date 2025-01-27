import styles from './Specialties.module.scss'
import TextBox from './TextBox'

const Specialties = () => {
  return (
    <section className={`${styles.specialtiesWrapper} section`}>
        <div className='constraint-500'>
            <h2>Specialties</h2>
            <div className={styles.specialtiesBox}>
                <TextBox icon="/images/motivation.png" specialty="Self-discovery and personal growth" background="#98FF98" width="240px"/>
                <div className={styles.imgBox}></div>
                <TextBox icon="/images/confidence.png" specialty="Building self-esteem and confidence" background="#D8BFD8" width="240px"/>
                <TextBox icon="/images/self-acceptance.png" specialty="Overcoming identity crises and embracing self-acceptance" background="#FFD448" width="360px"/>
                <TextBox icon="/images/moon.png" specialty="Faith-based support for Muslimahs struggling with porn addiction" background="#D3D3D3" width="400px"/>
            </div>
        </div>
    </section> 
  )
}

export default Specialties