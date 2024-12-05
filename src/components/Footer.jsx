import React from 'react'
import Instagram from './svgs/social/InstagramIcon'
import Pinterest from './svgs/social/PinterestIcon'
import Facebook from './svgs/social/FacebookIcon'
import Twitter from './svgs/social/TwitterIcon'
import Telegram from './svgs/social/TelegramIcon'

const Footer = () => {
    return (
        <div className='grid grid-cols-4 max-lg:grid-cols-2 max-md:grid-cols-1 h-[360px]'>
            <div className='flex flex-col gap-8 p-10  border border-r-0 border-[#121212] max-md:border-r'>
                <p>
                    Remember to offer beautiful flowers from Kyiv LuxeBouquets Valentines Day,
                    Mothers Day, Christmas... Reminds you 7 days before. No spam or sharing your address
                </p>
                <div className='grid gap-6 '>
                    <input type="tell" placeholder='Your Email' className='border py-4 px-4' />
                    <button className='py-4 bg-[#121212] uppercase text-white'>Remind</button>
                </div>
            </div>
            <div className='flex flex-col gap-6 p-10 border border-r-0 border-[#121212] max-lg:border-r'>
                <p className='text-[#808080] text-xl'>Contact Us</p>
                <div>
                    <p className='text-[#808080] text-sm'>Address</p>
                    <p>15/4 Khreshchatyk Street, Kyiv </p>
                </div>
                <div>
                    <p className='text-[#808080] text-sm'>Phone</p>
                    <p>15/4 Khreshchatyk Street, Kyiv </p>
                </div>
                <div>
                    <p className='text-[#808080] text-sm'>General Enquiry</p>
                    <p>Kiev.Florist.Studio@gmail.com</p>
                </div>
                <div>
                    <p className='text-[#808080] text-xl'>Follow Us</p>
                    <div className='flex justify-between mt-4'>
                        <div className='w-8 h-8'><Instagram /></div>
                        <div className='w-8 h-8'><Pinterest /></div>
                        <div className='w-8 h-8'><Facebook/></div>
                        <div className='w-8 h-8'><Twitter/></div>
                        <div className='w-8 h-8'><Telegram/></div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-6 p-10 border border-r-0 border-[#121212] max-md:border-r'>
                <p className='text-[#808080] text-xl'>Shop</p>
                <div>
                    <p>All Products</p>
                    <p>Fresh Flowers</p>
                    <p>Dried Flowers</p>
                    <p>Live Plants</p>
                    <p>Designer Vases</p>
                    <p>Aroma Candles</p>
                    <p>Freshener Diffuser</p>
                </div>
                <p className='text-[#808080] text-xl'>Service</p>
                <div>
                    <p>Flower Subcription</p>
                    <p>Wedding & Event Decor</p>
                </div>
            </div>
            <div className='flex flex-col gap-6 p-10 border border-[#121212]'>
                <p className='text-[#808080] text-xl'>About Us</p>
                <div>
                    <p>Our story</p>
                    <p>BLog</p>
                </div>
                <div>
                    <p>Shipping & returns</p>
                    <p>Terms & conditions</p>
                    <p>Privacy policy</p>
                </div>
            </div>
        </div>
    )
}

export default Footer