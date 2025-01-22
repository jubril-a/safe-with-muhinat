'use client'

import Image from 'next/image'
import { Lato } from '../fontLoader'
import styles from './faqBox.module.scss'
import { useState } from 'react'

const FaqBox = ({question, answer}) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={`${styles.faqBox} ${Lato.className}`} onClick={() => setIsOpen(!isOpen)}>
        <div className={styles.question}>
            <p>{question}</p>
            <Image src="/images/caret.png" width="16" height="16" alt="" style={{transform: isOpen ? "rotate(180deg)" : "rotate(0deg)"}} />
        </div>
        <div className={styles.answer} style={{display: isOpen ? "block" : "none"}}>
            <p>{answer}</p>
        </div>
    </div>
  )
}

export default FaqBox