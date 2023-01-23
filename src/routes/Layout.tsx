// Libs
import { useContext } from "react";
import { Outlet } from "react-router-dom";
// Components
import { HamburgerMenu } from "../components/layout/HamburgerMenu";
import Mode from "../components/layout/Mode";
import { Icons } from "../components/layout/Icons"
import { RotatedTextAccent } from "../components/layout/RotatedTextAccent";
// Context
import { ModeContext } from "../contexts/ModeContext";

export default function Layout() {
    const { mode, setMode } = useContext(ModeContext)
    return (
      <div className={`${mode === "light" ? "mode-light" : "mode-dark"} flex-column align-center`}>
        {/* hamburger menu (mob only) */}
        <HamburgerMenu/>
        {/* light-dark mode header */}
        <Mode/>
        {/* icons set */}
        <Icons/>
        {/* kath.dev rotated accent */}
        <RotatedTextAccent/>
        {/* Outlet for other routes */}
        <div className="route-container">
            <Outlet/>
        </div>
      </div>
    );
  }