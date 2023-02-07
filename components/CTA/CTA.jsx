import styles from './CTA.module.css'

function CTA() {
  return(
  <div className={styles.gpt3__cta}>
    <div className={styles.gpt3__cta_content}>
      <p> </p>
      <h3>Enroll Today and Become the Artist you always dreamt of</h3>
    </div>
    <div className={styles.gpt3__cta_btn}>
      <a href="https://docs.google.com/forms/u/0/d/e/1FAIpQLSdDXfBr5bJG8xEFa0O4VkkyKUM7yLuCw1iU7T-aHvV1_kV7RA/formResponse"><button type="button">Enroll</button></a>
    </div>
  </div>
  )
}

export default CTA;
