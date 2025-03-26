import styles from "./bookDescription.module.scss"
import Button from "./Button"

const BookDescription = () => {
  return (
    <section className={`${styles.p1} section`}>
        <div className={`${styles.intro} constraint-500`}>
            <p className={styles.introText}>This book was thoughtfully crafted to educate, inspire, and empower young Muslimahs on their journey toward becoming well-rounded individuals. Whether you&apos;re looking for advice, reassurance, or a faith-based perspective on life&apos;s challenges, Wisdom Letters is here to support you.</p>
        </div>
        <div className={`${styles.description} constraint-500`}>
            <div className={styles.motive}>
                <p className={styles.heading}>Wisdom Letters is for you if you&apos;re a young muslimah who wants to:</p>
                <ul className={styles.motiveList}>
                    <li>Strengthen her faith and identity</li>
                    <li>Discover her purpose</li>
                    <li>Cultivate meaningful relationships</li>
                    <li>Live a balanced and intentional life in every area</li>
                </ul>
            </div>
            <div className={styles.purpose}>
                <p className={styles.heading}>You need Wisdom Letters for the young Muslimah because;</p>
                <p>It&apos;s more than a book—it&apos;s a treasure trove of practical lessons, timeless wisdom, and a gentle reminder that your life can flourish beautifully when guided by your faith and values. Get your copy today and take the first step towards becoming the best version of yourself.</p>
                <Button label="Get Your Copy" />
            </div>
        </div>
    </section>
  )
}

export default BookDescription