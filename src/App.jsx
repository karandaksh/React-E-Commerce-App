// import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from 'react-router-dom'


import Home from './Pages/Home'
import About from './Pages/About'
import Cart from './Pages/Cart'
import Collection from './Pages/Collection'
import Contact from './Pages/Contact'
import Login from './Pages/Login'
import Orders from './Pages/Orders'
import PlaceOrder from './Pages/PlaceOrder'
import Product from './Pages/Product'
import Layout from './Pages/Layout'
import Services from './Pages/Services'




import 'react-toastify/dist/ReactToastify.css';

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='' element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='cart' element={<Cart />} />
        <Route path='collection' element={<Collection />} />
        <Route path='contact' element={<Contact />} />
        <Route path='login' element={<Login />} />
        <Route path='placeorder' element={<PlaceOrder />} />
        <Route path='product' element={<Product />} >
          <Route path=':ProductID' element={<Product />} />
        </Route>
        <Route path='services' element={<Services />} />
      </Route>
    )
  )



  return (
    <>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </>
  )

}





export default App
