import axios from 'axios'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import freshflowers from '../assets/freshflowers/leftcolum.png'
import Footer from '../components/Footer'
import ProductCart from '../components/ProductCart'

const ProductListPage = () => {
    const { id } = useParams()

    const [products, setProducts] = React.useState([])
    
    const fetchProducts = async () => {
        const response = await axios.get('https://6705597f031fd46a830fa27b.mockapi.io/api/product')

        // const filteredProducts = response.data.filter(pr => pr.categoryId === id)

        setProducts(response.data)
    }
    useEffect(() => {
        fetchProducts()
    }, [])
    return (
        <div>
            <div className='grid grid-cols-2 max-lg:grid-cols-1 font-custom'>
                <div className='md:h-[720px] border border-t-[0.5px] border-r-[0.5px] border-[#121212] relative'>
                    <img src={freshflowers} alt="" className='w-full h-full' />
                </div>
                <div className='grid grid-cols-2 max-md:grid-cols-1 border-t-[0.5px] border-r border-[#121212]'>
                    {
                        products.length > 0 ? products.map((product) => {
                            return (
                                <ProductCart product={product} />
                            )
                        }) : <p>Loading...</p>

                    }

                </div>

            </div>
            <Footer />

        </div>
    )
}

export default ProductListPage
