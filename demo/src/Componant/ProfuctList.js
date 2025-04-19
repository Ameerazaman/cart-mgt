import { useState } from "react";

export default function ProductList({ products, onAddToCart }) {
    const [quantities, setQuantities] = useState({});
  
    const handleQtyChange = (id, amount) => {
      setQuantities((prev) => ({ ...prev, [id]: Math.max((prev[id] || 1) + amount, 1) }));
    };
  
    return (
      <div>
        <h2 className="text-xl font-semibold mb-2">Products</h2>
        {products.map((product) => (
          <div
            key={product.id}
            className="flex items-center justify-between mb-2 border p-2 rounded"
          >
            <span>{product.name} (₹{product.price})</span>
            <div className="flex items-center gap-2">
              <button
                className="bg-gray-300 px-2"
                onClick={() => handleQtyChange(product.id, -1)}
              >
                -
              </button>
              <span>{quantities[product.id] || 1}</span>
              <button
                className="bg-gray-300 px-2"
                onClick={() => handleQtyChange(product.id, 1)}
              >
                +
              </button>
              <button
                className="bg-blue-500 text-white px-3 py-1 rounded"
                onClick={() => onAddToCart(product, quantities[product.id] || 1)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  }