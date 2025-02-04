'use client'

import { useState } from 'react'
import styles from './Navbar.module.scss'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Button from './Button'
import Link from 'next/link'

export default function Navbar({page}) {
    const [isOpen, setIsOpen] = useState(null)
    const [clicked, setClicked] = useState(false)
    

    const transition = {duration: .75, ease: [.246,.75,.187,1]}

    return (
        <div className={styles.navigation}>
            <nav>
                <div className={styles.logo}>SWM<span>.</span></div>
                <motion.div
                    initial={{y: "-100%"}}
                    animate={isOpen ? {y: 63} : null}
                    transition={transition}
                  className={styles.links}>
                    <Link href="/" className={page == "home" ? styles.active : undefined}>Home</Link>
                    <Link href="/about" className={page == "about" ? styles.active : undefined}>About Me</Link>
                    <div className={styles.resourses}>
                        <button className={styles.Button} onClick={() => setClicked(!clicked)}>Resourses</button>
                        {clicked && <motion.div
                            initial={{x: "-20%", y: "20%", opacity: 0}}
                            animate={{y: 0, opacity: 1}}
                            transition={transition}
                        className={styles.dropdown}>
                            <a href="">Wisdom Letters for the Young Muslimah</a>
                        </motion.div>}
                        {clicked && <div className={styles.mobileResourses}>
                            <a href="">Wisdom Letters for the Young Muslimah</a>
                        </div>}
                    </div>
                    <a className={styles.mobileCtaButton} href="">Get Help Now</a>
                </motion.div>
                <div className={styles.navButtons}>
                    <Button label="Get Help Now" to="#" eClass="variant2" isCTA="true" />
                    <button className={styles.mobileNav}>
                       <Image src={isOpen ? "/images/close.png" : "/images/menu.png"} width="26" height="26" alt="menu" onClick={() => setIsOpen(!isOpen)}/>
                    </button>
                </div>
                
            </nav>
        </div>
    )
}