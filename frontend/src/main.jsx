import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import BusinessOffer from './components/BusinessOffering/BusinessOffer';
import BusinessPartner from './components/Home/BusinessPartner';
import DiamondResume from './components/BusinessOffering/DiamondResume';
import Sunshine from './components/BusinessOffering/Sunshine';
import Inventory from './components/Inventory';
import Supply from './components/SupplyChain/Supply'
import BusinessProcess from './components/BusinessProcess/BusinessProcess';
import Analyzing from './components/BusinessProcess/Analyzing';
import Website from './components/BusinessProcess/Website';
import Airbnb from './components/Airbnb';
import Career from './Career';
import { Navigate } from 'react-router-dom';
import MachineLearning from './components/SupplyChain/MachineLearning';
import Blockchain from './components/SupplyChain/Blockchain';
import Contact from './components/ContactForm/Contact';



const router = createBrowserRouter([
  {
    path: "/",
    element: (
          <Root></Root>
      )
    ,
    children:[
      {
        path: "/",
        element: <Navigate to="/home" replace />, // Redirect to /home
      },
      {
        path:'/home',
        element:(<Home />)
      },
      {
        path:'/businessPartner',
        element:<BusinessPartner></BusinessPartner>
      },

      {
        path:'/businessOffer',
        element:<BusinessOffer></BusinessOffer>
      },
      // {
      //   path:'/diamondResume',
      //   element:<DiamondResume></DiamondResume>
      // },
      // {
      //   path:'/sunshine',
      //   element:<Sunshine></Sunshine>
      // },
      {
        path:'/inventorymanagement',
        element:<Inventory></Inventory>
      },
      {
        path:'/supplychain',
        element:<Supply></Supply>
      },
      {
        path:'/airbnbanalytics',
        element:<Airbnb></Airbnb>
      },
      {
        path:'/businessProcess',
        element:<BusinessProcess></BusinessProcess>
      },
      {
        path:'/analyzing',
        element:<Analyzing></Analyzing>
      },
      {
        path:'/website',
        element:<Website></Website>
      },
      {
        path:'/career',
        element:<Career></Career>
      },
      {
        path:'/machinelearning',
        element:<MachineLearning></MachineLearning>
      },
      {
        path:'/blockchain',
        element:<Blockchain/>
      },
      {
        path:'/contact',
        element:<Contact/>
      }

    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
