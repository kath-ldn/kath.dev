// Components
import RootHeader from "../components/root/RootHeader";
// Assets
import ProfilePic from "../assets/images/profile-pic-bw.png"
// Styles
import "./Root.css"


export default function Root() {
    return (
        <div className="route-container route-root flex-column justify-space-between">
            <RootHeader/>
            <div className="root-bottom flex-row">
                <div className="profile-pic-wrapper">
                    <img className="profile-pic" alt="kaths-profile-pic" src={ProfilePic}/>
                </div>
            </div>
        </div>
    );
  }