import styles from "./content.module.scss"

const toc = [
  {
    chapter: "Faith",
    descriptions: [
      "Deepen your connection with Allah and strengthen your relationship with your Creator.",
      "Discover your purpose"
    ],
  },
  {
    chapter: "Family",
    descriptions: [
      "Build nurturing relationships with loved ones while upholding Islamic values",
      "How to deal with difficult family members."
    ],
  },
  {
    chapter: "Friendship",
    descriptions: [
      "Learn how to pick the right friends",  
      "Learn how to maintain healthy friendships and navigate difficult dynamics."
    ],
  },
  {
    chapter: "Finances",
    descriptions: ["Gain practical insights on how to make, manage and multiply money wisely."],
  },
  {
    chapter: "Self care",
    descriptions: ["How to cultivate mental hygiene",
      "How to get started with your personal hygiene"],
  },
  {
    chapter: "Marriage",
    descriptions: ["How to Prepare for marriage",
      "How to nurture a fulfilling marital relationship rooted in love, respect, and understanding."],
  },
]

const ContentBox = ({heading, desc}) => {
  return (
    <div className={styles.ContentBox}>
      <h3>{heading}</h3>
    </div>
  )
}

const Content = () => {
  return (
      <div className="constraint-500">
        <h2>What's Inside</h2>
        {toc.map((item) => <ContentBox key={item.chapter} heading={item.chapter} desc={item.descriptions} />)}
        <ContentBox />
      </div>
  )
}

export default Content