// Libs
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
// Context
import { ModeContext } from "../../contexts/ModeContext";
// Styles
import "./HamburgerMenu.css"

type HamburgerMenuOptions = "open" | "closed";
type HamburgerMenuItems = {
    text: string;
    link: string;
}

export const HamburgerMenu = () => {
    const [ hamburgerMenuState, sethamburgerMenuState ] = useState<HamburgerMenuOptions>("closed")
    const { mode } = useContext(ModeContext)
    const menuItems = [
        {
            text: "home",
            link: "/"
        },
        {
            text: "about",
            link: "/about"
        },
        {
            text: "portfolio",
            link: "/portfolio"
        },
        {
            text: "contact",
            link: "/contact"
        },
    ]
    const toggleHamburgerState = () => {
        sethamburgerMenuState(hamburgerMenuState === "open" ? "closed" : "open")
    }
    const hamburgerMenuItem = (item: HamburgerMenuItems) => {
        return (
        <div key={item.text} className={`hamburger-menu-item hamburger-menu-${hamburgerMenuState}-item`} onClick={toggleHamburgerState}>
            <Link style={linkStyles} to={`${item.link}`}><p className={`hamburger-menu-${hamburgerMenuState}-item-text font-size-4`}>{item.text}</p></Link>
        </div>
        )
    }
    const linkStyles = {
        textDecoration: "none",
        color: "inherit"
    }

    return (
        <>
            <div className="hamburger-menu-container">
                {/* Icon */}
                <div className="hamburger-icon-container" onClick={toggleHamburgerState}>
                    <div className={`hamburger-icon-layer ${hamburgerMenuState === "open" && "hamburger-icon-layer-top-selected"}`}></div>
                    <div className={`hamburger-icon-layer ${hamburgerMenuState === "open"  && "hamburger-icon-layer-mid-selected"}`}></div>
                    <div className={`hamburger-icon-layer ${hamburgerMenuState === "open"  && "hamburger-icon-layer-btm-selected"}`}></div>
                </div>
                {/* Menu content */}
                <div className={`hamburger-menu-content ${mode === "light" ? "background-light" : "background-dark"}`}>
                    {/* Page links */}
                    {menuItems.map((item)=>{return hamburgerMenuItem(item)})}
                </div>
            </div>
        </>

    );
}