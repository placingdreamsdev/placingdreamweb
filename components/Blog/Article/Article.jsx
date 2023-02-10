import Image from "next/image";
import styles from "./Article.module.css";

const Article = ({ imgUrl, date, text, link }) => (
  <div className={styles.gpt3__blog_container_article}>
    <div className={styles.gpt3__blog_container_article_image}>
      <Image src={imgUrl} alt="blog_image" />
    </div>
    <div className={styles.gpt3__blog_container_article_content}>
      <div>
        <p className={styles.datetext}>{date}</p>
        <a href={link} className={styles.paonetext}>
          {text}
        </a>
      </div>
    </div>
  </div>
);

export default Article;
