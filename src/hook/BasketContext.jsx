import { createContext, useContext, useEffect, useState } from "react";
import { db } from "../firebase";
import { doc,setDoc,getDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const BasketContext = createContext();

export const BasketProvider = ({ children }) => {
  const [basket, setBasket] = useState([]);
  const auth=getAuth()

  const addToBasket = (item) => {
    const updatedBasket = [...basket, item];
    setBasket(updatedBasket); 
    saveBasketToFirestore(updatedBasket);
  };

  const saveBasketToFirestore = async (basketData) => {
    const user = auth.currentUser;
    if (user) {
      const userId = user.uid;
      await setDoc(doc(db, "baskets", userId), {
        items: basketData,
      });
    }
  };

  useEffect(() => {
    const loadBasketFromFirestore = async () => {
      const user = auth.currentUser;
      if (user) {
        const userId = user.uid;
        const basketDoc = doc(db, "baskets", userId);
        const basketSnapshot = await getDoc(basketDoc);
        
        if (basketSnapshot.exists()) {
          setBasket(basketSnapshot.data().items);
        }
      }
    };

    loadBasketFromFirestore();
  }, [auth.currentUser]);

  return (
    <BasketContext.Provider value={{ basket, addToBasket }}>
      {children}
    </BasketContext.Provider>
  );
};

export const useBasket = () => {
  return useContext(BasketContext);
};
