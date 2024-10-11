import { Link } from "react-router-dom";
import gmailLogo from "../../../assets/images/auth/gmail-logo.svg";
import registerLeft from "../../../assets/images/auth/register-left.svg";

const Register = () => {

  return (
    <section className="register-section">
      <div className="register-left">
        <img src={registerLeft} alt="" />
      </div>
      <div className="register-right">
        <div className="register-right-top">
          <h1 className="register-btn">Qeydiyyat</h1>
        </div>
        <form action="#" method="POST">
          <input
            type="text"
            placeholder="Ad"
          />
          <input
            type="text"
            placeholder="Soyad"
          />
          <input
            type="tel"
            placeholder="Mobil nömrə"
          />
          <input
            type="email"
            placeholder="E-mail"
          />
          <input
            type="password"
            placeholder="Şifrə"
          />
          <input
            type="password"
            placeholder="Şifrəni təkrarla"
          />
          <button type="submit">Daxil ol</button>
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
