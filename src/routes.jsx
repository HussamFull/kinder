import React from "react";
import { createBrowserRouter } from "react-router";
import MainLayout from "./layout/MainLayout.jsx";
import Home from "./pages/home/Home.jsx";
import About from "./components/about/About.jsx";
import Services from "./components/services/Services.jsx"; 
import Portfolio from "./components/portfolio/Portfolio.jsx";
import Team from "./components/team/Team.jsx";
import Contact from "./components/contact/Contact.jsx";
import Impressum from "./pages/policy/Impressum.jsx";
import Datenschutzerklaerung from "./pages/policy/Datenschutzerklaerung.jsx";
import Car from "./components/car/Car.jsx";

import Apartment from "./components/apartment/Apartment.jsx";
import Booking from "./components/booking/Booking.jsx";



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/Apartment",
        element: <Apartment />,
      },
      {
        path: "/Car",
        element: <Car />,
      },

       {
        path: "/portfolio",
        element: <Portfolio />,
      },

       {
        path: "/portfolio",
        element: <Portfolio />,
      },




      {
        path: "/team",
        element: <Team />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
        {
        path: "/datenschutzerklaerung",
        element: <Datenschutzerklaerung />,
      },
        {
        path: "/impressum",
        element: <Impressum />,
      },
        {
        path: "/Booking",
        element: <Booking />,
      }

      


      
      
      
      
    ],
  },
]);

export default router;