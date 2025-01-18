import { Lato } from "../fontLoader"
import styles from './Hero.module.scss'

export default function Hero() {
    return (
        <h1 className={`${styles.h1} ${Lato.className}`}>Safe With Muhinat</h1>
    )
}