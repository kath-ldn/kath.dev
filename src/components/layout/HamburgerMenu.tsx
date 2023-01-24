// Libs
import { useState, useContext } from "react";
// Context
import { ModeContext } from "../../contexts/ModeContext";
// Styles
import "./HamburgerMenu.css"

type HamburgerMenuOptions = "open" | "closed"

export const HamburgerMenu = () => {
    const [hamburgerMenuState, sethamburgerMenuState] = useState<HamburgerMenuOptions>("closed")
    const { mode, setMode } = useContext(ModeContext)
    const menuItems = ["about", "portfolio", "contact"]
    const hamburgerMenuItem = (item: string) => {
        return <div className={`hamburger-menu-item hamburger-menu-${hamburgerMenuState}-item`}>
            <p className={`hamburger-menu-${hamburgerMenuState}-item-text font-size-3`}>{item}</p>
        </div>
    }

    return (
        <>
            <div className="hamburger-menu-container">
                {/* Icon */}
                <div className="hamburger-icon-container" onClick={()=>{sethamburgerMenuState(hamburgerMenuState === "open" ? "closed" : "open")}}>
                    <div className={`hamburger-icon-layer ${hamburgerMenuState === "open" && "hamburger-icon-layer-top-selected"}`}></div>
                    <div className={`hamburger-icon-layer ${hamburgerMenuState === "open"  && "hamburger-icon-layer-mid-selected"}`}></div>
                    <div className={`hamburger-icon-layer ${hamburgerMenuState === "open"  && "hamburger-icon-layer-btm-selected"}`}></div>
                </div>
                {/* Menu content */}
                <div className={`${mode === "light" ? "background-light" : "background-dark"}`}>
                <div className={`hamburger-menu-${hamburgerMenuState}-header`}></div>
                    {menuItems.map((item)=>{return hamburgerMenuItem(item)})}
                </div>
            </div>
        </>

    );
}