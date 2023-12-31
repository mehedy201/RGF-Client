import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home/Home.jsx';
import LandingPage from './Pages/LandingPage/LandingPage';
import ShopTurf from './Pages/ShopTurf/ShopTurf';
import ShopPlants from './Pages/ShopPlants/ShopPlants';
import Modeling from './Pages/Modeling/Modeling';
import Services from './Pages/Services/Services';
import Calculator from './Pages/Calculator/Calculator';
import FAQs from './Pages/FAQs/FAQs';
import ContactUs from './Pages/ContactUs/ContactUs';
import 'bootstrap/dist/css/bootstrap.min.css';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    children: [
      {
        path: '/',
        element: <LandingPage/>
      },
      {
        path: '/shop-turf',
        element: <ShopTurf/>
      },
      {
        path: '/shop-plants',
        element: <ShopPlants/>
      },
      {
        path: '/services',
        element: <Services/>
      },
      {
        path: '/modeling',
        element: <Modeling/>
      },
      {
        path: '/about',
        element: <Modeling/>
      },
      {
        path: '/calculator',
        element: <Calculator/>
      },
      {
        path: '/faqs',
        element: <FAQs/>
      },
      {
        path: '/contact-us',
        element: <ContactUs/>
      },

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
