import React, { useState, useEffect } from 'react'
import EndirimCard from './EndirimCard'

const EndirimliMehsullar = () => {


  const [melumatlar, setMelumatlar] = useState([]);

  useEffect(function () {
    const unvan = "https://mealmeadow.intigam.online/api/food/all/";

    fetch(unvan)
      .then(melumatlar => melumatlar.json())
      .then(frontunAnlayacagiForma => {
        setMelumatlar(frontunAnlayacagiForma)

        console.log(frontunAnlayacagiForma);

      })
  }, []);



  return (
    <section className='endirim-mehsullar'>
      <h1><span>Endirimli</span>məhsullar</h1>
      <div className="endirim-mehsullar-top">
        {
          melumatlar.map((item) => (
            <div key={item.id}>
              <EndirimCard food={item} />
            </div>
          ))
        }
        {/* <EndirimCard />
        <EndirimCard />
        <EndirimCard /> */}

      </div>
      {/* <div className="endirim-mehsullar-bottom"> */}

      {/* {
                melumatlar.map((birMelumat) => (
                  <EndirimCard qiymet={birMelumat.price} name={birMelumat.name} disqiymet={birMelumat.discounted_price} type={birMelumat.type} endirim={birMelumat.discounted_rate}  />
                ))
            } */}

      {/* </div> */}
      <a href="#"><button>Daha  çox</button></a>
    </section>
  )
}

export default EndirimliMehsullar