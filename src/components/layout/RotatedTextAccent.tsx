// Components
import { Stalk } from "./Stalk";
// Styles
import "./RotatedTextAccent.css"

export const RotatedTextAccent = () => {
    return (
      <div className={`rotated-text-accent fit-content align-center justify-center`}>
        <p className={`rotated-text font-size-5 rotate90`}>kath.dev</p>
        <Stalk height={200} width={2}/>
      </div>
    );
}