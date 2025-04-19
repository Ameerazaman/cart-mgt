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
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {PRODUCTS.map((item) => (
                    <div
                        key={item.id}
                        className="border rounded-lg p-4 flex flex-col justify-between bg-white shadow-md"
                    >
                        <div className="flex flex-col">
                            <span className="font-semibold text-lg">{item.name}</span>
                            <span className="text-gray-600">₹{item.price}</span>
                        </div>
                        <div className="mt-4">
                            <button
                                className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600 transition"
                                onClick={() => addToCart(item)}
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Product