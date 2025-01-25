

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import Layout from "./Component/Layout/Layout";
import Home from "./Component/Home/Home";
import About from "./Component/About/About";
import Portfolio from "./Component/Portfolio/Portfolio";
import Contact from "./Component/Contact/Contact";
import NotFound from "./Component/NotFound/NotFound";


function App() {
  // تعريف المسارات
  let router = createBrowserRouter([
    {
      path: "/", // المسار الجذر
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "home", element: <Home /> },
        { path: "about", element: <About /> },
        { path: "portfolio", element: <Portfolio /> },
        { path: "contact", element: <Contact /> },
        { path: "*", element: <NotFound /> }, // مسار للأخطاء
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
