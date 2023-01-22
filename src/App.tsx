// Libs
import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
// Styles
import './App.css';
import './Reset.css';
// Routes
import Root from "./routes/root";
import About from "./routes/about";
import Portfolio from "./routes/portfolio";
import Contact from "./routes/contact";
import ErrorPage from './routes/error';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      errorElement: <ErrorPage />,
      children: [
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

function App() {
  return (
    <>
        <RouterProvider router={router} />
    </>
  );
}

export default App;