import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Image from "next/image";
import Link from "next/link";

function Acting() {
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
          Acting
          <br />
          <br />
        </h2>
        <p>
          An Actor`&apos;`s job is to convey a feeling from the screen to the
          audience in a way that the audience feel a sense of connection with
          the character, be it positive or negative. To perfect their craft an
          actor requires the knowledge of human psychology, physiology and
          emotions.
        </p>
        <br />
        <br />

        <h4>Career in Acting</h4>
        <p>
          Most of the people who come to the city of Mumbai initially start with
          acting. Acting is a highly competative field and hence, the stakes are
          high, but, one should not get disheartned by this as with the
          exponential growth of the film industry there are new opportunities
          bubbling up everywhere. There auditions going everywhere in the city,
          so, the real job for an actor is to be best version of themselves and
          there success will be inevitable. To perfect their art, an actor need
          to put a lot of sweat and hours, thats where the difference can be
          observed between the people who &apos;WANT&apos; it and the ones who
          &quot;GET&quot; it. Acting can be a challenging and competitive field,
          as there are often many talented actors vying for the same roles.
          However, for those who are dedicated and hardworking, acting can also
          be a fulfilling and rewarding career. Actors have the opportunity to
          bring joy and entertainment to audiences, and to explore and express
          the full range of human emotions through their art. Acting is a form
          of storytelling that allows actors to bring characters and their
          stories to life. It requires a high level of emotional intelligence
          and the ability to empathize with a wide range of characters and
          personalities. Actors need to be able to interpret scripts and
          understand their characters&apos; motivations, goals, and obstacles,
          and then bring those characters to life through their performances. To
          become an actor, one typically needs to have a passion for
          storytelling and a willingness to take risks and try new things.
          Acting also requires a certain level of physical and emotional
          vulnerability, as actors must be open and honest in their performances
          in order to connect with their characters and audiences. Training and
          education are important for actors, as they need to learn various
          techniques and skills in order to excel in their craft. Students of
          Placing Dreams get the best possible training from the best people in
          the field. Nearly every student from the institute get to start with a
          project from recognsed media houses. At Placing Dreams Students are
          taught to treat work like worship, The values of disicipline and
          willingness to make scarifice is ingrained in every student from the
          beginning. The opportunities are plenty, all one need is dedication
          and hard work. The syllabus followed at the institute is handcrafted
          by the experts in the industry and tries to shed light on all the dark
          corners which might be left in the courses by other institutions.
        </p>
        <h2
          className="main"
          style={{
            background: "linear-gradient(90deg, #EE82EE 0%, #00D1FF 100%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Acting Syllabus
          <br />
          <br />
        </h2>
        <Image
          src="/features/acting.jpeg"
          alt="image"
          width="700"
          height="350"
        />
        <h4> Module 1</h4>
        <p>
          introduction
          <br />
          <br />
          Awareness <br />
          <br />
          Imagination
          <br />
          <br />
          Sense Memory
          <br />
          <br />
          Natya Shastra
          <br />
          <br />
          Improvisation Basics
          <br />
          <br />
          Relationship Building
          <br />
          <br />
          Imagination Advance
          <br />
          <br />
          Improvisation Advance
          <br />
          <br />
        </p>
        <h4> Module 2</h4>
        <p>
          Movie Analysis
          <br />
          <br />
          Character Analysis
          <br />
          <br />
          Play Back
          <br />
          <br />
          Diction
          <br />
          <br />
        </p>
        <h4> Module 3</h4>
        <p>
          Movement
          <br />
          <br />
          Monolouge
          <br />
          <br />
          Text Analysis
          <br />
          <br />
          Scene Work
          <br />
          <br />
        </p>
        <h4> Module 4</h4>
        <p>
          Camera Awarness
          <br />
          <br />
          Basics of Audition
          <br />
          <br />
          Audition Analysis
          <br />
          <br />
          Preparation Of Audition
          <br />
          <br />
          Audition Performance
          <br />
          <br />
          How to make Self test
          <br />
          <br />
          Personality Development Sessions
          <br />
          <br />
          Conclusion
          <br />
          <br />
          <br />
          <br />
          Will Do Play /Monolouge/ Scene Work/ Short Film/Series
          <br />
          <br />
        </p>
      </div>
    </div>
  );
}

export default Acting;
