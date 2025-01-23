import Image from 'next/image'
import styles from './Product.module.scss'
import { MonaSans } from '../fontLoader'
import Button from './Button'

const Product = () => {
  return (
    <section>
        <div className={`${styles.product} section`}>
            <div className="constraint-500">
                <div className={styles.productContent}>
                    <h3 className={`${styles.heading} ${MonaSans.className}`} style={{backgroundColor: "#162916"}}>Digital Product</h3>
                    <h2 className="h2">Wisdom Letters for the Young Muslimah</h2>
                    <p className="bodyText">Collection of 30 heartfelt letters for young Muslim women seeking guidance in different areas of life</p>
                    <div className={styles.actions}>
                        <Button label="Get Your Copy" eClass="variant" to="https://selar.co/3ct9g1" />
                        <a href="#" className={styles.link}>See Product Details</a>
                    </div>
                </div> 
            </div>
        </div>
        <div className={`${styles.extra} constraint-500`}>
            <div>
                <p className={styles.subheading}>Contains Practical Lessons on: </p>
                <ul>
                    <li>Faith</li>
                    <span></span>
                    <li>Family</li>
                    <span></span>
                    <li>Friendship</li>
                    <span></span>
                    <li>Finances</li>
                    <span></span>
                    <li>Self-care</li>
                    <span></span>
                    <li>Marriage</li>
                </ul> 
            </div>
            {/* <Image src="/images/BookMockup.png" width="500" height="664" alt="Wisdom Letters for the Young Muslimah" />   */}
        </div>
    </section>
  )
}

export default Product