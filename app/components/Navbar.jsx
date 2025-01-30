'use client'

import { useState } from 'react'
import styles from './Navbar.module.scss'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Button from './Button'

export default function Navbar({page}) {
    const [isOpen, setIsOpen] = useState(null)
    return (
        <div className={styles.navigation}>
            <nav>
                <div className={styles.logo}>SWM<span>.</span></div>
                <motion.div
                    initial={{y: "-100%"}}
                    animate={isOpen ? {y: 70} : null}
                    transition={{duration: .75, ease: [.246,.75,.187,1]}}
                  className={styles.links}>
                    <a href="/" className={page == "home" ? styles.active : null}>Home</a>
                    <a href="/about" className={page == "about" ? styles.active : null}>About Me</a>
                    <a href="">Resourses</a>
                </motion.div>
                <div className={styles.flex}>
                    <Button label="Get Help Now" to="#" eClass="variant2"/>
                    <button className={styles.mobileNav}>
                       <Image src={isOpen ? "/images/close.png" : "/images/menu.png"} width="26" height="26" alt="menu" onClick={() => setIsOpen(!isOpen)}/>
                    </button>
                </div>
                
            </nav>
        </div>
    )
}