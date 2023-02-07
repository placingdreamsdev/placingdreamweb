import styles from './Feature.module.css'
import Link from 'next/link';

function Feature({ title, text, link }) {
  return (
  <div className={styles.gpt3__features_container__feature}>
    <div className={styles.gpt3__features_container__feature_title}>
      <div />
      <Link href={link}><h1>{title}</h1></Link>
    </div>
    <div className={styles.gpt3__features_container_feature_text}>
      <p>{text}</p>
    </div>
  </div>
  )
}

export default Feature;
