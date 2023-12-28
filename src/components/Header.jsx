import React from 'react'
import { useState } from 'react';
import {FaRegWindowClose, FaHamburger, FaShopware, FaShoppingCart} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import { useCart } from "../context/CartContext";

function Header({storeData}) {
    const [showMenu, setShowMenu] = useState(false);
    const { quantity} = useCart();

    return (
        <div>
            <div className='header_div'>
                <div className='logo_div' >
                  <FaShopware  className='logo_text' />
                  <p><a href='/' className='text_logo'>Shop Service</a></p>
                </div>
                {/* <img className='icon' src="profile.png"/> */}
                <FaHamburger onClick={()=>setShowMenu(true)} className='menu_icon'/>
    
                <div className='shoping_cart_close_div'>
                    {/* <FaShoppingCart className='fa-solid  shoping_cart_close_div'/> */}
                    <FaShoppingCart className='fa-regular shoping_cart_open '/>
                    <Link to="/MyOrders"><div style={{position:"absolute",top:"5px",right:"-12px",height:'30px',width:'40px'}}></div></Link>
                    <div className='order_quantity_div'>{quantity}</div>
                </div>
    
            </div>
       
              {
                showMenu &&
                <div className='fade_background_div'></div>  
              }
              <div   
                style={{
                  width: showMenu && "20%" , 
                  left: showMenu && "80%",
                }} 
                className='menu_div'
              >
                  <h2><Link to="/">Home</Link></h2>
                  <h2><a href="#Electronics">Electronic</a></h2>
                  <h2><a href="#Men's Clothing">Men's Clothing</a></h2>
                  <h2><a href="#Woman's Clothing">Womans's Clothing</a></h2>
                  <h2><a href="#jewelery">Jewelery</a></h2>
                  <h2><a href="#SaleOffers">Sale offers</a></h2>
                  <h2><a href="#footer_contact">Contact</a></h2>
                  <p className='exit_icon' onClick={()=>setShowMenu(false)}><FaRegWindowClose/></p>
              </div>
           
        </div>
      )
}
export default Header