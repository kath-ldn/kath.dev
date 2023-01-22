// Libs
import { createContext, Dispatch, SetStateAction } from "react";

export type ModeType = "light" | "dark";

export type ModeContextType = {
    mode: ModeType;
    setMode: Dispatch<SetStateAction<ModeType>>;
}

export const ModeContext = createContext<ModeContextType>({mode: "light", setMode: () => {}})