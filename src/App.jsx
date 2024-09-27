import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from "./layout/user/Layout"
import HomePage from "./pages/user/HomePage"
import Login from "./pages/user/auth/Login"
import Register from "./pages/user/auth/Register"
import NotFoundPage from './pages/user/NotFoundPage'

function App() {

  return (
    <>
      {/* <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' element={<HomePage/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/register' element={<Register/>}></Route>
            <Route path='*' element={<NotFoundPage/>}></Route>
          </Routes>
        </Layout>
      </BrowserRouter> */}

      <NotFoundPage/>
    </>
  )
}

export default App
