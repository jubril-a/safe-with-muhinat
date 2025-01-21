import Image from 'next/image'

const TextBox = ({icon, specialty, width, background}) => {
  return (
    <div style={{backgroundColor: background, padding: "48px 36px", width: "fit-content", borderRadius: "16px"}}>
        <Image src={icon} alt="" width="40" height="40"/>
        <p style={{
            maxWidth: width,
            fontSize: "20px",
            fontWeight: "500",
            lineHeight: "128%",
            marginTop: "16px"
        }}>{specialty}</p>
    </div>
  )
}

export default TextBox