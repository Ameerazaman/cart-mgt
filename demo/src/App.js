// import React, { useState, useEffect } from "react";
// import ProductList from "./Componant/ProfuctList";
// import Cart from "./Componant/Cart";
// import Product from "./Product";



// const PRODUCTS = [
//   { id: 1, name: "Laptop", price: 500 },
//   { id: 2, name: "Smartphone", price: 300 },
//   { id: 3, name: "Headphones", price: 100 },
//   { id: 4, name: "Smartwatch", price: 150 },
// ];

// const FREE_GIFT = { id: 99, name: "Wireless Mouse", price: 0 };
// const THRESHOLD = 1000;

// export default function App() {
//   const [cart, setCart] = useState([]);
//   const [message, setMessage] = useState("");

//   const handleAddToCart = (product, quantity) => {
//     if (quantity < 1) return;
//     setCart((prevCart) => {
//       const exists = prevCart.find((item) => item.id === product.id);
//       if (exists) {
//         return prevCart.map((item) =>
//           item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
//         );
//       } else {
//         return [...prevCart, { ...product, quantity }];
//       }
//     });
//   };

//   const updateQuantity = (id, newQuantity) => {
//     setCart((prevCart) => {
//       if (newQuantity < 1) {
//         return prevCart.filter((item) => item.id !== id && item.id !== FREE_GIFT.id);
//       }
//       return prevCart.map((item) =>
//         item.id === id ? { ...item, quantity: newQuantity } : item
//       );
//     });
//   };

//   const removeFromCart = (id) => {
//     if (id === FREE_GIFT.id) return;
//     setCart((prevCart) => prevCart.filter((item) => item.id !== id));
//   };

//   const subtotal = cart
//     .filter((item) => item.id !== FREE_GIFT.id)
//     .reduce((sum, item) => sum + item.price * item.quantity, 0);

//   useEffect(() => {
//     const hasGift = cart.some((item) => item.id === FREE_GIFT.id);
//     if (subtotal >= THRESHOLD && !hasGift) {
//       setCart((prev) => [...prev, { ...FREE_GIFT, quantity: 1 }]);
//       setMessage("🎁 Free gift added to your cart!");
//     } else if (subtotal < THRESHOLD && hasGift) {
//       setCart((prev) => prev.filter((item) => item.id !== FREE_GIFT.id));
//       setMessage("");
//     }
//   }, [subtotal]);

//   const remaining = Math.max(THRESHOLD - subtotal, 0);

//   return (
//     <div className="p-4 max-w-4xl mx-auto">
//       <h1 className="text-2xl font-bold mb-4">🛍 Shopping Cart</h1>
//       <div className="mb-4">
//         <div className="bg-gray-200 h-4 w-full rounded overflow-hidden">
//           <div
//             className="bg-green-500 h-4"
//             style={{ width: `${Math.min((subtotal / THRESHOLD) * 100, 100)}%` }}
//           ></div>

//         </div>
//         <p className="mt-1 text-sm text-gray-700">
//           {remaining === 0
//             ? "You’ve unlocked your free gift!"
//             : `Add ₹${remaining} more to get a free gift.`}
//         </p>

//       </div>
//       {message && <p className="text-green-600 font-medium">{message}</p>}
//       <>
//         <ProductList products={PRODUCTS} onAddToCart={handleAddToCart} />
//         <Cart
//           cartItems={cart}
//           updateQuantity={updateQuantity}
//           removeFromCart={removeFromCart}
//         />
//       </>

//     </div>
//   );
// }

import React, { useState } from 'react'
import Progressbar from './Progressbar'
import Product from './Product'
import Cart from './Cart'


function App() {
  const FREE_GIFT = { id: 99, name: "Wireless Mouse", price: 0 };
const THRESHOLD = 1000;

  let [cartItem, setCartItem] = useState([])
  let complete = Math.floor((500 / 1000) * 100)

  const removeFromCart = ((id) => {
    setCartItem((prevCart) => prevCart.filter((item) => item.id !== id))

  })

  const updateCart = (product) => {
    const quantity=1
    setCartItem((prevCart) => {
      let exist = prevCart.find((item) => item.id === product.id)
      if (exist) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      else {
        return [...prevCart, { ...product, quantity }]
      }
    })

  }
  const updateQtyFromCart = ((id, quantity) => {
    console.log("update from cart")
    setCartItem((prevCart) => {
      let exist = prevCart.find((item) => item.id === id)
      console.log(exist,"exist")
      if (exist) {
        return prevCart.map((item) =>
          item.id === id ? { ...item, quantity:quantity } : item
        );
      }
    })
  })

  const total=cartItem.map((item)=>item.price*item.quantity).reduce((acc,elem)=>acc+=elem,0)
  const progressbar=Math.floor((total/THRESHOLD)*100)
  return (
    <>
      <div>
        <h1>progress</h1>
        <Progressbar completed={progressbar} />
      </div>
      <div className='border-none p-4  m-20  justify-content-center'>
        <Product addToCart={updateCart} />
      </div>
      {cartItem.length > 0 &&
        <Cart cartItem={cartItem} updatedQuantity={updateQtyFromCart} removeItem={removeFromCart} />}
    </>

  )
}

export default App