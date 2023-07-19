import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Single from "./pages/Single";
import Write from "./pages/Write";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";
import TestimonialSlider from "./pages/TestimonialSlider"
import './style.scss'
const path= require('path')

const Layout = () => {
  return(
    <>
      <Navbar/>
        <Outlet/>
      <Footer/>
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: (<Layout/>),
    children:[
      {
          path: "/",
          element: (<Home/>)
      }, 
      {
        path: "/testimony",
        element: (<TestimonialSlider/>),
      },
      {
        path: "/careers",
        element: (<Careers/>),
      },
      {
        path: "/services", 
        element: (<Services/>),
      },
      {
        path: "/about",
        element: (<About/>),
      },
      {
        path: "/post/:id",
        element: (<Single/>)
    },
      {
      path: "/write",
      element: (<Write/>)
      },
    ]
  },
  {
    path: "/register",
    element: (<Register/>),
  },
  {
    path: "/login",
    element: (<Login/>),
  },
  {
    path: "/contact",
    element: (<Contact/>),
  },
]);



function App() {
  return (
    <div className="App">
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
