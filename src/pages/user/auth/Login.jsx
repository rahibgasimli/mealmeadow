import { Link } from "react-router-dom";
import { useState } from "react";

import loginImage from "../../../assets/images/auth/login.svg";
import gmailLogo from "../../../assets/images/auth/gmail-logo.svg";

const Login = () => {

  return (
    <section className="login-section">
      <div className="login-left">
        <img src={loginImage} alt="" />
      </div>
      <div className="login-right">
        <h1>Giriş</h1>
        <form action="#" method="POST">
          <input
            type="email"
            placeholder="E-mail"
          />
          <input
            type="password"
            placeholder="Şifrə"
          />
          <button type="submit">Daxil ol</button>
        </form>
        <span>və ya</span>
        <a href="#">
          <img src={gmailLogo} alt="" />
        </a>
        <h6>
          Hesabınız yoxdu?<Link to="/register"> Qeydiyyatdan keç</Link>
        </h6>
      </div>
    </section>
  );
};

export default Login;
