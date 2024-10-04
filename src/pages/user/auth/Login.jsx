import { Link } from "react-router-dom";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase";

import loginImage from "../../../assets/images/auth/login.svg";
import gmailLogo from "../../../assets/images/auth/gmail-logo.svg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("User logged in:", userCredential.user);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <section className="login-section">
      <div className="login-left">
        <img src={loginImage} alt="" />
      </div>
      <div className="login-right">
        <h1>Giriş</h1>
        <form onSubmit={handleLogin} action="#" method="POST">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Şifrə"
          />
          <button type="submit">Daxil ol</button>
          {error ? <p><p>User movcud deyildir ve ya duzgun daxil edin</p></p> : <p>{error}</p>}
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
