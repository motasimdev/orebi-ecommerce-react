import React from 'react'
import Motion from '../layouts/Motion'
import ShopTitle from '../layouts/ShopTitle'
import SingleProduct from '../SingleProduct'
import img from '/src/assets/glasses.png'

const Shop = () => {
  return (
    <>
    <ShopTitle/>
    <SingleProduct imgSrc={img}/>
    </>
  )
}

export default Shop