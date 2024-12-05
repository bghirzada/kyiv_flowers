import React, { useContext } from 'react'
import { BasketContext } from '../context/BasketContext'

const ProductCart = ({ product }) => {

    const { basketItems, setBasketItems, handleBasket } = useContext(BasketContext)

    const inBasket = basketItems.some(item => item.id === product.id)


    return (
        <div key={product.id} className='col-span-1 h-[360px] border-b border-[#121212] relative'>
            <img src={product.avatar} alt="" className='w-full h-full object-cover' />
            <div className='flex flex-col items-center gap-1 absolute bottom-4 left-1/2 transform -translate-x-1/2'>
                <p>{product.name}</p>
                <p className='text-[#808080] text-sm'>Price {product.price}$</p>
                <button onClick={() => handleBasket(product)} className='bg-[#121212] text-white px-4 py-1 rounded-md'>{inBasket ? "Remove from cart" : "Add to Cart"}</button>
            </div>
        </div>
    )
}

export default ProductCart
