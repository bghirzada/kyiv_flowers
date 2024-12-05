import React from 'react'

const About = () => {
    return (
        <div className='grid grid-cols-2 max-lg:grid-cols-1'>
            <div className='border border-r-[0.5px] border-[#121212] md:p-20 px-4 py-10 text-5xl'>
                <p>About us</p>
            </div>
            <div className='flex flex-col gap-16 md:p-20 px-4 py-10 border border-l-[0.5px] border-t-[0.5px] border-[#121212]'>
                <div className='flex flex-col gap-4'>
                    <p className='uppercase '>Our Story</p>
                    <p className='text-4xl max-md:-2xl'>Kyiv LuxeBouquets</p>
                    <p>
                        We are a modern local floral studio, which specializes in the
                        design and delivery of unique bouquets. We have the best florists
                        who carefully select each look, our studio cooperates directly with
                        farms for growing different flowers, so we always have fresh flowers,
                        which are collected by our florists in exquisite bouquets. We have a
                        collection of fresh bouquets, collections of dried bouquets, house
                        plants, as well as fragrant candles from luxury brands to create the
                        perfect atmosphere. Make someone's day amazing by sending flowers,
                        plants and gifts the same or next day. Ordering flowers online has
                        never been easier.
                    </p>
                </div>
                <div>
                    <button className='uppercase border border-[#121212] px-10 py-6 max-md:w-full'>learn more</button>
                </div>
            </div>
        </div>
    )
}

export default About