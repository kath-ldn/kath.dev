// Libs
import { useContext } from "react";
// Components
import { Stalk } from "./Stalk";
// Assets
import { ReactComponent as Email } from "../../assets/icons/email.svg";
import { ReactComponent as GitHub } from "../../assets/icons/github.svg";
import { ReactComponent as LinkedIn } from "../../assets/icons/linkedin.svg";
// Context
import { ModeContext } from "../../contexts/ModeContext";
// Styles
import "./Icons.css"

export const Icons = () => {
    const { mode } = useContext(ModeContext)

    const svgFill = `fill-${mode === "light" ? "dark" : "light"}`;
    return (
      <div className={`icons-container fit-content flex-column align-center`}>
            <a href={"mailto:katharineturner3@gmail.com"} className={`icon ${svgFill}`}><Email/></a>
            <a href={"https://github.com/kath-ldn"} className={`icon ${svgFill}`}><GitHub/></a>
            <a href={"https://www.linkedin.com/in/katharine-turner/"}  className={`icon ${svgFill}`}><LinkedIn/></a>
        <Stalk height={40} width={2} marginTop={2}/>
      </div>
    );
}