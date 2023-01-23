// Libs
import { useContext } from "react";
// Context
import { ModeContext } from "../../contexts/ModeContext";
// Styles
import "./Mode.css"

export default function Mode() {
    const { mode, setMode } = useContext(ModeContext)
    return (
      <aside id="mode" className="flex-row justify-space-evenly align-center font-size-5">
        <p className={mode === "dark" ? "selected-neutral" : "link"} onClick={()=>{setMode("dark")}}>dark</p>
        <p>-</p>
        <p className={mode === "light" ? "selected-neutral" : "link"} onClick={()=>{setMode("light")}}>light</p>
      </aside>
    );
  }
