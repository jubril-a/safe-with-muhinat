'use client'

import Image from "next/image";
import styles from "./Button.module.scss"
import { MonaSans } from "../fontLoader";
import { motion } from 'framer-motion'

const Button = ({ label, eClass, to, isCTA }) => {
    return (
        <motion.a whileHover={!isCTA && {gap: "14px"}} href={to} className={`${MonaSans.className} ${styles.button} ${styles[eClass]}`}>
            <span>{label}</span>
            <Image src="/images/arrow.png" width="16" height="16" alt=""/>
        </motion.a>
    );
};

export default Button;