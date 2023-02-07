import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Image from "next/image";
import Link from "next/link";

function Editing() {
  return (
    <div className="body2">
      <div style={{ display: "flex" }}>
        <Link href="\Course">
          <ArrowBackIcon
            style={{ marginTop: "2vh", marginLeft: "2vh", color: "white" }}
          />
        </Link>
        <div className="course_nav">
          <Link href="\Acting">
            <div className="courses_btn">Acting</div>
          </Link>
          <Link href="\Writing">
            <div className="courses_btn">Script Writing</div>
          </Link>
          <Link href="\Editing">
            <div className="courses_btn">Video Editing</div>
          </Link>
          <Link href="\Direction">
            <div className="courses_btn">Direction</div>
          </Link>
          <Link href="\FilmMaking">
            <div className="courses_btn">Film Making</div>
          </Link>
          s
        </div>
      </div>
      <div className="overall">
        <h2
          className="main"
          style={{
            background: "linear-gradient(90deg, #EE82EE 0%, #00D1FF 100%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Film Editing
          <br />
          <br />
        </h2>
        <p>
          The person who brings a movie or television show to life is a film
          editor. The story, tone, and overall impact of a movie are all shaped
          by the editor just as much as they are by the director or author.
          Because of this, talented editors are in high demand in the movie
          business.
        </p>
        <h4>Career in Film Editing</h4>
        <br />
        <p>
          The current focus on content creation have made the demand for video
          editors to be more than ever before. The job of an editor is complex
          and demanding. Despite the fierce competition, there are many chances
          in the area, particularly in India. In addition to production
          companies, news outlets, movie studios, and numerous businesses hire
          video editors. Strong abilities are necessary to survive the
          competition in a highly rewarding profession like video editing. An
          editor plays a crucial role in the movie industry. They are
          responsible for shaping the story and creating the final cut of a
          film. The editor is responsible for taking all the raw footage shot by
          the director and the cinematographer and turning it into a cohesive,
          compelling story. This involves selecting the best takes, cutting and
          arranging the footage in the right order, and adding sound effects and
          music to create a complete audiovisual experience. A skilled editor
          can make the difference between a mediocre film and a great one. They
          have the ability to take disparate elements and weave them together
          into a seamless whole, bringing the visionof director to life on
          screen. In addition to their creative contributions, editors also play
          a key role in the technical aspects of film production. They are
          responsible for maintaining the continuity of the film, ensuring that
          the actions and events portrayed on screen are consistent from one
          shot to the next. This is essential for creating a believable and
          engaging story. Editors also work closely with the director to ensure
          that the film stays within its allocated budget and production
          schedule. They must be able to make creative decisions quickly and
          efficiently in order to meet these constraints. In short, an editor is
          a vital member of the movie-making team. Their creativity, technical
          skills, and collaboration with the director are essential for creating
          a successful film. At Placing Dreams, every student and nurtured to
          become the best version of themselves and are expected to become the
          best in the industry. Students get several opportunities to work as
          interns for big production houses and get a secure job in this field.
          As budding editors, the students also get to work on different
          mini-projects to showcase their talents and make a mark for
          themselves. We help the student to track their performance and get
          better everyday with the help of our esteemed mentors, who work
          tirelessly to bring out the best in the students. With the strictness
          of the schedule and the work load, there also comes the joy of sweet
          sweet success and hence, we always motivate our students to plant the
          seeds of hard work and discipline so that everyone of them could bear
          the fruit of success. The syllabus followed at the institute is
          handcrafted by the experts in the industry and tries to shed light on
          all the dark corners which might be left in the courses by other
          institutions.
        </p>
        <br />
        <h2
          className="main"
          style={{
            background: "linear-gradient(90deg, #EE82EE 0%, #00D1FF 100%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Syllabus
          <br />
          <br />
        </h2>
        <Image
          src="/features/editing.jpeg"
          alt="image"
          width="700"
          height="350"
        />
        <p>
          1. WHAT ‘EDITING’ IS?
          <br />
          <br />
          2.HISTORY OF CINEMA & EDITING
          <br />
          <br /> 0 3. ROLE OF EDITOR IN A FILM CREW
          <br />
          <br />
          4. BASIC PRINCIPLES OF EDITING
          <br />
          <br />
          5. TYPES OF EDITING
          <br />
          <br />
          6.INTRODUCTION TO EDITING <br />
          <br />
          SOFTWARES -PREMIERE PRO, FCP, AVID, RESOLVE 7.ORGANIZING PROJECTS,
          MEDIA MANAGEMENT
          <br />
          <br />
          8. BASICS OF TRANSITION & FILTERS
          <br />
          <br />
          9. BASICS OFKEY-FRAMING, TITLING & GRAPHICS
          <br />
          <br />
          10. WORKING WITH AUDIO
          <br />
          <br />
          11. BASICS OF COLOR CORRECTION
          <br />
          <br />
          12. EXPORTING PROJECT FOR THE FILM, TV, WEB &DVD
          <br />
          <br />
          13. COMPLETE DIGITAL WORKFLOW
          <br />
          <br />
          (POST-PRODUCTION) 14. GENRE EDITING SKILLS - ACTION, DIALOG, COMEDY&
          MUSIC
          <br />
          <br />
          15. EDITING FOR DOCUMENTARIES, AD-FILMS,CORPORATE VIDEOS ETC.
          <br />
          <br />
          16. ADAVNCED EDITING SKILLS.
          <br />
          <br />
          SHORT FILM – FINAL FILM
          <br />
          <br />
          Short Film will be a joint effort of all the students inguidance of a
          mentor.
          <br />
          <br />* EVALUATION (After Completing ‘SHORT FILM’)
        </p>
      </div>
    </div>
  );
}

export default Editing;
