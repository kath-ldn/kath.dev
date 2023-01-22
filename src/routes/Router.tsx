import { createBrowserRouter } from "react-router-dom";

// Routes
import Layout from "./Layout";
import Root from "./Root";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import ErrorPage from './Error';

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
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