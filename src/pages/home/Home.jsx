// import React, { useContext } from 'react'
// import Layout from '../../components/layout/Layout'
// import myContext from '../../context/data/myContext'
// import HeroSection from '../../components/heroSection/HeroSection'
// import Filter from '../../components/filter/Filter'
// import ProductCards from '../../components/productCards/ProductCards'
// import Testimonial from '../../components/testimonial/Testimonial'
// import { useDispatch, useSelector } from 'react-redux'
// // import { addToCart, deleteFromCart } from '../../redux/cartSlice'
// function Home () {
//   const dispatch = useDispatch();
//   const cartItem = useSelector((state) => state.cart);

//   const addCart = () => {
//     dispatch(addToCart('Basmati Chawal'));
//   }
//   const deleteCart = () => {
//     dispatch(deleteFromCart('Basmati Chawal'))
//   }
//   return (
//     <Layout>
//       <div className='flex gap-3 justify-center'>
//         <button className='bg-slate-500' onClick={()=> addCart()}>add</button>
//         <button className='bg-slate-500' onClick={()=> deleteCart()}>remove</button>
//       </div>
//       <HeroSection  />
//       <Filter  />
//       <ProductCards  />

//     </Layout>
//   )
// }

// export default Home

import React from 'react';
import Layout from '../../components/layout/Layout';
import HeroSection from '../../components/heroSection/HeroSection';
import Filter from '../../components/filter/Filter';
import ProductCards from '../../components/productCards/ProductCards';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, deleteFromCart } from '../../redux/CartSlice';

function Home() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);

  console.log(cartItems)

  return (
    <Layout>
      <HeroSection />
      <Filter />
      <ProductCards />
    </Layout>
  );
}

export default Home;
