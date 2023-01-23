// Libs
import { useState } from "react";

// Styles
import "./HamburgerMenu.css"

export const HamburgerMenu = () => {
    const [hamburgerMenuOpen, sethamburgerMenuOpen] = useState(false)
    return (
        <div className="hamburger-menu-container" onClick={()=>{sethamburgerMenuOpen(!hamburgerMenuOpen)}}>
            <div className={`hamburger-menu-item ${hamburgerMenuOpen && "hamburger-menu-item-top-open"}`}></div>
            <div className={`hamburger-menu-item ${hamburgerMenuOpen && "hamburger-menu-item-mid-open"}`}></div>
            <div className={`hamburger-menu-item ${hamburgerMenuOpen && "hamburger-menu-item-btm-open"}`}></div>
        </div>
    );
}