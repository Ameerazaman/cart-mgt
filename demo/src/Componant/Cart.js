import React from 'react'

function Cart({ cartItem, updatedQuantity, removeItem }) {
    console.log(cartItem, "caritem")
    return (
        <div>
            <h1 className='text-center '>Cart</h1>
            {cartItem.map((item) =>
                <div
                    key={item.id}
                    className="border rounded-lg p-4 mb-4 flex items-center justify-between bg-white shadow-md"
                >
                    <div className="flex flex-col">
                        <span className="font-semibold text-lg">{item.name}</span>
                        <span className="text-gray-600">₹{item.price}*{item.quantity}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <button className="bg-gray-300 px-2 py-1 rounded" onClick={() => updatedQuantity(item.id, item.quantity - 1)}>-</button>
                        <span className="px-2">{item.quantity}</span>
                        <button className="bg-gray-300 px-2 py-1 rounded" onClick={() => updatedQuantity(item.id, item.quantity + 1)}>+</button>
                        <button className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600 transition" onClick={() => removeItem(item.id)}>
                            remove
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Cart