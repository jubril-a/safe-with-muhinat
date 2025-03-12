import styles from "./content.module.scss"
import {MonaSans} from '../fontLoader'
import Image from "next/image"

const toc = [
  {
    icon: "moon",
    chapter: "Faith",
    descriptions: 
      [
        "Deepen your connection with Allah and strengthen your relationship with your Creator.",
        "Discover your purpose."
      ],
  },
  {
    icon: "family",
    chapter: "Family",
    descriptions: [
      "Build nurturing relationships with loved ones while upholding Islamic values.",
      "How to deal with difficult family members."
    ],
  },
  {
    icon: "friends",
    chapter: "Friendship",
    descriptions: [
      "Learn how to pick the right friends.",  
      "Learn how to maintain healthy friendships and navigate difficult dynamics."
    ],
  },
  {
    icon: "finance",
    chapter: "Finances.",
    descriptions: ["Gain practical insights on how to make, manage and multiply money wisely."],
  },
  {
    icon: "self-love",
    chapter: "Self care",
    descriptions: ["How to cultivate mental hygiene.",
      "How to get started with your personal hygiene."],
  },
  {
    icon: "marriage",
    chapter: "Marriage",
    descriptions: ["How to Prepare for marriage.",
      "How to nurture a fulfilling marital relationship rooted in love, respect, and understanding."],
  },
]

const ContentBox = ({icon, heading, desc}) => {
  return (
    <div className={styles.ContentBox}>
      <div className={styles.head}>
        <div className="center"><Image src={`/images/${icon}.png`} width="20" height="20" alt="" /></div>
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
    <div className={`${styles.contentWrapper} constraint-500`}>
      <h2 className={styles.h2}>What's Inside</h2>
      <div className={styles.contents}>{toc.map((item) => <ContentBox key={item.chapter} icon={item.icon} heading={item.chapter} desc={item.descriptions} />)}</div>
    </div>
  )
}

export default Content