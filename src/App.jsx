import { useState } from 'react'
import './App.css'
import Navbar from './layout/user/Navbar'
import Footer from './layout/user/Footer'
import Partnyor from './components/home/Partnyor'
import Contact from './components/home/Contact'
import Register from './pages/user/auth/Register'
import Login from './pages/user/auth/Login'
import EndirimCard from './components/home/EndirimCard'
import HomeMainSlide from './components/home/HomeMainSlide'
import PhotoSlide from './components/home/PhotoSlide'
import RestoranCard from './components/home/RestoranCard'
import CloseRestorans from './components/home/CloseRestorans'
import BravoCard from './components/home/BravoCard'
import EndirimliMehsullar from './components/home/EndirimliMehsullar'
import HomePage from './pages/user/home/HomePage'

function App() {

  return (
    <>
      {/* <Navbar/> */}
      {/* <HomePage/> */}
      {/* <Partnyor/> */}
      {/* <Contact/>  */}
      {/* <Footer/> */}
      <Register/>
      {/* <Login/> */}
      {/* <EndirimCard/> */}
      {/* <HomeMainSlide/> */}
      {/* <PhotoSlide/> */}
      {/* <RestoranCard /> */}
      {/* <CloseRestorans/> */}
      {/* <BravoCard/> */}
      {/* <EndirimliMehsullar/> */}
    </>
  )
}

export default App
