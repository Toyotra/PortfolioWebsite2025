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
    background: `linear-gradient(${angle}deg,rgba(22, 3, 3, 0.97),rgba(2, 7, 24, 0.95))`,
    transition: 'background 0.1s ease',
    position: 'absolute',
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
    </>
  )
}

export default App