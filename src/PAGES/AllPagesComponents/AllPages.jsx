import React from 'react'

import Home from '../Home/Home'

import ShopWithSidebar from '../Shop/ShopWithSidebar'
import ShopNoSidebar from '../Shop/ShopNoSidebar'
import ProductV1 from '../Shop/ProductV1'
import ProductV2 from '../Shop/ProductV2'
import ProductV3 from '../Shop/ProductV3'
import ProductV4 from '../Shop/ProductV4'
import ProductV5 from '../Shop/ProductV5'
import ProductV6 from '../Shop/ProductV6'
import ProductV7 from '../Shop/ProductV7'
// import ProductV8 from '../Shop/ProductV8'

import Wishlist from '../Pages/Wishlist'
import Cart from '../Pages/Cart'
import Checkout from '../Pages/Checkout'
import Account from '../Pages/Account'
import SignUp from '../Pages/SignUp'
import SignIn from '../Pages/SignIn'
import ForgotPassword from '../Pages/ForgotPassword'
import ResetPassword from '../Pages/ResetPassword'
import PrivacyPolicy from '../Pages/PrivacyPolicy'
import ComingSoon from '../Pages/ComingSoon'
import Error404 from '../Pages/Error404'
import Typography from '../Pages/Typography'

import About from '../About/About'

import BlogList from '../Blog/BlogList'
import Bloggrid from '../Blog/Bloggrid'
import Standardpost from '../Blog/Standardpost'
import Gallerypost from '../Blog/Gallerypost'
import Videopost from '../Blog/Videopost'
import Audiopost from '../Blog/Audiopost'

import Contact from '../Contact/Contact'
import { BrowserRouter, Route, Routes } from 'react-router-dom'





export default function AllPages() {
  return (
    <>

<BrowserRouter>
      <Routes>
        
     
      {/* HOME-SECTION-COMPONENTS */}
        <Route path='/' element={<Home/>}></Route>

  


      {/* SHOP-SECTION-COMPONENTS  */}
        <Route path='/ShopWithSidebar' element={<ShopWithSidebar/>}></Route>
        <Route path='/ShopNoSidebar' element={<ShopNoSidebar/>}></Route>
        <Route path='/ProductV1' element={<ProductV1/>}></Route>
        <Route path='/ProductV2' element={<ProductV2/>}></Route>
        <Route path='/ProductV3' element={<ProductV3/>}></Route>
        <Route path='/ProductV4' element={<ProductV4/>}></Route>
        <Route path='/ProductV5' element={<ProductV5/>}></Route>
        <Route path='/ProductV6' element={<ProductV6/>}></Route>
        <Route path='/ProductV7' element={<ProductV7/>}></Route>

     


      {/* PAGES-SECTION-COMPONENTS  */}
      <Route path='/Wishlist' element={<Wishlist/>}></Route>
      <Route path='/Cart' element={<Cart/>}></Route>
      <Route path='/Checkout' element={<Checkout/>}></Route>
      <Route path='/Account' element={<Account/>}></Route>
      <Route path='/SignUp' element={<SignUp/>}></Route>
      <Route path='/SignIn' element={<SignIn/>}></Route>
      <Route path='/ForgotPassword' element={<ForgotPassword/>}></Route>
      <Route path='/ResetPassword' element={<ResetPassword/>}></Route>
      <Route path='/PrivacyPolicy' element={<PrivacyPolicy/>}></Route>
      <Route path='/ComingSoon' element={<ComingSoon/>}></Route>
      <Route path='/Error404' element={<Error404/>}></Route>
      <Route path='/Typo' element={<Typography/>}></Route>

      {/* ABOUT-SECTION-COMPONENT  */}
      {/* <About /> */}
        <Route path='/about' element={<About/>}></Route>

      {/* BLOG-SECTION-CPMPONENTS  */}
      <Route path='/BlogList' element={<BlogList/>}></Route>
      <Route path='/Bloggrid' element={<Bloggrid/>}></Route>
      <Route path='/Standardpost' element={<Standardpost/>}></Route>
      <Route path='/Gallerypost' element={<Gallerypost/>}></Route>
      <Route path='/Videopost' element={<Videopost/>}></Route>
      <Route path='/Audiopost' element={<Audiopost/>}></Route>

      {/* CONTACT-SECTION-COMPONENT  */}
      <Route path='/Contact/' element={<Contact/>}>
       
      </Route>

      </Routes>
    </BrowserRouter>
    </>
  )
}

