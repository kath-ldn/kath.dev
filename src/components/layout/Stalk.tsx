// Libs
import { useContext } from "react";
// Context
import { ModeContext } from "../../contexts/ModeContext";


type StalkType = {
    height: number;
    width: number;
    marginTop?: number;
}

export const Stalk = ({height, width, marginTop}: StalkType) => {
    const { mode } = useContext(ModeContext)
    return(
        <div className={`${mode === "light" ? "background-dark" : "background-light"}`} style={{height: `${height}px`, width: `${width}px`, marginTop: `${marginTop ? marginTop : 20}px`}}>
        </div>
    )
}