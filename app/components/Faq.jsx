import FaqBox from './FaqBox'
import styles from './faq.module.scss'

const Faq = () => {
  return (
    <section className={`${styles.faq} section`}>
      <h2 className="h2">Frequently Asked Questions</h2>
      <div className={styles.faqBoxes}>
          <FaqBox question="What areas do you specialize in?" answer="I focus on self-discovery, identity development, building confidence, and overcoming self-esteem issues. I also provide faith-based support for overcoming porn addiction." />
          <FaqBox question="Why do you focus on porn addiction?" answer="Porn addiction is a rising issue, even within the Muslim community. I understand how difficult it can be to seek help for this struggle. My coaching provides a safe, nonjudgmental, and compassionate space to help you break free, rebuild your confidence, and reclaim your life—all while staying true to your faith. " /> 
          <FaqBox question="Are your services Islamic?" answer="Yes, my coaching is rooted in Islamic principles, ensuring that your healing journey aligns with your faith. I believe true healing begins when we connect with our Creator and embrace the guidance of our deen. " /> 
          <FaqBox question="What happens in a coaching session?" answer="Each session is personalized to your needs. We’ll explore your challenges, set clear goals, and develop practical strategies to help you overcome them. My role is to guide, support, and empower you on your journey." />
          <FaqBox question="Is coaching confidential?" answer="Absolutely. Your privacy is my priority, and everything we discuss will remain strictly confidential." /> 
          <FaqBox question="Is coaching the same as therapy?" answer="Coaching and therapy are different, though they share some similarities. Coaching focuses on helping you set and achieve personal goals, develop practical strategies, and move forward in life. Therapy, on the other hand, involves addressing deeper mental health issues, trauma, or clinical diagnoses." /> 
          <FaqBox question="Do you offer therapy services?" answer="Currently, I do not offer therapy services as I am not a licensed therapist yet. However, I am a WHO-certified mental health and recovery coach and a student of Islamic psychology. My coaching services are designed to provide support, guidance, and actionable steps within a faith-based framework. If you require therapy, I’m happy to help you find licensed professionals who can meet your needs." /> 
      </div>
    </section>
  )
}

export default Faq