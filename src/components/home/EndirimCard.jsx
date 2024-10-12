import cardPhoto1 from "../../assets/images/home/test3.png";
import { CiHeart } from "react-icons/ci";
import basketLogo from "../../assets/images/products/basketLogoCard.svg"
import { useDispatch } from "react-redux";

const EndirimCard = ({food = []}) => {

  if(!food[0] || !food.length){
    console.log("Melumatlar Boshdur");
    
  }

  let {id,  qiymet,disqiymet,name,type,endirim,image} = food[0]

  const dispatch = useDispatch();

  function addToCart(){
    dispatch({
      type:"ADD_TO_CART",
      payload:food
    })
  }

  return (
    <div className="endirim-card">
      <div className="endirim-card-top">
        <div className="endirim-card-image"><img src={image[0]} alt={name} /></div>
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
            <Link to={`/products/${id}`}><img src={basketLogo} alt="" onClick={addToCart} /></Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default EndirimCard;
