import BasketCard from "../../components/products/BasketCard";
import Contact from "../../components/home/Contact";
import { useSelector } from "react-redux";

const BasketPage = () => {
  const { cartList } = useSelector(state => state)
  console.log(cartList);


  return (
    <>
      <div className="basket-page">
        <div className="basket-page-cards">
          {
            cartList.map(item => <BasketCard {...item} key={item.id} />)
          }

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
