// Libs
import { RouterProvider } from "react-router-dom";
// Routes
import {router} from "./routes/Router"
// Styles
import './reset.css';
import './App.css';

function App() {
  return (
    <>
        <RouterProvider router={router} />
    </>
  );
}

export default App;