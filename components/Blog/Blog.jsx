import Article from './Article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import styles from './Blog.module.css'

function Blog() {
  return (
    <div className={[styles.gpt3__blog, styles.section__padding].join(" ")} id="blog">
    <div className={styles.gpt3__blog_heading}>
      <h1 className={styles.gradient__text}>Still Confused?, <br /> Take it from the biggest media houses.</h1>
    </div>
    <div className={styles.gpt3__blog_container}>
      <div className={styles.gpt3__blog_container_groupA}>
        <Article imgUrl={blog01} date="hindustan times" text="Nandan Jha is turning dreams to reality with his film institute, Placing Dreams" link="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwizqcvT3tf5AhXMR2wGHW2LCz4QFnoECBMQAQ&url=https%3A%2F%2Fwww.hindustantimes.com%2Fbrand-post%2Fnandan-jha-is-turning-dreams-to-reality-with-his-film-institute-placing-dreams-101615549989688.html&usg=AOvVaw0a7dPzPY_HkWPT6D7MiEEE" />
      </div>
      <div className={styles.gpt3__blog_container_groupB}>
        <Article imgUrl={blog02} date="business standard" text="Placing Dreams ranked as third best Filmmaking Institute of India" link="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwj6tui23tf5AhXsSGwGHc-1AI44ChAWegQIDRAB&url=https%3A%2F%2Fwww.business-standard.com%2Fcontent%2Fspecials%2Fplacing-dreams-ranked-as-third-best-filmmaking-institute-of-india-121051800685_1.html&usg=AOvVaw0qapYx8oCaI-LQt38QOoD5" />
        <Article imgUrl={blog03} date="indian express" text="Placing Dreams top rated film institute for budding artists" link="https://www.newindianexpress.com/lifestyle/2022/jul/12/placing-dreams-top-rated-film-institutefor-budding-artists-2475558.html" />
        <Article imgUrl={blog04} date="mid-day" text="Placing Dreams ranked third best Film Direction Institute in India" link="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwi__5qM3tf5AhW1R2wGHSpSCGwQFnoECBoQAQ&url=https%3A%2F%2Fwww.mid-day.com%2Flifestyle%2Finfotainment%2Farticle%2Fplacing-dreams-ranked-third-best-film-direction-institute-in-india-23173891&usg=AOvVaw11epFuhkzTOB05HSCc2Z8p&cshid=1661078098368869" />
        <Article imgUrl={blog05} date="oulook india" text="Placing Dreams Ranked Best Acting School In Mumbai And Third-Best Acting School In India" link="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwi__5qM3tf5AhW1R2wGHSpSCGwQFnoECBYQAQ&url=https%3A%2F%2Fwww.outlookindia.com%2Fwebsite%2Fstory%2Foutlook-spotlight-placing-dreams-ranked-best-acting-school-in-mumbai-and-third-best-acting-school-in-india%2F399087&usg=AOvVaw1xcbhkWxRUWyhRJ5GESLYV&cshid=1661078098368869" />
      </div>
    </div>
  </div>
  )
}

export default Blog;
