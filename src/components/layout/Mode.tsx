// Libs
import { useContext } from "react";
// Context
import { ModeContext } from "../../contexts/ModeContext";
// Styles
import "./Mode.css"

export default function Mode() {
    const { mode, setMode } = useContext(ModeContext)
    return (
      <aside id="mode" className="flex-row space-evenly align-center">
        <p className={mode === "dark" ? "selected" : "link"} onClick={()=>{setMode("dark")}}>dark</p>
        <p>-</p>
        <p className={mode === "light" ? "selected" : "link"} onClick={()=>{setMode("light")}}>light</p>
      </aside>
    );
  }