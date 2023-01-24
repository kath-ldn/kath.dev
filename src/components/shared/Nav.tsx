// Libs
import { Link } from "react-router-dom";

// Types
type NavType = {
    containerClass: string;
    itemsClass: string;
}

export const Nav = ({containerClass, itemsClass}: NavType) => {
    const linkStyles = {
        textDecoration: "none",
        color: "inherit"
    }
    
    return (
      <nav className={containerClass}>
        <Link style={linkStyles} to={`/`}><p className={`link ${itemsClass}`}>home</p></Link>
        <Link style={linkStyles} to={`/about`}><p className={`link ${itemsClass}`}>about</p></Link>
        <Link  style={linkStyles} to={`/portfolio`}><p className={`link ${itemsClass}`}>portfolio</p></Link>
        <Link  style={linkStyles} to={`/contact`}><p className={`link ${itemsClass}`}>contact</p></Link>
      </nav>
    );
}