import React, { useEffect, useState } from 'react'
import ArrowRightIcon from '../components/svgs/ArrowRightIcon'
import ArrowLeftIcon from '../components/svgs/ArrowLeftIcon'
// import aromaCandels from '../assets/cardItems/aromaCandels.png'
// import driedFlowers from '../assets/cardItems/driedFlowers.png'
// import fresheners from '../assets/cardItems/fresheners.png'
// import freshFlowers from '../assets/cardItems/freshFlowers.png'
// import livePlants from '../assets/cardItems/livePlants.png'
import axios from 'axios'
import { useNavigate, useNavigation } from 'react-router-dom'

const RightColumn = () => {


    const navigate = useNavigate()
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetchCategories()
    }, [])


    const navigateProduct = (id) => {
        // navigation.navigate(`/product/${id}`)
        navigate(`/productlist/${id}`)

    }

    const fetchCategories = async () => {
        try {
            const response = await axios.get('https://6705597f031fd46a830fa27b.mockapi.io/api/Categories')
            setCategories(response.data)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div className='col-span-1 grid grid-cols-2 border-t-[0.5px] border-r border-[#121212]'>

            {/* <div className='col-span-1 border border-r-[0.5px] border-b-0 border-[#121212]'> */}
            {
                categories.length > 0 ? categories.map((cat, index) => {
                    return (
                        index % 2 === 0 ?
                            <>

                                <div onClick={() => navigateProduct(cat.id)} className='col-span-1  lg:h-[360px] flex flex-col justify-center items-center relative border-b border-l border-[#121212]'>
                                    <p className='text-4xl max-md:text-2xl font-medium'>{cat.name}</p>
                                    <div className='flex flex-row items-center gap-2 absolute bottom-4'><p>Shop now</p><ArrowRightIcon /></div>
                                </div>
                                <div onClick={() => navigateProduct(cat.id)} className='col-span-1 lg:h-[360px] border-b border-l border-[#121212]'>
                                    <img src={cat.image} alt={cat.name} className='w-full h-full object-cover' />
                                </div>
                            </> : <>
                                <div onClick={() => navigateProduct(cat.id)} className='col-span-1 lg:h-[360px] border-b border-l border-[#121212]'>
                                    <img src={cat.image} alt={cat.name} className='w-full h-full object-cover' />
                                </div>
                                <div onClick={() => navigateProduct(cat.id)} className='col-span-1 lg:h-[360px] flex justify-center items-center relative border-b border-l border-[#121212]'>
                                    <p className='text-4xl max-md:text-2xl font-medium'>{cat.name}</p>
                                    <div className='flex flex-row items-center gap-2 absolute bottom-4'><p>Shop now</p><ArrowLeftIcon /></div>
                                </div>

                            </>
                    )
                }) : <p>Loading...</p>
            }


            {/* <div className='col-span-1 h-[360px] flex flex-col justify-center items-center relative border-b border-[#121212]'>
                <p className='text-4xl max-md:text-2xl font-medium'>Live Plants</p>
                <div className='flex flex-row items-center gap-2 absolute bottom-4'><p>Shop now</p><ArrowRightIcon /></div>
            </div>
            <div className='col-span-1 h-[360px] border-b border-[#121212]'>
                <img src={aromaCandels} alt="" className='w-full h-full object-cover' />
            </div>
            <div className='col-span-1 h-[360px] flex flex-col justify-center items-center relative border-b border-[#121212]'>
                <p className='text-4xl max-md:text-2xl font-medium'>Fresheners</p>
                <div className='flex flex-row items-center gap-2 absolute bottom-4'><p>Shop now</p><ArrowRightIcon /></div>
            </div>
            </div>
<div className='col-span-1 border border-l-[0.5px] border-[#121212]'> 
            <div className='col-span-1 h-[360px] border-b border-[#121212]'>
                <img src={freshFlowers} alt="" className='w-full h-full object-cover' />
            </div>
            <div className='col-span-1 h-[360px] flex flex-col justify-center items-center relative border-b border-[#121212]'>
                <p className='text-4xl max-md:text-2xl font-medium'>Dried Plants</p>
                <div className='flex flex-row items-center gap-2 absolute bottom-4'><p>Shop now</p><ArrowLeftIcon /></div>
            </div>
            <div className='col-span-1 h-[360px] border-b border-[#121212]'>
                <img src={livePlants} alt="" className='w-full h-full object-cover' />
            </div>
            <div className='col-span-1 h-[360px] flex flex-col justify-center items-center relative border-b border-[#121212]'>
                <p className='text-4xl max-md:text-2xl font-medium'>Aroma Candels</p>
                <div className='flex flex-row items-center gap-2 absolute bottom-4'><p>Shop now</p><ArrowRightIcon /></div>
            </div>
            <div className='col-span-1 h-[360px] border-b border-[#121212]'>
                <img src={fresheners} alt="" className='w-full h-full object-cover' />
            </div> */}

            {/* </div> */}




        </div>
    )
}

export default RightColumn