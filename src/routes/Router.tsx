// Libs
import { createBrowserRouter } from "react-router-dom";
// Routes
import Layout from "./Layout";
import Root from "./Root";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Maintenance from "./Maintenance";
import ErrorPage from './Error';
// Config
import config from "../config/config";

export const router = createBrowserRouter([
    {
      path: "/",
      element:  config.settings.siteLive ? <Layout/> : <Maintenance/>,
      errorElement: <ErrorPage />,
      children: [
        {
            path: "/",
            element: <Root/>,
        },
        {
          path: "about",
          element: <About/>,
        },
        {
            path: "portfolio",
            element: <Portfolio/>,
        },
        {
            path: "contact",
            element: <Contact/>,
          },
      ],
    },
  ]);