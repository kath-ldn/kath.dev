// Styles
import "./About.css"
// Assets
import { ReactComponent as JavaScript } from "../assets/icons/skills/javascript.svg";
import { ReactComponent as TypeScript } from "../assets/icons/skills/typescript.svg";
import { ReactComponent as React } from "../assets/icons/skills/react.svg";
import { ReactComponent as NodeJS } from "../assets/icons/skills/nodejs.svg";
import { ReactComponent as Jest } from "../assets/icons/skills/jest.svg";
import { ReactComponent as AWS } from "../assets/icons/skills/aws.svg";
import { ReactComponent as Firebase } from "../assets/icons/skills/firebase.svg";
import { ReactComponent as HTML } from "../assets/icons/skills/html5.svg";
import { ReactComponent as CSS } from "../assets/icons/skills/css3.svg";
import { ReactComponent as Bootstrap } from "../assets/icons/skills/bootstrap.svg";
import { ReactComponent as Figma } from "../assets/icons/skills/figma.svg";
import { ReactComponent as Sketch } from "../assets/icons/skills/sketch.svg";
import { ReactComponent as Python } from "../assets/icons/skills/python.svg";
import Scruggs from "../assets/images/scruggs.png"


export default function About() {
    const skills = [<JavaScript/>, <TypeScript/>, <React/>, <NodeJS/>, <Jest/>, <AWS/>, <Firebase/>, <HTML/>, <CSS/>, <Bootstrap/>, <Figma/>, <Sketch/>, <Python/>]
    return (
        <>
        <div className="route-main-content flex-column">
            <h1 className="font-size-2 route-main-header">about</h1>
            <p className="font-size-4 route-main-text">
                i'm a self-taught developer, who mainly works with React, and JavaScript/ TypeScript. i'm a continuous learner, and always looking to improve my skills and learn new ones
            </p> 
            <p className="font-size-4 route-main-text">
                i currently work for an ad tech company in London, UK. before i became a dev, I worked as a management consultant and government advisor
            </p>
            <div className="skills-icons-container justify-center w-100">
                {skills.map((skill, i) => {
                    return <div key={`skill${i}`} className="skills-icon">{skill}</div>
                })}
            </div>
            <p className="font-size-4 route-main-text">
            when I'm not coding, you can usually find me practicing yoga, out in nature, or hanging out with my cat
            </p>
            <div className="about-image-wrapper">
                <img className="about-image" alt="kaths-cat" src={Scruggs}/>
            </div>
        </div>
        </>  
    );
  }