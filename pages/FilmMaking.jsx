import Image from 'next/image'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Link from 'next/link';

function FilmMaking() {
  return (
    <div className='overall'>
      <div style={{display: 'flex'}}>
    <Link href="\Course"><ArrowBackIcon style={{marginTop: '2vh', marginLeft: '2vh', color: 'white'}} /></Link>
    <div className="course_nav">
      <Link href="\Acting"><div className="courses_btn">Acting</div></Link>
      <Link href="\Writing"><div className="courses_btn">Writing</div></Link>
      <Link href="\Editing"><div className="courses_btn">Video Editing</div></Link>
      <Link href="\Direction"><div className="courses_btn">Direction</div></Link>
      <Link href="\FilmMaking"><div className="courses_btn">Film Making</div></Link>
    </div>
    </div>
       <h1 className='main' style={{background: 'linear-gradient(90deg, #EE82EE 0%, #00D1FF 100%)', backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>Film Making<br/><br/></h1>
      <br/>
      <h4> A Peek into the Film Making Course</h4><br/>
      <p>Film Making is a perfect soup which has the flavor of all other courses in the right amount. Students are taught about acting and all the technicalities related to the art, Then the course also focuses on the way of direction and the study of the job in detail
        The course will also take a dive in the fields of writing and editing, hence, covering all the ingredients required to create the next masterpiece for the world to see. By taking this course a student can expect to be well versed in the ins and outs of the industry and along with the knowledge
        they will also be gaining practical knowledge through different on-site internships focusing on the actual workflow and the way tasks are handeled on the ground level. 
        Filmmaking is a collaborative art form that brings together a team of creative and technical professionals to create a finished film. This team typically includes a writer, who creates the initial concept and screenplay; a director, who brings the screenplay to life by guiding the actors and crew; a cinematographer, who creates the visual look of the film; and an editor, who assembles the footage into a cohesive story.
        Filmmaking also involves many other disciplines, such as set design, costume design, makeup, sound design, and special effects. These professionals work together to bring the filmmaker&apos;s vision to life and create a finished film that is engaging and compelling.
        To become a filmmaker, one typically needs to have a passion for storytelling and the ability to bring ideas to life on screen. Filmmaking also requires a certain level of technical expertise, as filmmakers need to understand how to use cameras, lighting, and other equipment to create their desired visual effects.
        Training and education are important for filmmakers, as they need to learn about the various disciplines involved in making films, as well as the technical skills required to use the equipment and software.
      </p><br/>
       <Image src="/features/direction.jpeg" alt="image" width="700" height="350" />
                                   
    </div>
  );
}

export default FilmMaking;

