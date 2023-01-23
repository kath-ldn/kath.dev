// Libs
import { useContext } from "react";
// Context
import { ModeContext } from "../../contexts/ModeContext";


type StalkType = {
    height: number;
    width: number;
}

export const Stalk = ({height, width}: StalkType) => {
    const { mode, setMode } = useContext(ModeContext)
    return(
        <div className={`${mode === "light" ? "background-dark" : "background-light"}`} style={{height: `${height}px`, width: `${width}px`, marginTop: `20px`}}>
        </div>
    )
}