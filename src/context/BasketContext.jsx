import React, { createContext, useState } from 'react'

export const BasketContext = createContext()

const BasketProvider = ({ children }) => {

    const [basketItems, setBasketItems] = useState([])

    const handleBasket = (product) => {
        const isExist = basketItems.find(item => item.id === product.id)
        if (isExist) {
            const newBasket = basketItems.filter(item => item.id !== product.id)
            setBasketItems(newBasket)
        } else {
            setBasketItems([...basketItems, { ...product }])
        }
    }

    return (
        <BasketContext.Provider value={{ basketItems, setBasketItems, handleBasket }}>
            {children}
        </BasketContext.Provider>
    )
}

export default BasketProvider