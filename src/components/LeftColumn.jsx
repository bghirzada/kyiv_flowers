import React from 'react'
import imghero from '../assets/imagehero.png'

const LeftColumn = () => {
    return (
        <div className='col-span-1 md:h-[720px] p-20 max-sm:p-5 border border-t-[0.5px] border-r-0 max-sm:border-r border-[#121212]'>
            <div className="flex pb-12 flex-col gap-6 border-b-[0.5px]  border-[#121212]">
                <p className='text-6xl max-sm:text-4xl font-semibold'>
                    Kyiv <br />LuxeBouquets®
                </p>
                <i className='text-base font-thin max-sm:text-sm '>Discover Uniquely Crafted Bouquets and Gifts for Any Occasion: Spread Joy with Our Online Flower Delivery Service</i>
            </div>
            <div className='grid grid-cols-2 border-t-[0.5px] border-[#121212] pt-12'>
                <div className='border-r-[0.5px] border-[#121212]'>
                    <img src={imghero} alt="imghero" className='max-sm:w-[155px]'/>
                </div>
                <div className='relative border-l-[0.5px] border-[#121212] px-5'>
                    <p className='text-sm font-thin absolute bottom-0 max-sm:text-[11px] max-sm:leading-3'>Experience the joy of giving with our modern floral studio. Order online and send fresh flowers, plants and gifts today.</p>
                </div>
            </div>
        </div>
    )
}

export default LeftColumn