import cardPhoto1 from "../../assets/images/home/test3.png";
import { CiHeart, CiShoppingBasket } from "react-icons/ci";
// import { useBasket } from "../../hook/BasketContext";

const EndirimCard = ({qiymet,disqiymet,name,type,endirim}) => {



  return (
    <div className="endirim-card">
      <div className="endirim-card-top">
        <div className="endirim-card-image"><img src={cardPhoto1} alt="" /></div>
        <h4>{endirim} %</h4>
      </div>
      <div className="endirim-card-content">
        <h2>{name}</h2>
        <h6>{type}</h6>
        <p>Pomidor, kahı, xiyar, turp, göbələk, pancake...
      </p>
      </div>
      <div className="endirim-card-bottom">
        <div className="card-prices">
          <span className="price">{qiymet} ₼</span>
          <span className='endirimli-price'>{disqiymet} ₼</span>
        </div>
        <div className="card-buttons">
          <a href="#" className="card-favori">
            <CiHeart />
          </a>
          <button className="card-sebet">
            <CiShoppingBasket />
          </button>
        </div>
      </div>
    </div>
  );
};

export default EndirimCard;
