import React from "react";

export default function Cart({ cartItems, updateQuantity, removeFromCart }) {
  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold mb-2">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center border p-2 mb-2 rounded"
          >
            <span>
              {item.name} (₹{item.price}) × {item.quantity}
            </span>
            <div className="flex gap-2 items-center">
              {item.price !== 0 && (
                <>
                  <button
                    className="bg-gray-300 px-2"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    className="bg-gray-300 px-2"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </button>
                </>
              )}
              {item.price !== 0 && (
                <button
                  className="bg-red-500 text-white px-2 py-1 rounded"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              )}
            </div>
          </div>
        ))
      )}
    </div>
  );
}