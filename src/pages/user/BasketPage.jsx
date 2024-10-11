import BasketCard from "../../components/products/BasketCard";
import Contact from "../../components/home/Contact";

const BasketPage = () => {

  return (
    <>
      <div className="basket-page">
        <div className="basket-page-cards">
          <BasketCard/>
        </div>
        <div className="basket-total">
          <div className="basket-total-top">
            <h4>Subtotal</h4>
            <h6> ₼</h6>
          </div>
          <div className="basket-total-bottom">
            <h4>Total</h4>
            <h6> ₼</h6>
          </div>
        </div>
        <button className="odenis">Ödəniş et</button>
      </div>
      <Contact />
    </>
  );
};

export default BasketPage;
