import React from 'react'
import ProductDetails from '../../components/products/ProductDetails'
import EndirimliMehsullar from '../../components/home/EndirimliMehsullar'
import Contact from '../../components/home/Contact'

const ProductDetailsPage = () => {
  return (
    <>
        <ProductDetails/>
        <EndirimliMehsullar/>
        <Contact/>
    </>
  )
}

export default ProductDetailsPage