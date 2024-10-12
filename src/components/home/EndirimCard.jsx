import cardPhoto1 from "../../assets/images/home/test3.png";
import { CiHeart } from "react-icons/ci";
import basketLogo from "../../assets/images/products/basketLogoCard.svg"
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const EndirimCard = ({ food }) => {
  let { id, price, discounted_price, name, food_type, discounted_rate, image } = food

  if (!Object.keys(food).length) {
    console.log("Melumatlar Boshdur");
  }


  const dispatch = useDispatch();

  function addToCart() {
    dispatch({
      type: "ADD_TO_CART",
      payload: food
    })
  }

  return (
    <div className="endirim-card">
      <div className="endirim-card-top">
        <div className="endirim-card-image">
          <img src={image} alt={name} /></div>
        <h4>{discounted_rate} %</h4>
      </div>
      <div className="endirim-card-content">
        <Link to={`/productdetails/${id}`}>
          <h2>{name}</h2>
        </Link>
        <h6>{food_type}</h6>
        <p>Pomidor, kahı, xiyar, turp, göbələk, pancake...
        </p>
      </div>
      <div className="endirim-card-bottom">
        <div className="card-prices">
          <span className="price">{price} ₼</span>
          <span className='endirimli-price'>{discounted_price} ₼</span>
        </div>
        <div className="card-buttons">
          <a href="#" className="card-favori">
            <CiHeart />
          </a>
          <button className="card-sebet">
            <img src={basketLogo} alt="" onClick={addToCart} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default EndirimCard;
