import logo from "../../assets/images/home/navbar-logo.svg";
import { CiHeart, CiShoppingBasket, CiLogin } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Navbar = () => {
  const isLoggedIn = !!Cookies.get("accessToken");
  const navigate = useNavigate();

  const handleLogout = () => {
    const isConfirm = confirm("Are you sure for logout?");
    if (isConfirm) {
      Cookies.remove("accessToken");
      navigate("/");
    }
  };

  return (
    <div className="navbar">
      <div className="navbar-top">
        <div className="navbar-logo">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <input type="text" />
        <div className="navbar-top-buttons">
          <Link to="">
            <CiHeart />
          </Link>
          <Link to="/basket">
            <CiShoppingBasket className="shopping-basket" />
            <sup></sup>
          </Link>
          {isLoggedIn && (
            <>
              <Link to="/profile">
                <CgProfile />
              </Link>
              <Link to="/" onClick={handleLogout}>
                <CiLogin />
              </Link>
            </>
          )}
          {!isLoggedIn && (
            <Link to="/login">
              <CiLogin />
            </Link>
          )}
        </div>
      </div>

      <div className="navbar-bottom">
        <a href="">Ana səhifə</a>
        <a href="">Məhsullar</a>
        <a href="">Əlaqə</a>
        <a href="">Restoranlar</a>
        <a href="">Mağazalar</a>
      </div>
    </div>
  );
};

export default Navbar;
