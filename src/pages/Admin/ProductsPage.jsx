import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductsPage = () => {
    const [products, setProducts] = React.useState([])

    const navigate = useNavigate()
    const fetchProducts = async () => {
        const response = await axios.get('https://6705597f031fd46a830fa27b.mockapi.io/api/product')
        setProducts(response.data)
    }
    React.useEffect(() => {
        fetchProducts()
    }, [])

    const handleDelete = async (id) => {
        const response = await axios.delete(`https://6705597f031fd46a830fa27b.mockapi.io/api/product/${id}`)

        const filteredProducts = products.filter(product => product.id !== id)
        setProducts(filteredProducts)
        // fetchProducts()
    }

    return (
        <div>
            {
                products.length > 0 ? products.map((product) => {
                    return (
                        <div key={product.id} className=' flex justify-between items-center px-12 border border-t-[0.5px] border-r-[0.5px] border-[#121212]'>
                            <div>
                                <p>{product.name}</p>
                                <p>{product.price}</p>
                                <p>{product.description}</p>
                            </div>
                            <div className='flex gap-3'>
                                <button onClick={() => {
                                    navigate(`/admin/editproduct/${product.id}`)
                                }} className='bg-green-600 text-white p-2 rounded'>Edit</button>
                                <button onClick={() => handleDelete(product.id)} className='bg-red-600 text-white p-2 rounded'>Delete</button>
                            </div>
                        </div>
                    )
                }) : <p>Loading...</p>
            }

        </div>
    )
}

export default ProductsPage