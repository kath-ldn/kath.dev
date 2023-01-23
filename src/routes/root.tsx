// Components
import RootHeader from "../components/root/RootHeader";
import { Nav } from "../components/shared/Nav";
// Assets
import ProfilePic from "../assets/images/profile-pic-bw.png"
// Styles
import "./Root.css"


export default function Root() {
    return (
        <div className="route-container route-root flex-row flex-column justify-space-between">
            <RootHeader/>
            <div className="root-bottom flex-row">
                <div className="profile-pic-wrapper">
                    <img className="profile-pic" src={ProfilePic}/>
                </div>
                <Nav containerClass="root-nav-container" itemsClass="root-nav-items font-size-2"/>
            </div>
        </div>
    );
  }