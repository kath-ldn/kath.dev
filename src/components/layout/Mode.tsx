// Libs
import { useContext } from "react";
// Context
import { ModeContext } from "../../contexts/ModeContext";
// Styles
import "./Mode.css"

export default function Mode() {
    const { mode, setMode } = useContext(ModeContext)
    return (
      <aside id="mode" className="flex-row space-evenly">
        <p className="link" onClick={()=>{setMode("dark")}}>dark</p>
        <p>-</p>
        <p className="link" onClick={()=>{setMode("light")}}>light</p>
      </aside>
    );
  }