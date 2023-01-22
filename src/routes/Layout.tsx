// Libs
import { useContext } from "react";
import { Outlet } from "react-router-dom";
// Components
import Mode from "../components/layout/Mode";
// Context
import { ModeContext, ModeContextType } from "../contexts/ModeContext";

export default function Layout() {
    const { mode, setMode } = useContext(ModeContext)
    return (
      <div className={
        mode === "light" ? "light-body" : "dark-body"
        }>
      layout
        <Mode/>
        <Outlet/>
      </div>
    );
  }