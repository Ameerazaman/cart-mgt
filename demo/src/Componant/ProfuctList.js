import React from 'react'

function ProductList({ products, addToCart }) {
    return (
        <div className='flex flex-col'>
            <h1 className='text-center'>Product List</h1>
            <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {products.map((product) =>
                <div key={product.id} className='border rounded-lg p-4 flex flex-col justify-between bg-white shadow-md'>
                    <div className='flex flex-col'>
                        <span className='font-semibold text-lg'>{product.name}</span>
                        <span className='text-grey-600'>{product.price}</span>
                    </div>
                    <button onClick={() => addToCart(product)} className='bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-700 transition'>
                        Add To cart
                    </button>
                </div>
            )}
            </div>
        </div>
       
    )
}

export default ProductList