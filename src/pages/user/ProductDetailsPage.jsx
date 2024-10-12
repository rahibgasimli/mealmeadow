import React, { useState } from 'react'
import ProductDetails from '../../components/products/ProductDetails'
import EndirimliMehsullar from '../../components/home/EndirimliMehsullar'
import Contact from '../../components/home/Contact'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'

const ProductDetailsPage = () => {
  const [product, setProduct] = useState({})
  const { id } = useParams()
  console.log(id);

  useEffect(function () {
    const unvan = `https://mealmeadow.intigam.online/api/food/${id}`;

    fetch(unvan)
      .then(melumatlar => melumatlar.json())
      .then(frontunAnlayacagiForma => {
        setProduct(frontunAnlayacagiForma)
        console.log(frontunAnlayacagiForma);

      })
  }, [id]);

  return (
    <>
      <ProductDetails {...product}/>
      <EndirimliMehsullar />
      <Contact />
    </>
  )
}

export default ProductDetailsPage