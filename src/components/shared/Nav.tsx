// Styles
import "./Nav.css"

// Types
type NavType = {
    containerClass: string;
    itemsClass: string;
}

export const Nav = ({containerClass, itemsClass}: NavType) => {
    return (
      <nav className={containerClass}>
        <li className={`link ${itemsClass}`}>about</li>
        <li className={`link ${itemsClass}`}>portfolio</li>
        <li className={`link ${itemsClass}`}>contact</li>
      </nav>
    );
}