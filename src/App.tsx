// Libs
import {useState} from 'react';
import { RouterProvider } from "react-router-dom";
// Routes
import {router} from "./routes/Router"
// Context
import { ModeContext, ModeType } from './contexts/ModeContext';
// Styles
import './reset.css';
import './App.css';

function App() {
    const [mode, setMode] = useState<ModeType>("light")
  return (
    <>
    <ModeContext.Provider value={{mode, setMode}}>
        <RouterProvider router={router} />
    </ModeContext.Provider>
    </>
  );
}

export default App;