// Libs
import { useContext } from "react";
// Components
import { Stalk } from "./Stalk";
// Context
import { ModeContext } from "../../contexts/ModeContext";
// Styles
import "./RotatedTextAccent.css"

export const RotatedTextAccent = () => {
    const { mode, setMode } = useContext(ModeContext)
    return (
      <div className={`rotated-text-accent fit-content align-center justify-center`}>
        <p className={`rotated-text font-size-tiny rotate90`}>kath.dev</p>
        <Stalk height={200} width={2}/>
      </div>
    );
}