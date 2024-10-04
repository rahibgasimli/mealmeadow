import { Link } from "react-router-dom";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase";
import gmailLogo from "../../../assets/images/auth/gmail-logo.svg";
import registerLeft from "../../../assets/images/auth/register-left.svg";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("User registered:", userCredential.user);
    } catch (error) {
      setError(error.message);
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
        <form onSubmit={handleRegister} action="#" method="POST">
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
        <a href="#">
          <img src={gmailLogo} alt="" />
        </a>
        <h6>
          Hesabınız var?<Link to="/login"> Daxil olun</Link>
        </h6>
      </div>
    </section>
  );
};

export default Register;
