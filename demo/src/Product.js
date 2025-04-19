import React, { useState } from 'react'

function Product({ addToCart }) {
    const PRODUCTS = [
        { id: 1, name: "Laptop", price: 500 },
        { id: 2, name: "Smartphone", price: 300 },
        { id: 3, name: "Headphones", price: 100 },
        { id: 4, name: "Smartwatch", price: 150 },
    ];
    let [quantity, setQty] = useState({})
    const decrementQty = ((id) => {
        setQty((prev) => ({
            ...prev,
            [id]: (prev[id] || 0) - 1
        }))
    })
    const incrementQty = ((id) => {
        setQty((prev) => ({
            ...prev,
            [id]: (prev[id] || 0) + 1
        }))
    })
    return (
        <div>
            <h2>product List</h2>
            {PRODUCTS.map((item) => (
                <div
                    key={item.id}
                    className="border rounded-lg p-4 mb-4 flex items-center justify-between bg-white 
                    shadow-md">
                    <div className="flex flex-col">
                        <span className="font-semibold text-lg">{item.name}</span>
                        <span className="text-gray-600">₹{item.price}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <button className="bg-gray-300 px-2 py-1 rounded" onClick={() => decrementQty(item.id)}>-</button>
                        <span className="px-2">{quantity[item.id]||1}</span>
                        <button className="bg-gray-300 px-2 py-1 rounded" onClick={() => incrementQty(item.id)}>+</button>
                        <button className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600 transition" onClick={()=>addToCart(item, quantity[item.id] || 1)}>
                            Add to Cart
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Product