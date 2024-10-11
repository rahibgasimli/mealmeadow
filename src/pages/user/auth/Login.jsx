import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { api } from "../../../config/api";

import loginImage from "../../../assets/images/auth/login.svg";
import gmailLogo from "../../../assets/images/auth/gmail-logo.svg";
import GoogleLoginButton from "../../GoogleLoginButton";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const csrfToken = Cookies.get("csrfToken");
      const response = await axios.post(
        `${api}/login/`,
        {
          email,
          password,
        },
        {
          headers: {
            "X-CSRFToken": csrfToken,
          },
          // withCredentials: true;
        }
      );

      const { access } = response.data;

      Cookies.set("accessToken", access);
      navigate("/");
    } catch (err) {
      setError("Invalid email or password", err);
    }
  };

  return (
    <section className="login-section">
      <div className="login-left">
        <img src={loginImage} alt="" />
      </div>
      <div className="login-right">
        <h1>Giriş</h1>
        <form onSubmit={handleSubmit} action="#" method="POST">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Şifrə"
            required
          />
          <button type="submit">Daxil ol</button>
          {error ? (
            <p>
              <p>User movcud deyildir ve ya duzgun daxil edin</p>
            </p>
          ) : (
            <p>{error}</p>
          )}
        </form>
        <span>və ya</span>
        <GoogleLoginButton>
          <img src={gmailLogo} alt="" />
        </GoogleLoginButton>
        <h6>
          Hesabınız yoxdu?<Link to="/register"> Qeydiyyatdan keç</Link>
        </h6>
      </div>
    </section>
  );
};

export default Login;
