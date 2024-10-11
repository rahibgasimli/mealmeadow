import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import gmailLogo from "../../../assets/images/auth/gmail-logo.svg";
import registerLeft from "../../../assets/images/auth/register-left.svg";
import axios from "axios";
import { api } from "../../../config/api";
import GoogleLoginButton from "../../GoogleLoginButton";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    try {
      const response = await axios.post(`${api}/register/`, {
        name: firstName,
        last_name: lastName,
        email,
        password,
        password2: confirmPassword,
      });

      if (response.status === 200) {
        const userData = {
          firstName,
          lastName,
          email,
          phoneNumber,
        };
        localStorage.setItem("user", JSON.stringify(userData));
        navigate("/profile");
      }
    } catch (err) {
      setError("An error happened during registration.", err);
    }
  };

  return (
    <section className="register-section">
      <div className="register-left">
        <img src={registerLeft} alt="" />
      </div>
      <div className="register-right">
        <div className="register-right-top">
          <h1 className="register-btn">Qeydiyyat</h1>
        </div>
        <form onSubmit={handleSubmit} action="#" method="POST">
          <input
            type="text"
            placeholder="Ad"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Soyad"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            type="tel"
            placeholder="Mobil nömrə"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Şifrə"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Şifrəni təkrarla"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button type="submit">Daxil ol</button>
          {error ? <p>User artiq movcuddur</p> : <p>{error}</p>}
        </form>
        <span>və ya</span>
        <GoogleLoginButton>
          <img src={gmailLogo} alt="" />
          </GoogleLoginButton>
        <h6>
          Hesabınız var?<Link to="/login"> Daxil olun</Link>
        </h6>
      </div>
    </section>
  );
};

export default Register;
