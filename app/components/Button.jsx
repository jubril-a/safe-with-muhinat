import Image from "next/image";
import variables from "./variables.module.scss"

const Button = ({ label }) => {
    return (
        <button style={{
            //color: 'white',
            //backgroundColor: variables.primaryColor,
            display: 'flex',
            alignItems: 'center',
            gap: '.5rem',
            padding: '1rem 2.5rem',
            borderRadius: '100px',
            }}>
            <span>{label}</span>
            <Image width="28" height="28" alt=""/>
        </button>
    );
};

export default Button;