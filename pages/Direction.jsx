import Image from 'next/image'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Link from 'next/link';
import { useState } from 'react';

function Direction() {


       return (<div className='body2'>
              <div style={{ display: 'flex' }}>
                     <Link href="\Course"><ArrowBackIcon style={{ marginTop: '2vh', marginLeft: '2vh', color: 'white' }} /></Link>
                     <div className="course_nav">
                            <Link href="\Acting"><div className="courses_btn">Acting</div></Link>
                            <Link href="\Writing"><div className="courses_btn">Script Writing</div></Link>
                            <Link href="\Editing"><div className="courses_btn">Video Editing</div></Link>
                            <Link href="\Direction"><div className="courses_btn">Direction</div></Link>
                            <Link href="\FilmMaking"><div className="courses_btn">Film Making</div></Link>
                     </div>
              </div>
              <div className='overall'>
                     <h1 className='main' style={{ background: 'linear-gradient(90deg, #EE82EE 0%, #00D1FF 100%)', backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Direction<br /><br /></h1>
                     <p>A Director is a story-teller. He takes the Script and transform it into a visual experience. He has to have an in-depth understanding of Screenwriting, Acting, Cinematography, Editing, Sound, Production in process of a film making.</p><br /><br />
                     <h4> Career in Direction </h4>
                     <p>It is evident that the audio-visual medium is the fastest growing medium of communication in the world. Films are made not only in fiction format but also as Documentaries, Training films, Corporate films, Advertisements and Video art. The world of film-making is like a mushroom cloud that is getting bigger and bigger.
                            Every film must have a director, it stands to reason therefore that higher the number of films, higher will be the demand for Directors. A film Director is an artist-technician who is also an expert manager, logistics person, coordinator and chief executive officer-all rolled into one. It is a difficult job that requires tremendous creative energy, enthusiasm along with loads of patience and humility. A Career in Film Direction is one of extreme creative satisfaction, apart from side benefits of fame and money. But it suits to only those who are ready to go through the grind and put in hard labour as well, such passionate can succeed in this field.
                            Film direction is a challenging field for a number of reasons. One of the biggest challenges is the sheer amount of work and coordination involved in making a film. Directors are responsible for overseeing all aspects of a film&apos;s production, from the initial concept and screenplay, through to casting, rehearsals, shooting, and post-production. This requires a high level of organizational skills and the ability to manage a team of creative and technical professionals.
                            Another challenge of film direction is the need to constantly adapt to changing circumstances. Filmmaking is an unpredictable art form, and directors must be able to think on their feet and make quick decisions in order to keep the production on track. This can be especially difficult when dealing with complex scenes, unexpected weather, or other unforeseen challenges.
                            Film direction is constantly evolving and changing with the times. As new technologies and techniques are developed, directors are able to push the boundaries of what is possible on screen and create new and innovative forms of storytelling.
                            One of the biggest changes in film direction over the years has been the increasing use of digital technology. Digital cameras, editing software, and special effects have made it easier and more affordable for directors to create high-quality films, and have opened up new possibilities for creative expression.
                            Most students of placing dreams join the industry initially as assistant directors and work their way up towards the post of Directors. But there is no hard and fast rule about this and if the students has the capability they might well straightaway become a Director as soon as they pass out from placing dreams Film and Television institute .  The syllabus followed at the institute is handcrafted by the experts in the industry and tries to shed light on all the dark corners which might be left in the courses by other institutions.</p>
                     <br /><h1 className='main' style={{ background: 'linear-gradient(90deg, #EE82EE 0%, #00D1FF 100%)', backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Syllabus<br /><br /></h1>

                     <Image src="/features/direction.jpeg" alt="image" width="700" height="350" />
                     <h4>Chapter 1</h4>
                     <p>•Know your Ambition<br />
                            •What is your Goal?<br /><br />
                            •Managing a unit? (Know your unit)<br /><br />
                            •Production Process.<br /><br />
                            •Technical knowledge. (technicians)<br /><br />
                            D.O.P, Production Designer, Art Director, Sound
                            Recordist,Sound Designer, Light Designer, Editor,
                            Graphics, D.I. etc.</p>
                     <h4>Chapter 2</h4>
                     <p>•Pattern of storytelling.<br /><br />
                            •Kind of story.<br /><br />
                            •Types of scenes.<br /><br />
                            •Character sketching.<br /><br />
                            •Montages.<br /><br />
                            •Songs and Poetry.<br /><br />
                            •Music designing.<br /><br />
                            •Background music, Sync sound,
                            Dubbing.<br /><br /></p>
                     <h4>Chapter 3</h4>
                     <p>•Concept and Project designing.<br /><br />
                            •Story and Script selection.<br /><br />
                            •Story writing.<br /><br />
                            •Cast and Crew planning.<br /><br />
                            •Location rekkie.<br /><br />
                            •Artist selection. (Perfect Casting)<br /><br />
                            •Costume and Colour designing.<br /><br />
                            •Makeup and Hair designing.<br /><br />
                            •Light designing<br /><br /></p>
                     <h4>Chapter 4</h4>
                     <p>•Scene Designing and Crafting.<br /><br />
                            •Shot division.<br /><br />
                            i)Combine shot<br /><br />
                            ii)Two shot<br /><br />
                            iii) C/S, C/U, M/S, W/D/S, O/S/S, EX-W/D/S,<br /><br />

                            iv)EX-C/S, Low angle, Top angle, Panning, Tilt<br /><br />
                            up and tilt down,Hand held, Moving shot,<br /><br />
                            Steady cam.<br /><br /></p>
                     <h4>Chapter 5</h4>
                     <p>Pitching your project.<br /><br />
                            •Scheduling andBudgeting<br /><br />
                            • Student Assignment<br /><br /></p>
              </div>
       </div>
       );
}

export default Direction;
