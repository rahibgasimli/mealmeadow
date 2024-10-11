import React, {useState,useEffect} from 'react'

import backgroundImage from "../../assets/images/home/yaxin-restoranlar.svg"
import RestoranCard from './RestoranCard'

const CloseRestorans = () => {

    const [melumatlar,setMelumatlar] = useState([]);

    useEffect(function(){
      const unvan = "https://mealmeadow.intigam.online/api/restaurants/all/"

      fetch(unvan)
        .then(melumatlar => melumatlar.json())
        .then(frontunAnlayacagiForma => setMelumatlar(frontunAnlayacagiForma))
    },[]);

  return (
    <div className="yaxin-restoranlar">
        <div className="yaxin-restoranlar-image"><img src={backgroundImage} alt="" /></div>
        <div className="yaxin-restoranlar-content">
            <h1><span>Yaxın</span>restoranlar</h1>
            <div className="yaxin-restoranlar-cards">
            <div className="yaxin-restoranlar-top">
                {
                  melumatlar.map((birMelumat) =>(
                    <RestoranCard key={birMelumat.id} name={birMelumat.name}/>
                  ))
                }
            </div>
            <div className="yaxin-restoranlar-bottom">
            {
                  melumatlar.map((birMelumat) =>(
                    <RestoranCard key={birMelumat.id} name={birMelumat.name}/>
                  ))
                }
            </div>
            </div>

            <a href="#"><button>Daha  çox</button></a>
        </div>
    </div>
  )
}

export default CloseRestorans