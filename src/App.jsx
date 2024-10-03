import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from "./layout/user/Layout"
import HomePage from "./pages/user/HomePage"
import Login from "./pages/user/auth/Login"
import Register from "./pages/user/auth/Register"
import NotFoundPage from './pages/user/NotFoundPage'
import Navbar from './layout/user/Navbar'
import Footer from './layout/user/Footer'
import ProductDetails from './components/products/ProductDetails'
import ProductDetailsPage from './pages/user/ProductDetailsPage'
import ForgotPasswordEmail from './pages/user/auth/ForgotPasswordEmail'
import EmailMessage from './pages/user/auth/EmailMessage'
import NewPassword from './pages/user/auth/NewPassword'
import EmptyBasket from './pages/user/EmptyBasket'
import Partnyor from './components/home/Partnyor'
import BasketCard from './components/products/BasketCard'
import BasketPage from './pages/user/BasketPage'
import PhotoSlide from './components/home/PhotoSlide'
import SlideTemp from './components/home/SlideTemp'
import HomeMainSlide from './components/home/HomeMainSlide'
import Categories from './components/home/Categories'

function App() {

  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' element={<HomePage/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/register' element={<Register/>}></Route>
            <Route path='/productdetails' element={<ProductDetailsPage/>}></Route>
            <Route path='/basket' element={<BasketPage/>}></Route>
            <Route path='*' element={<NotFoundPage/>}></Route>
          </Routes>
        </Layout>
      </BrowserRouter>

      {/* <HomePage/> */}

        {/* <HomeMainSlide/> */}

    {/* <Categories/> */}

    </>
  )
}

export default App
