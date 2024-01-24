import React from 'react'
import { Suspense } from 'react';
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home/Home.jsx';
import LandingPage from './Pages/LandingPage/LandingPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoadingSpain from './Components/LoadingSpain/LoadingSpain';
import axios from 'axios'
import { Toaster } from 'react-hot-toast';
import PrivetRoute from './Routes/PrivetRoute';
import FreeQuatePage from './Pages/FreeQuatePage/FreeQuatePage';
const ShopTurf = React.lazy(() => import('./Pages/ShopTurf/ShopTurf'));
const ShopPlants = React.lazy(() => import('./Pages/ShopPlants/ShopPlants'));
const Modeling = React.lazy(() => import('./Pages/Modeling/Modeling'));
const About = React.lazy(() => import('./Pages/About/About'));
const Services = React.lazy(() => import('./Pages/Services/Services'));
const Calculator = React.lazy(() => import('./Pages/Calculator/Calculator'));
const FAQs = React.lazy(() => import('./Pages/FAQs/FAQs'));
const ContactUs = React.lazy(() => import('./Pages/ContactUs/ContactUs'));
const ProductCatalogPage = React.lazy(() => import('./SharedPages/ProductCatalogPage/ProductCatalogPage'));
const SingleProductPage = React.lazy(() => import('./SharedPages/SingleProductPage/SingleProductPage'));
const SubmitData = React.lazy(() => import('./Pages/SubmitData/SubmitData'));
const ThankYouPage = React.lazy(() => import('./Pages/ThankYouPage/ThankYouPage'));
const SubmitDataEmploye = React.lazy(() => import('./Pages/SubmitDataEmploye/SubmitDataEmploye'));
const SubmitPrivetRoute = React.lazy(() => import('./Routes/SubmitPrivetRoute'));
// Admin Page ________________________________________________________________________
const AdminLoginPage = React.lazy(() => import('./AdminPages/AdminLoginPage/AdminLoginPage'));
const AdminDashboard = React.lazy(() => import('./AdminPages/AdminDashboard/AdminDashboard'));
const AddProductPage = React.lazy(() => import('./AdminPages/AdminDashboard/AddProductPage/AddProductPage'));
const EditProduct = React.lazy(() => import('./AdminPages/AdminDashboard/EditProduct/EditProduct'));
const ManageProduct = React.lazy(() => import('./AdminPages/AdminDashboard/ManageProduct/ManageProduct'));
const AddModelingImage = React.lazy(() => import('./AdminPages/AdminDashboard/AddModelingImage/AddModelingImage'));
const ProductCatelog = React.lazy(() => import('./SharedPages/ProductCatelog/ProductCatelog'));


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
        element: <Suspense fallback={<LoadingSpain/>}><ShopTurf/></Suspense>
      },
      {
        path: '/shop-turf/turf/:productCategory',
        element:<Suspense fallback={<LoadingSpain/>}><ProductCatalogPage buttonText={'Shop Plants'} buttonLink={'/shop-plants'} heroText={'Premium Synthetic Turf'}/></Suspense>,
        loader: async () => {
          const data = await axios.get(`https://s.rgvturf.com/shopTurf`)
            .then(res => res.data)
            .catch(er => console.log(er))
            return data;
          }
      },
      {
        path: '/product-catalog/:title/:id',
        element:<Suspense fallback={<LoadingSpain/>}><SingleProductPage/></Suspense>
      },
      {
        path: '/shop-plants',
        element: <Suspense fallback={<LoadingSpain/>}><ShopPlants/></Suspense>
      },
      {
        path: '/shop-plants/plants/:productCategory',
        element: <Suspense fallback={<LoadingSpain/>}><ProductCatalogPage buttonText={'Shop Turf'} buttonLink={'/shop-turf'} heroText={'Outdoor, Synthetic, UV Coated Plants'}/></Suspense>,
        loader: async () => {
          const data = await axios.get(`https://s.rgvturf.com/shopPlants`)
              .then(res => res.data)
              .catch(er => console.log(er))
              return data;
          }
      },
      {
        path: '/product-catalog/:id/:title',
        element: <Suspense fallback={<LoadingSpain/>}><SingleProductPage/></Suspense>
      },
      {
        path: '/services',
        element: <Suspense fallback={<LoadingSpain/>}><Services/></Suspense>
      },
      {
        path: '/modeling',
        element: <Suspense fallback={<LoadingSpain/>}><Modeling/></Suspense>
      },
      {
        path: '/about',
        element: <Suspense fallback={<LoadingSpain/>}><About/></Suspense>
      },
      {
        path: '/calculator',
        element: <Suspense fallback={<LoadingSpain/>}><Calculator/></Suspense>
      },
      {
        path: '/faqs',
        element: <Suspense fallback={<LoadingSpain/>}><FAQs/></Suspense>
      },
      {
        path: '/contact-us',
        element: <Suspense fallback={<LoadingSpain/>}><ContactUs/></Suspense>
      },
      {
        path: '/free-quate',
        element: <Suspense fallback={<LoadingSpain/>}><FreeQuatePage/></Suspense>
      },
      {
        path: '/submit-data',
        element: <Suspense fallback={<LoadingSpain/>}><SubmitData/></Suspense>
      },
      {
        path: '/submit-data-employe',
        element: <Suspense fallback={<LoadingSpain/>}><SubmitPrivetRoute><SubmitDataEmploye/></SubmitPrivetRoute></Suspense>
      },
      {
        path: '/thankyou',
        element: <Suspense fallback={<LoadingSpain/>}><ThankYouPage/></Suspense>
      },
      {
        path: '/product-catelog',
        element: <Suspense fallback={<LoadingSpain/>}> <ProductCatelog/></Suspense>,
        loader: async () => {
          const data = await axios.get("https://s.rgvturf.com/products")
              .then(res => res.data)
              .catch(er => console.log(er))
              return data;
          }
      },

    ]
  },
  {
    path: "/admin",
    element: <Suspense fallback={<LoadingSpain/>}><AdminLoginPage/></Suspense>
  },
  {
    path: "/dashbord",
    element: <Suspense fallback={<LoadingSpain/>}><PrivetRoute><AdminDashboard/></PrivetRoute><Toaster/></Suspense>,
    children: [
      {
        path:'/dashbord/add-product',
        element: <Suspense fallback={<LoadingSpain/>}><PrivetRoute><AddProductPage/></PrivetRoute></Suspense>,
      },
      {
        path:'/dashbord/manage-product',
        element: <Suspense fallback={<LoadingSpain/>}><PrivetRoute><ManageProduct/></PrivetRoute></Suspense>,
      },
      {
        path:'/dashbord/edit-product/:id',
        element: <Suspense fallback={<LoadingSpain/>}><PrivetRoute><EditProduct/></PrivetRoute></Suspense>,
      },
      {
        path:'/dashbord/add-modeling-image',
        element: <Suspense fallback={<LoadingSpain/>}><PrivetRoute><AddModelingImage/></PrivetRoute></Suspense>,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  //   <RouterProvider router={router} />
  // </React.StrictMode>,
    <RouterProvider router={router} />
)
