import styles from "./content.module.scss"
import {MonaSans} from '../fontLoader'

const toc = [
  {
    chapter: "Faith",
    descriptions: 
      [
        "Deepen your connection with Allah and strengthen your relationship with your Creator.",
        "Discover your purpose."
      ],
  },
  {
    chapter: "Family",
    descriptions: [
      "Build nurturing relationships with loved ones while upholding Islamic values.",
      "How to deal with difficult family members."
    ],
  },
  {
    chapter: "Friendship",
    descriptions: [
      "Learn how to pick the right friends.",  
      "Learn how to maintain healthy friendships and navigate difficult dynamics."
    ],
  },
  {
    chapter: "Finances.",
    descriptions: ["Gain practical insights on how to make, manage and multiply money wisely."],
  },
  {
    chapter: "Self care",
    descriptions: ["How to cultivate mental hygiene.",
      "How to get started with your personal hygiene."],
  },
  {
    chapter: "Marriage",
    descriptions: ["How to Prepare for marriage.",
      "How to nurture a fulfilling marital relationship rooted in love, respect, and understanding."],
  },
]

const ContentBox = ({icon, heading, desc}) => {
  return (
    <div className={styles.ContentBox}>
      <div className={styles.head}>
        <div className="center"></div>
        <h3>{heading}</h3>
      </div>
      <div className={styles.body}>
        {desc.map((item) => <p className={MonaSans.className}>{item}</p>)}
      </div>
      
    </div>
  )
}

const Content = () => {
  return (
    <div className="constraint-500">
      <h2 className={styles.h2}>What's Inside</h2>
      <div className={styles.contents}>{toc.map((item) => <ContentBox key={item.chapter} heading={item.chapter} desc={item.descriptions} />)}</div>
    </div>
  )
}

export default Content