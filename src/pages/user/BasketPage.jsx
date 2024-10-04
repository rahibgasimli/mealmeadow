import { useBasket } from "../../hook/BasketContext";
import BasketCard from "../../components/products/BasketCard";
import Contact from "../../components/home/Contact";

const BasketPage = () => {
  const { basket } = useBasket();

  const subtotal = basket.reduce(
    (total, item) => total + item.discountedPrice,
    0
  );
  const total = subtotal;

  return (
    <>
      <div className="basket-page">
        <div className="basket-page-cards">
          {basket.map((item) => (
            <BasketCard key={item.id} item={item} />
          ))}
        </div>
        <div className="basket-total">
          <div className="basket-total-top">
            <h4>Subtotal</h4>
            <h6>{subtotal} ₼</h6>
          </div>
          <div className="basket-total-bottom">
            <h4>Total</h4>
            <h6>{total} ₼</h6>
          </div>
        </div>
        <button className="odenis">Ödəniş et</button>
      </div>
      <Contact />
    </>
  );
};

export default BasketPage;
