// // import { StrictMode } from 'react'
// import { BrowserRouter } from "react-router-dom";
// import Navbar from '../src/Components/Navbar.jsx'

// createRoot(document.getElementById('root')).render(

//  <BrowserRouter>
//  <Navbar />
//   <App />
// </BrowserRouter>
// )

import { BrowserRouter } from "react-router-dom";
import { createRoot } from 'react-dom/client'
import { ToastContainer } from "react-toastify";
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
    <ToastContainer
      position="top-right"
      autoClose={3000}
      theme="colored"
    />
  </BrowserRouter>
);