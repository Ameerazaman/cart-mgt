import React, { useEffect, useState } from 'react'
import ProductList from './Componant/ProfuctList';
import Progressbar from './Componant/Progressbar';
import Cart from './Componant/Cart';





const FREE_GIFT = { id: 99, name: "Wireless Mouse", price: 0 };
const THRESHOLD = 1000;

function App() {
  const [cart, setCart] = useState([])
  const[message,setMessage]=useState('')


  let total = cart.map((item) => item.price * item.quantity).reduce((acc, elem) => acc += elem, 0)
  console.log(total, "total")
  const rawProgress = Math.floor((total / THRESHOLD) * 100);
  const progress = Math.min(rawProgress, 100);

  
  useEffect(()=>{
    const hasGift=cart.some((item)=>item.id===FREE_GIFT.id)
    if(total>=THRESHOLD &&!hasGift){
      setCart((prev)=>[...prev,{...FREE_GIFT,quantity:1}])
      setMessage("Free Gift Added to your Cart")
    }
    else if(total<THRESHOLD && hasGift){
    setCart((prev)=>prev.filter((item)=>item.id!==FREE_GIFT.id))
     setMessage("")
    }
  },[total,cart])
  const PRODUCTS = [
    { id: 1, name: "Laptop", price: 500 },
    { id: 2, name: "Smartphone", price: 300 },
    { id: 3, name: "Headphones", price: 100 },
    { id: 4, name: "Smartwatch", price: 150 },
  ];

  const updateCart = (product) => {
    const quantity = 1
    setCart((prevCart) => {
      console.log(prevCart, "prevCart")
      let exist = prevCart.find((item) => item.id === product.id)
      if (exist) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item)
      }
      else {
        return [...prevCart, { ...product, quantity }]
      }
    })
  }


  const updateQty = ((id, qty) => {
    setCart((prevCart) => {
      let exist = prevCart.find((item) => item.id === id)
      if (exist) {
        return prevCart.map((item) =>
          item.id === id ? { ...item, quantity: qty } : item)
      }
    })
  })

  const removeItem = ((id) => {
    setCart((prev) => prev.filter((item) => item.id !== id))
  })




  return (
    <div>

      <div className='m-20'>

        <ProductList products={PRODUCTS} addToCart={updateCart} />

    
      {cart.length > 0 && 
      <>
      <h1>subtotal{total} </h1>
      <Progressbar completed={progress} />
      
      </>
      }
      {message && <p className='text-green-600 font-medium'>{message}</p>}
      {cart.length > 0 ?
        <Cart cartItem={cart} updatedQuantity={updateQty} removeItem={removeItem}></Cart>

        : <div className='border rounded-lg shadow-lg mt-20 text-center'>Cart is Empty</div>}
    </div>
    </div>
  )
}

export default App
