import { useState, useEffect } from 'react'
import './App.css'
import  Matrix from "./components/Matrix";
function App() {

  const [angle, setAngle] = useState(0);
  

  const handleMouseMove = (e) => {
    const x = e.clientX;
    const width = window.innerWidth;
    const newAngle = (x / width) * 360;
    setAngle(newAngle);
  };

  // Typewriter effect for attributes
  const attributes = [
    "Hardware Person",
    "Building Surgical Robots",
    "Simulation Software Entheusiast",
    "Guitarist",
    "High School Student",
  ];
  const [displayedText, setDisplayedText] = useState('');
  const [attrIndex, setAttrIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    let timeout;
    if (!deleting && charIndex < attributes[attrIndex].length) {
      // Typing forward
      timeout = setTimeout(() => {
        setDisplayedText(attributes[attrIndex].slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 100);
    } else if (!deleting && charIndex === attributes[attrIndex].length) {
      // Pause before deleting
      timeout = setTimeout(() => {
        setDeleting(true);
      }, 1200);
    } else if (deleting && charIndex > 0) {
      // Deleting backward
      timeout = setTimeout(() => {
        setDisplayedText(attributes[attrIndex].slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, 50);
    } else if (deleting && charIndex === 0) {
      // Move to next attribute
      timeout = setTimeout(() => {
        setDeleting(false);
        setAttrIndex((attrIndex + 1) % attributes.length);
      }, 300);
    }
    return () => clearTimeout(timeout);
  }, [charIndex, attrIndex, deleting, attributes]);

  useEffect(() => {
    // Reset charIndex when attribute changes
    if (!deleting) setCharIndex(0);
  }, [attrIndex, deleting]);

  const backgroundStyle = {
    height: '100vh',
    width: '100vw',
    margin: 0,
    background: `linear-gradient(${angle}deg,rgba(22, 3, 3, 0.8),rgba(2, 7, 24, 0.8 ))`,
    transition: 'background 0.1s ease',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: -1,
  };

 




  return (
    <>
      
      <div style={backgroundStyle} onMouseMove={handleMouseMove}></div>
      <div className="backgroundContainer">
        <img id="background1" className="backgroundImages" src="/toyota1.jpg"></img>
        <img id="background2" className="backgroundImages"  src="/toyota2.jpg"></img>
        <img id="background3" className="backgroundImages"  src="/toyota3.jpg"></img>
        <img id="background4" className="backgroundImages"  src="/toyota4.jpg"></img>
      </div>


      <Matrix key="foo-bar" className="matrixBackground"/>
      
      
      <div id="title">
        <h1>
          Jad Menkara: <span className="typewriter">{displayedText}<span className="cursor">|</span></span>
        </h1>
        <div id="titleButtons">
          <a><button>About Me</button></a>
          <a><button>Experience</button></a>
          <a><button>Projects</button></a>
          <a><button>Contact</button></a>
        </div>



        
        
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div id="startSection">
          <div id="left">
            <div id="imgflex">
              <img src="/pfp.png" id="img1"></img>
              <img src="/toyota2.jpg" id="img2"></img>
              <img src="/toyota2.jpg" id="img3"></img>
            </div>
            <h1>I'm coming for you, and I'm coming for all <img src="https://em-content.zobj.net/source/twitter/31/smiling-face-with-horns_1f608.png" width="50px"></img></h1>
            <div id="paragraph">
              <p> Hey there! My name is Jad Menkara and I am an aspiring Biomedical engineer from Windsor, On, Canada. I attend Vincent Massey Secondary and am a Grade 12 student.</p>
              <br></br>
              <p>I have various hobbies including <a href="https://www.youtube.com/@Subaru-uwu-03">guitar playing</a>, <a href="">Coding/Game Development</a>, and <a href="">Robotics</a>. I also enjoy doing all things related to hackathons! Whether it be organizing, volunteering, and participating, I have been an avid hacker for over a year.</p>
              <br></br>
              <p>I'm also a big fan of science fairs! I've been participating in science fairs since 8th grade, and was selected for team Windsor at the Canada Wide Science Fair twice! At science fairs, I've presented various projects, ranging from electric peltier generators, to bionic arms. Now, I am currently pursuing research with the neuroArm lab at The Univeristy of Calgary, where I am actively designing and prototyping a novel surgical robot with various improvements over conventional, bulky surgical robotics systems. I love robotics and want to pursue a career in systems and more specifically biomedical engineering in the future</p>
            </div>
            
          </div>
          <div id="right">
            <div>
              <img src = "/gallery/1.png"></img>
              <img src = "/gallery/5.jpeg"></img>
              <img src = "/gallery/6.jpeg"></img>
            </div>
            <div>
              <img src = "/gallery/2.png"></img>
              <img src = "/gallery/7.jpeg"></img>
              <img src = "/gallery/8.png"></img>
            </div>
            <div>
              <img src = "/gallery/3.png"></img>
              <img src = "/gallery/9.jpeg"></img>
              <img src = "/gallery/10.png"></img>
            </div>
            <div>
              <img src = "/gallery/4.jpeg"></img>
              <img src = "/gallery/11.jpg"></img>
              <img src = "/gallery/12.jpeg"></img>
            </div>
            

          </div>
          
        </div>


        <div id = "bodySection">


          <div className ="experienceOuter">
            <div className ="experienceInner">
              <div className="experienceTitle">
                <h1>Student Researcher @ neuroArm University of Calgary </h1>
                <h3>July '24 - Present</h3>
              </div>
              
              <p>I am currently designing a modernized novel surgical robot with the University of Calgary. I have designed electronics, systems architecture, CAD designs, as well as programming various kinematics and PID algorithms for our robot. Details are NDA classified, but we are hoping for a publication which is soon to be submitted.</p>
            </div>
            
          </div>

          <div className ="experienceOuter">
            <div className ="experienceInner">
              <div className="experienceTitle">
                <h1>Research Assistant @ IMPACT Lab University of Windsor </h1>
                <h3>June '25 - Present</h3>
              </div>
              <p>I am currently designing a novel gripper device for a multitood of fruits using tendon and soft robotics technologies. I am primarily doing CAD design, silicone molding, as well as electronics. As we progress the project we hope to include computer vision to further improve agricultural automation.</p>
              
            </div>
          </div>
          <div className ="experienceOuter">
            <div className ="experienceInner">
              <div className="experienceTitle">
                <h1>BotBuilders Co-founder/Director</h1>
                <h3>Nov '24 - Present</h3>
              </div>
              <p>I founded Windsor's premier robotics non-profit program for middle school students. At BotBuilders, we taught over 20 kids in our first year robotics for free. Each student was given their own custom made robotics kit for free with sponsorship grants. I organized logistics, sponsorship, web development/technologies, lessons, as well as mentoring each student so they could successfully build their first bot! I was inspired to make this program because as young student I could never afford expensive robotics programs. I wanted to make an alternative that any kid could participate in as long as they were curious.</p>
            </div>
          </div>

          <div className ="experienceOuter">
            <div className ="experienceInner">
              <div className="experienceTitle">
                <h1>Hack Canada Outreach Lead</h1>
                <h3>July '24 - Present</h3>
              </div>
              
              <p>insert something to add here</p>
            </div>
          </div>

          <div className ="experienceOuter">
            <div className ="experienceInner">
              <div className="experienceTitle">
                <h1>Massey Hack Club President</h1>
                <h3>June '24 - Present</h3>
              </div>
              
              <p>insert something to add here</p>
            </div>
          </div>

          
         
          
          
          
        </div>

        <div id="projectSectionContainer">
          <div id="projectSection">


            <div className="project">
                <div className="projectTitle">
                  <h1><a  href = "https://devpost.com/software/gci-gauntlet-a-future-where-dementia-is-forgotten">GCI Gauntlet</a></h1>
                  <h3>May 2025</h3>
                </div>
                
                <p>Gauntlet for peopple with Alzheimers so they can navigate more easily.</p>
                <div className = "imgContainer">
                  <img src="https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/003/425/035/datas/original.jpg"></img>
                </div>
            </div>



            <div className="project">
                <div className="projectTitle">
                  <h1><a  href = "https://devpost.com/software/focuslock-d7iajx">Study Lock</a></h1>
                  <h3>May 2025</h3>
                </div>
                
                <p>We created a hardware -  software project to increase productivity by alerting users when they shut their eyes. I worked on the hardware section which included a robot plushie making noises and vibrating when the vision found shut eyes.</p>
                <div className = "imgContainer">
                  <img src="https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/003/274/651/datas/original.png"></img>
                </div>
            </div>



            <div className="project">
                <div className="projectTitle">
                  <h1><a  href = "https://github.com/Toyotra/Paint-Project">Death Note Paint Project</a></h1>
                  <h3>November 2024</h3>
                </div>
                
                <p>I created a Death Note themed MS Paint Clone in pygame.</p>
                <div className = "imgContainer">
                  <img src="https://github.com/Toyotra/Paint-Project/blob/main/deathNotePaint.png?raw=true"></img>
                </div>
            </div>


            <div className="project">
                <div className="projectTitle">
                  <h1><a  href = "https://github.com/Toyotra/BloodStainedVisors">BloodStained Visors</a></h1>
                  <h3>November 2024</h3>
                </div>
                
                <p>I created a a Street Fighter Clone in Java that is controlled by real life fighting and computer vision</p>
                <div className = "imgContainer">
                  <img src="https://github.com/Toyotra/BloodStainedVisors/blob/main/MenkaraJad-final/Cover.png?raw=true"></img>
                </div>
            </div>

            <div className="project">
                <div className="projectTitle">
                  <h1><a  href = "https://www.linkedin.com/posts/dorothy-zheng07_this-weekend-jad-menkara-and-i-competed-in-activity-7177809048770150400-L_4d?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEpzeNUBPpfWjnNlIorSE5EAeiJjYYntvqM">Bionic Arm</a></h1>
                  <h3>November 2024</h3>
                </div>
                
                <p>I designed and manufactured a novel bionic arm controlled through sEMG's for science fair in 10th grade</p>
                <div className = "imgContainer">
                  <img src="/bionic_arm.jpg"></img>
                </div>
            </div>


            <div className="project">
                <div className="projectTitle">
                  <h1><a  href = "https://www.linkedin.com/posts/dorothy-zheng07_this-weekend-jad-menkara-and-i-competed-in-activity-7177809048770150400-L_4d?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEpzeNUBPpfWjnNlIorSE5EAeiJjYYntvqM">Bionic Arm</a></h1>
                  <h3>November 2024</h3>
                </div>
                
                <p>I designed and manufactured a novel bionic arm controlled through sEMG's for science fair in 10th grade</p>
                <div className = "imgContainer">
                  <img src="/bionic_arm.jpg"></img>
                </div>
            </div>
















































            </div>

        </div>
        
    </>
  )
}

export default App