import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/user/Layout";
import HomePage from "./pages/user/HomePage";
import Login from "./pages/user/auth/Login";
import Register from "./pages/user/auth/Register";
import NotFoundPage from "./pages/user/NotFoundPage";
import ProductDetailsPage from "./pages/user/ProductDetailsPage";
import BasketPage from "./pages/user/BasketPage";
import Profile from "./pages/Profile";
import AdminLayout from "./components/admin/AdminLayout";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/productdetails" element={<ProductDetailsPage />} />
          <Route path="/basket" element={<BasketPage />} />
          <Route path="/admin" element={<AdminLayout />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
