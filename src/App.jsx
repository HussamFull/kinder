import React from 'react'
import router from './routes.jsx'
import { RouterProvider } from "react-router/dom";

import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.css';
import { useEffect } from 'react';




export default function App() {

  
// داخل المكون (Component)
useEffect(() => {
  const lightbox = GLightbox({
    selector: '.portfolio-lightbox'
  });
}, []);


  return (
    <RouterProvider router={router} />

    
  )
}
