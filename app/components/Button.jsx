import Image from "next/image";
import styles from "./Button.module.scss"

const Button = ({ label }) => {
    return (
        <button className={styles.button}>
            <span>{label}</span>
            <Image src="/images/arrow.png" width="16" height="16" alt=""/>
        </button>
    );
};

export default Button;