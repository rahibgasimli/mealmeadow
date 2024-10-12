import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./hook/useAuth";
import { BasketProvider } from "./hook/BasketContext";
import Layout from "./layout/user/Layout";
import HomePage from "./pages/user/HomePage";
import Login from "./pages/user/auth/Login";
import Register from "./pages/user/auth/Register";
import NotFoundPage from "./pages/user/NotFoundPage";
import ProductDetailsPage from "./pages/user/ProductDetailsPage";
import BasketPage from "./pages/user/BasketPage";
import AdminLayout from "./components/admin/AdminLayout";
import { Products } from "./components/admin/Products/Products";
import { Orders } from "./components/admin/Orders/Orders";
import { Users } from "./components/admin/Users/Users";
import Partners from "./components/admin/Partners/Partners";
import Dashboard from "./components/admin/Dashboard/Dashboard";
import WaitingConfirmation from "./components/admin/WaitingConfirmation/WaitingConfirmation";

function App() {
  const user = useAuth();

  return (
    <BasketProvider>
      <BrowserRouter>
        <Routes>
          {/* Public/User routes */}
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/login"
              element={user ? <Navigate to="/" /> : <Login />}
            />
            <Route
              path="/register"
              element={user ? <Navigate to="/" /> : <Register />}
            />
            <Route path="/productdetails" element={<ProductDetailsPage />} />
            <Route path="/basket" element={<BasketPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
          {/* Admin  routes */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/partners" element={<Partners />} />
            <Route path="/admin/products" element={<Products />} />
            <Route path="/admin/orders" element={<Orders />} />
            <Route path="/admin/users" element={<Users />} />
            <Route
              path="/admin/waiting-for-confirmation"
              element={<WaitingConfirmation />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </BasketProvider>
  );
}

export default App;
