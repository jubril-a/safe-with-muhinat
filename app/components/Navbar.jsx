'use client'

import { useState } from 'react'
import styles from './Navbar.module.scss'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Button from './Button'
import Link from 'next/link'

export default function Navbar({page}) {
    const [isOpen, setIsOpen] = useState(null)
    return (
        <div className={styles.navigation}>
            <nav>
                <div className={styles.logo}>SWM<span>.</span></div>
                <motion.div
                    initial={{y: "-100%"}}
                    animate={isOpen ? {y: 63} : null}
                    transition={{duration: .75, ease: [.246,.75,.187,1]}}
                  className={styles.links}>
                    <Link href="/" className={page == "home" ? styles.active : null}>Home</Link>
                    <Link href="/about" className={page == "about" ? styles.active : null}>About Me</Link>
                    <a href="">Resourses</a>
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