import Image from "next/image";
import styles from "./Button.module.scss"
import { MonaSans } from "../fontLoader";

const Button = ({ label, eClass }) => {
    return (
        <a href="#" className={`${MonaSans.className} ${styles.button} ${styles[eClass]}`}>
            <span>{label}</span>
            <Image src="/images/arrow.png" width="16" height="16" alt=""/>
        </a>
    );
};

export default Button;