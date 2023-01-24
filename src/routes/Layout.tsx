// Libs
import { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
// Components
import { Nav } from "../components/shared/Nav";
import { HamburgerMenu } from "../components/layout/HamburgerMenu";
import Mode from "../components/layout/Mode";
import { Icons } from "../components/layout/Icons"
import { RotatedTextAccent } from "../components/layout/RotatedTextAccent";
// Context
import { ModeContext, ModeType } from '../contexts/ModeContext';
// Styles
import "./Layout.css"

export default function Layout() {
    // Get user mode preference & set state
    const userMode = window.matchMedia('(prefers-color-scheme: dark)')
    const [mode, setMode] = useState<ModeType>(userMode.matches ? "dark" : "light")
    
    // Update body background to match mode (all other light/dark mode styles handled by mode-light/dark classes)
    document.body.classList.add(mode === "dark" ? "background-dark" : "background-light")
    document.body.classList.remove(mode !== "dark" ? "background-dark" : "background-light")
    
    // Add event listener to update light and dark mode when browser/system preferences change
    useEffect(() => {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
            setMode(userMode.matches ? "dark" : "light")
        });
    });
    
    // Scroll to top when route changes - this happens here as this is the entry element for BrowserRouter
    const { pathname } = useLocation();
    useEffect(() => {
      document.documentElement.scrollTo({
        top: 0,
        left: 0,
      });
    }, [pathname]);

    return (
    <ModeContext.Provider value={{mode, setMode}}>
      <div className={`${mode === "light" ? "mode-light" : "mode-dark"} flex-column align-center`}>
        {/* Nav (non-mob only) */}
        <Nav containerClass="layout-nav-container" itemsClass="layout-nav-items font-size-5"/>
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
    </ModeContext.Provider>
    );
  }