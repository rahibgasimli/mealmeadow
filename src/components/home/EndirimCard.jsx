import cardPhoto1 from "../../assets/images/home/test3.png";
import { CiHeart, CiShoppingBasket } from "react-icons/ci";
// import { useBasket } from "../../hook/BasketContext";

const EndirimCard = () => {
  // const { addToBasket } = useBasket();

  // const handleAddToBasket = () => {
  //   const item = {
  //     id: Math.random(),
  //     name: "Cio-Cio-san",
  //     description: "Vegan plate",
  //     price: 25,
  //     discountedPrice: 18,
  //     image: cardPhoto1,
  //   };
  //   // addToBasket(item);
  //   alert(`${item.name} has been added to your basket!`);
  // };

  return (
    <div className="endirim-card">
      <div className="endirim-card-top">
        <div className="endirim-card-image">
          <img src={cardPhoto1} alt="" />
        </div>
        <h4>15 %</h4>
      </div>
      <div className="endirim-card-content">
        <h2>Cio-Cio-san</h2>
        <h6>Vegan plate</h6>
        <p>Pomidor, kahı, xiyar, turp, göbələk, pancake...</p>
      </div>
      <div className="endirim-card-bottom">
        <div className="card-prices">
          <span className="price">25 ₼</span>
          <span className="endirimli-price">18 ₼</span>
        </div>
        <div className="card-buttons">
          <a href="#" className="card-favori">
            <CiHeart />
          </a>
          <button  className="card-sebet">
            <CiShoppingBasket />
          </button>
        </div>
      </div>
    </div>
  );
};

export default EndirimCard;
