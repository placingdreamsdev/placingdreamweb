import React from 'react';
import Feature from "../Features/Feature/Feature";
import styles from './Courses.module.css'

function Courses() {
  return (
    <div id="features" style={{ paddingTop: '2.5rem' }} >
      <div className={[styles.gpt3__whatgpt3, styles.section__margin].join(" ")}>
        <div className={styles.gpt3__whatgpt3_feature}>
          <Feature title="What Courses do we offer?" text="Decide what's the best for you" link="/" />
        </div>
        <div className={styles.gpt3__whatgpt3_heading}>
          <h1 className={styles.gradient__text}>Practical and Up-to-date syllabus with World Class Faculty</h1>
          <p>Explore the possibilities</p>
        </div>
        <div className={styles.gpt3__whatgpt3_container}>
          <Feature title="Acting" text="The most in-demand skill in the industry" link="/Acting" />
          <Feature title="Video Editing" text="Learn the intricate ways of presentation and refining of the content in the entertainment world" link="/Editing" />
          <Feature title="Film Making" text="Understand how to develop the 'vision' which is required to craft the once in a lifetime masterpieces" link="/FilmMaking" />
          <Feature title="Script Writing" text="Become the best in the wizardry of words and forge the classics the future generations will remember" link="/Writing" />  
          <Feature title="Direction" text="Create the holy grails and the magnum opus of the modern era with your creative powers and our technical know-how" link="/Direction" />
        </div>
      </div>
    </div>
  );
}

export default Courses;
