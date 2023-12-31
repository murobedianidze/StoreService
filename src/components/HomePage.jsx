import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaRegWindowClose } from 'react-icons/fa';
import Header from './Header';
import { useCart } from '../context/CartContext';
import Footer from './Footer';
import { useSearchParams } from 'react-router-dom';

function HomePage() {
const [storeData,setStoreData]=useState()
const { cartItems, addToCart } = useCart();
const [ detailedData, setDetaildData ] = useState();
const [detailPopup,setDateilPopup]=useState(false)

  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
      .then(res=>res.json())
      .then(data=>setStoreData(data))
  },[])

const addToCartHandler=(item)=>{
    addToCart(item);
    toast.success('Added to cart!',{
      position: 'bottom-left',
      color: 'blue'
    });
  }

  const detailsHandler=(value)=>{
    setDetaildData(value)
    setDateilPopup(true)
  }
  return (
    <div>
     <ToastContainer />

     <Header storeData={storeData}/>

      <h1 id="Electronics" className='common_header_text'>Electronics</h1>
      <div className='techno__main_div'>
      {
        storeData?
        storeData.map((value, key) => (
            value.category==="electronics" &&
            <div key={key} className='each_item_div'>
              {/* <h1>{value.category}</h1> */}
              <img 
                style={{ width: '100px', height: '90px',marginTop:"20px" }}
                src={value.image} alt={value.title} 
              />
              <p>{value.title}</p>
              <p style={{color:"black"}}>${value.price}</p>
              <p>⭐{value.rating.rate}</p>
              <p onClick={()=>detailsHandler(value)} className='item_detail'>Details</p>
              <button onClick={()=>addToCartHandler(value,key)} className='item_button'>Add To Cart</button>
            </div>
        ))
        :
        <h2 style={{color:"gray"}}>Data Not Found</h2>
      }
      </div>

      <hr className='item_devider_hr'/>

      <h1 id="Men's Clothing" className='common_header_text'>Men's Clothing</h1>
      <div className='techno__main_div'>
        {
        storeData?
        storeData.map((value, key) => (
            value.category==="men's clothing" &&
            <div key={key} className='each_item_div'>
              {/* <h1>{value.category}</h1> */}
              <img 
                style={{ width: '100px', height: '100px',marginTop:"20px" }}
                src={value.image} alt={value.title} 
              />
              <p>{value.title}</p>
              <p style={{color:"black"}}>${value.price}</p>
              <p>⭐{value.rating.rate}</p>
              <p onClick={()=>detailsHandler(value)} className='item_detail'>Details</p>
              <button onClick={()=>addToCartHandler(value,key)} className='item_button'>Add To Cart</button>
            </div>
        ))
        :
        <h2 style={{color:"gray"}}>Data Not Found</h2>
      }
      </div>

      <hr className='item_devider_hr'/>


      <h1 id="Woman's Clothing" className='common_header_text'>Woman's Clothing</h1>
      <div className='techno__main_div'>
      {
        storeData?
        storeData.map((value, key) => (
            value.category==="women's clothing" &&
            <div key={key} className='each_item_div'>
              {/* <h1>{value.category}</h1> */}
              <img 
                style={{ width: '100px', height: '100px',marginTop:"20px" }}
                src={value.image} alt={value.title} 
              />
              <p>{value.title}</p>
              <p style={{color:"black"}}>${value.price}</p>
              <p>⭐{value.rating.rate}</p>
              <p onClick={()=>detailsHandler(value)} className='item_detail'>Details</p>
              <button onClick={()=>addToCartHandler(value,key)} className='item_button'>Add To Cart</button>
            </div>
        ))
        :
        <h2 style={{color:"gray"}}>Data Not Found</h2>
      }
      </div>

      <hr className='item_devider_hr'/>

      <h1 id='jewelery' className='common_header_text'>Jewelery</h1>
      <div className='techno__main_div'>
      {
        storeData?
        storeData.map((value, key) => (
            value.category==="jewelery" &&
            <div key={key} className='each_item_div'>
              {/* <h1>{value.category}</h1> */}
              <img 
                style={{ width: '90px', height: '90px',marginTop:"20px" }}
                src={value.image} alt={value.title} 
              />
              <p>{value.title}</p>
              <p style={{color:"black"}}>${value.price}</p>
              <p>⭐{value.rating.rate}</p>
              <p onClick={()=>detailsHandler(value)} className='item_detail'>Details</p>
              <button onClick={()=>addToCartHandler(value,key)} className='item_button'>Add To Cart</button>
            </div>
        ))
        :
        <h2 style={{color:"gray"}}>Data Not Found</h2>
      }
      </div>

      {
        detailPopup===true &&
        <div >
          <div className='fade_background_div'></div>
          <div className='popup_div'>
            <p 
              className='exit_icon'
              onClick={()=>setDateilPopup(false)}
            >
              <FaRegWindowClose/>
            </p>
            <div className='orders_each_item_div'>
              <img
                style={{ padding: '50px', width: detailedData.category=="jewelery"? "100px" : '100px', height: detailedData.category=="jewelery"? "100px" : '100px', marginTop: "20px" }}
                src={detailedData.image}
              />
              <div className='orders_text_side_div'>
                <h2>{detailedData.title}</h2>
                {/* <h4>Quantity: {itemQuantity} <span onClick={()=>setItemQuantity(itemQuantity+1)}>+</span></h4> */}
                <h4 style={{ color: 'black' }}>Price: ${detailedData.price}</h4>
                <h4>Review: ⭐{detailedData.rating.rate}</h4>
              </div>
            </div>

            <h3>About this product</h3>
            <p style={{ textAlign: 'left', marginLeft: '20px', marginRight: '20px' }}>{detailedData.description}</p>
          </div>
        </div>
      }

      <Footer/>
    </div>
  )
}

export default HomePage


