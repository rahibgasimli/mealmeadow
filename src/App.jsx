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

function App() {
  const user = useAuth();

  return (
    <BasketProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
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
          </Routes>
        </Layout>
      </BrowserRouter>
    </BasketProvider>
  );
}

export default App;
