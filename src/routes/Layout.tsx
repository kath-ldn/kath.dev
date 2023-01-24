// Libs
import { useContext, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
// Components
import { HamburgerMenu } from "../components/layout/HamburgerMenu";
import Mode from "../components/layout/Mode";
import { Icons } from "../components/layout/Icons"
import { RotatedTextAccent } from "../components/layout/RotatedTextAccent";
// Context
import { ModeContext } from "../contexts/ModeContext";

export default function Layout() {
    const { mode, setMode } = useContext(ModeContext)
    const { pathname } = useLocation();

    // Scroll to top when route changes - this happens here as this is the entry element for BrowserRouter
    useEffect(() => {
      document.documentElement.scrollTo({
        top: 0,
        left: 0,
      });
    }, [pathname]);

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