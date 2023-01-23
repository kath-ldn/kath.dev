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
    const { mode, setMode } = useContext(ModeContext)

    const svgFill = `fill-${mode === "light" ? "dark" : "light"}`;
    return (
      <div className={`icons-container fit-content flex-column align-center`}>
            <a href={"mailto:katharineturner3@gmail.com"} className={`${svgFill} fit-content`}><Email/></a>
            <a href={"https://github.com/kath-ldn"} className={`${svgFill} fit-content`}><GitHub/></a>
            <a href={"https://www.linkedin.com/in/katharine-turner/"}  className={`${svgFill} fit-content`}><LinkedIn/></a>
        <Stalk height={40} width={2}/>
      </div>
    );
}