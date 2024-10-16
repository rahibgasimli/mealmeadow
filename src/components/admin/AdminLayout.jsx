import logo from "../../assets/images/admin/mealmeadow-admin-logo.svg";
import AdminHeader from "./components/AdminHeader/AdminHeader";
import { Outlet } from "react-router-dom";
import NavItem from "./components/AdminHeader/NavItem/NavItem";
import { useState } from "react";
import "./AdminLayout.css";
const AdminLayout = () => {
  const [activeLink, setActiveLink] = useState("");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };
  return (
    <>
      <main>
        <AdminHeader />
        <aside>
          <figure className="logo">
            <img src={logo} alt="meal-meadow" />
          </figure>
          <div className="nav-bar">
            <nav className="flex column">
              <NavItem
                to="/admin/dashboard"
                icon={
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8.38985 2.93336C8.64044 2.71562 8.96069 2.59475 9.29266 2.59261C9.62463 2.59047 9.94641 2.70719 10.1998 2.92168L14.6281 6.66745L16.3656 8.03947C16.4373 8.09606 16.4971 8.16621 16.5417 8.24591C16.5862 8.32561 16.6146 8.41331 16.6253 8.50399C16.6359 8.59467 16.6286 8.68657 16.6038 8.77442C16.5789 8.86228 16.537 8.94438 16.4804 9.01603C16.4238 9.08769 16.3536 9.1475 16.2739 9.19204C16.1942 9.23659 16.1066 9.265 16.0159 9.27566C15.9252 9.28631 15.8333 9.279 15.7454 9.25414C15.6576 9.22928 15.5755 9.18736 15.5038 9.13077L14.8925 8.64815L14.928 14.1524C14.9304 14.5211 14.7862 14.8756 14.5272 15.138C14.2682 15.4004 13.9156 15.5491 13.5469 15.5515L10.7666 15.5694L10.7442 12.0941C10.7418 11.7254 10.5931 11.3728 10.3307 11.1138C10.0683 10.8547 9.71376 10.7106 9.34508 10.7129C8.97639 10.7153 8.62375 10.8641 8.36474 11.1264C8.10572 11.3888 7.96154 11.7434 7.96392 12.112L7.98636 15.5874L5.2061 15.6053C4.83741 15.6077 4.48288 15.4635 4.2205 15.2045C3.95812 14.9455 3.80937 14.5928 3.80699 14.2242L3.77146 8.71925L3.16642 9.20972C3.096 9.27064 3.01407 9.31679 2.92548 9.34543C2.83689 9.37407 2.74345 9.38462 2.6507 9.37646C2.55795 9.36829 2.46779 9.34158 2.38556 9.2979C2.30334 9.25422 2.23073 9.19447 2.17204 9.12219C2.11335 9.04991 2.06979 8.96657 2.04392 8.87713C2.01806 8.78769 2.01043 8.69396 2.02149 8.60151C2.03255 8.50907 2.06206 8.41978 2.10829 8.33896C2.15452 8.25814 2.21651 8.18743 2.29059 8.13103L4.01028 6.73669L8.38985 2.93336V2.93336Z"
                      fill={`${activeLink === "dashboard" ? "#fff" : "#313131"}`}
                      fillOpacity="0.77"
                    />
                  </svg>
                }
                className={`${activeLink === "dashboard" ? "active" : ""}`}
                onClick={() => handleLinkClick("dashboard")}
                label="Dashboard"
              />
              <NavItem
                to="/admin/products"
                icon={
                  <svg
                    width="17"
                    height="15"
                    viewBox="0 0 17 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.20655 1.08449C8.42541 0.76094 8.96825 0.760939 9.18711 1.08449L11.5058 4.5123C11.5859 4.63083 11.7203 4.71487 11.876 4.7439L16.3785 5.58345C16.8035 5.66269 16.9713 6.10724 16.6815 6.38645L13.612 9.34451C13.5058 9.44679 13.4545 9.58277 13.4706 9.71924L13.9347 13.6659C13.9785 14.0384 13.5393 14.3132 13.1414 14.1622L8.92562 12.5626C8.77986 12.5073 8.6138 12.5073 8.46803 12.5626L4.2523 14.1622C3.85437 14.3132 3.4152 14.0384 3.45901 13.6659L3.92308 9.71924C3.93913 9.58277 3.88781 9.44679 3.78168 9.34451L0.712134 6.38645C0.422399 6.10724 0.590146 5.66269 1.01514 5.58345L5.5177 4.7439C5.67338 4.71487 5.80772 4.63083 5.88789 4.5123L8.20655 1.08449Z"
                      fill={`${activeLink === "products" ? "#fff" : "#313131"}`}
                      fillOpacity="0.77"
                    />
                  </svg>
                }
                className={`${activeLink === "products" ? "active" : ""}`}
                onClick={() => handleLinkClick("products")}
                label="Məhsullar"
              />
              <NavItem
                to="/admin/partners"
                icon={
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.4541 12.762C1.4541 10.6176 3.19253 8.87912 5.33699 8.87912H9.68406C11.8285 8.87912 13.567 10.6176 13.567 12.762C13.567 13.4768 12.9875 14.0563 12.2727 14.0563H2.7484C2.03358 14.0563 1.4541 13.4768 1.4541 12.762Z"
                      fill="#313131"
                      fillOpacity="0.77"
                    />
                    <path
                      d="M7.51298 7.8927C9.41917 7.8927 10.9644 6.34743 10.9644 4.44124C10.9644 2.53506 9.41917 0.989784 7.51298 0.989784C5.60679 0.989784 4.06152 2.53506 4.06152 4.44124C4.06152 6.34743 5.60679 7.8927 7.51298 7.8927Z"
                      fill={`${activeLink === "partners" ? "#fff" : "#313131"}`}
                      fillOpacity="0.77"
                    />
                  </svg>
                }
                className={` ${activeLink === "partners" ? "active" : ""}`}
                onClick={() => handleLinkClick("partners")}
                label="Partnyorlar"
              />
              <NavItem
                to="/admin/orders"
                icon={
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.92995 14.2431C3.78146 14.2431 3.63906 14.1841 3.53407 14.0791C3.42907 13.9741 3.37008 13.8317 3.37008 13.6832V10.6949C3.06294 10.8414 2.72253 10.9042 2.38332 10.8769C2.09611 10.8558 1.81707 10.7716 1.56608 10.6304C1.31509 10.4892 1.09831 10.2944 0.931168 10.0599C0.764026 9.82534 0.650634 9.55685 0.59906 9.27352C0.547487 8.99019 0.559 8.69897 0.63278 8.42059C0.706561 8.14221 0.840795 7.88352 1.02593 7.66292C1.21106 7.44232 1.44255 7.26524 1.7039 7.14429C1.96526 7.02333 2.25007 6.96147 2.53805 6.96311C2.82604 6.96475 3.11012 7.02984 3.37008 7.15376V4.16548C3.37008 4.017 3.42907 3.87459 3.53407 3.7696C3.63906 3.6646 3.78146 3.60562 3.92995 3.60562H7.19816C7.05164 3.29847 6.98887 2.95806 7.0162 2.61886C7.03731 2.33164 7.12146 2.05261 7.26267 1.80162C7.40388 1.55062 7.59868 1.33384 7.83321 1.1667C8.06773 0.999561 8.33621 0.886168 8.61955 0.834595C8.90288 0.783021 9.1941 0.794534 9.47248 0.868315C9.75086 0.942096 10.0096 1.07633 10.2301 1.26146C10.4507 1.4466 10.6278 1.67808 10.7488 1.93944C10.8697 2.2008 10.9316 2.4856 10.93 2.77359C10.9283 3.06157 10.8632 3.34565 10.7393 3.60562H14.0075C14.156 3.60562 14.2984 3.6646 14.4034 3.7696C14.5084 3.87459 14.5674 4.017 14.5674 4.16548V7.15376C14.2602 7.00724 13.9198 6.94447 13.5806 6.97181C13.2934 6.99291 13.0144 7.07706 12.7634 7.21827C12.5124 7.35948 12.2956 7.55429 12.1285 7.78881C11.9613 8.02333 11.8479 8.29182 11.7964 8.57515C11.7448 8.85848 11.7563 9.1497 11.8301 9.42808C11.9039 9.70646 12.0381 9.96515 12.2232 10.1858C12.4084 10.4063 12.6398 10.5834 12.9012 10.7044C13.1626 10.8253 13.4474 10.8872 13.7353 10.8856C14.0233 10.8839 14.3074 10.8188 14.5674 10.6949V13.6832C14.5674 13.8317 14.5084 13.9741 14.4034 14.0791C14.2984 14.1841 14.156 14.2431 14.0075 14.2431H3.92995Z"
                      fill={`${activeLink === "orders" ? "#fff" : "#313131"}`}
                      fillOpacity="0.77"
                    />
                  </svg>
                }
                className={`${activeLink === "orders" ? "active" : ""}`}
                onClick={() => handleLinkClick("orders")}
                label="Sifarişlər"
              />
              <NavItem
                to="/admin/users"
                icon={
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.4541 12.762C1.4541 10.6176 3.19253 8.87912 5.33699 8.87912H9.68406C11.8285 8.87912 13.567 10.6176 13.567 12.762C13.567 13.4768 12.9875 14.0563 12.2727 14.0563H2.7484C2.03358 14.0563 1.4541 13.4768 1.4541 12.762Z"
                      fill={`${activeLink === "users" ? "#fff" : "#313131"}`}
                      fillOpacity="0.77"
                    />
                    <path
                      d="M7.51298 7.8927C9.41917 7.8927 10.9644 6.34743 10.9644 4.44124C10.9644 2.53506 9.41917 0.989784 7.51298 0.989784C5.60679 0.989784 4.06152 2.53506 4.06152 4.44124C4.06152 6.34743 5.60679 7.8927 7.51298 7.8927Z"
                      fill="#313131"
                      fillOpacity="0.77"
                    />
                  </svg>
                }
                className={`${activeLink === "users" ? "active" : ""}`}
                onClick={() => handleLinkClick("users")}
                label="İstifadəçilər"
              />
              <NavItem
                to="/admin/waiting-for-confirmation"
                icon={
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.92995 14.2431C3.78146 14.2431 3.63906 14.1841 3.53407 14.0791C3.42907 13.9741 3.37008 13.8317 3.37008 13.6832V10.6949C3.06294 10.8414 2.72253 10.9042 2.38332 10.8769C2.09611 10.8558 1.81707 10.7716 1.56608 10.6304C1.31509 10.4892 1.09831 10.2944 0.931168 10.0599C0.764026 9.82534 0.650634 9.55685 0.59906 9.27352C0.547487 8.99019 0.559 8.69897 0.63278 8.42059C0.706561 8.14221 0.840795 7.88352 1.02593 7.66292C1.21106 7.44232 1.44255 7.26524 1.7039 7.14429C1.96526 7.02333 2.25007 6.96147 2.53805 6.96311C2.82604 6.96475 3.11012 7.02984 3.37008 7.15376V4.16548C3.37008 4.017 3.42907 3.87459 3.53407 3.7696C3.63906 3.6646 3.78146 3.60562 3.92995 3.60562H7.19816C7.05164 3.29847 6.98887 2.95806 7.0162 2.61886C7.03731 2.33164 7.12146 2.05261 7.26267 1.80162C7.40388 1.55062 7.59868 1.33384 7.83321 1.1667C8.06773 0.999561 8.33621 0.886168 8.61955 0.834595C8.90288 0.783021 9.1941 0.794534 9.47248 0.868315C9.75086 0.942096 10.0096 1.07633 10.2301 1.26146C10.4507 1.4466 10.6278 1.67808 10.7488 1.93944C10.8697 2.2008 10.9316 2.4856 10.93 2.77359C10.9283 3.06157 10.8632 3.34565 10.7393 3.60562H14.0075C14.156 3.60562 14.2984 3.6646 14.4034 3.7696C14.5084 3.87459 14.5674 4.017 14.5674 4.16548V7.15376C14.2602 7.00724 13.9198 6.94447 13.5806 6.97181C13.2934 6.99291 13.0144 7.07706 12.7634 7.21827C12.5124 7.35948 12.2956 7.55429 12.1285 7.78881C11.9613 8.02333 11.8479 8.29182 11.7964 8.57515C11.7448 8.85848 11.7563 9.1497 11.8301 9.42808C11.9039 9.70646 12.0381 9.96515 12.2232 10.1858C12.4084 10.4063 12.6398 10.5834 12.9012 10.7044C13.1626 10.8253 13.4474 10.8872 13.7353 10.8856C14.0233 10.8839 14.3074 10.8188 14.5674 10.6949V13.6832C14.5674 13.8317 14.5084 13.9741 14.4034 14.0791C14.2984 14.1841 14.156 14.2431 14.0075 14.2431H3.92995Z"
                      fill={`${activeLink === "waiting-for-confirmation" ? "#fff" : "#313131"}`}
                      fillOpacity="0.77"
                    />
                  </svg>
                }
                className={`${activeLink === "waiting-for-confirmation" ? "active" : ""}`}
                onClick={() => handleLinkClick("waiting-for-confirmation")}
                label="Təsdiq gözləyənlər"
              />
            </nav>
          </div>
        </aside>

        {/* Content Section */}
        <section className="admin-content">
          <Outlet />
        </section>
      </main>
    </>
  );
};

export default AdminLayout;
