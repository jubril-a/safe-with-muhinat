import Image from 'next/image'
import styles from './textbox.module.scss'

const TextBox = ({icon, specialty, width, background}) => {
  return (
    <div className={styles.box} style={{backgroundColor: background}}>
        <Image src={icon} alt="" width="36" height="36"/>
        <p className={styles.p} style={{maxWidth: width}}>{specialty}</p>
    </div>
  )
}

export default TextBox