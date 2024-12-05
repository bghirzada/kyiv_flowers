import React from 'react'
import LuxeBouquets from '../assets/LuxeBouquets.png'
import ContactIcon from './svgs/ContactIcon'
import MapPinIcon from './svgs/MapPinIcon'
import Instagram from './svgs/social/InstagramIcon'
import Pinterest from './svgs/social/PinterestIcon'
import Facebook from './svgs/social/FacebookIcon'
import Twitter from './svgs/social/TwitterIcon'
import Telegram from './svgs/social/TelegramIcon'

const ContactDetails = () => {
    return (
        <div id="contact-section" className='grid grid-cols-2 max-lg:grid-cols-1 '>
            <div className='order-1 max-lg:order-2 border-r border-[#121212]'>
                <div className='flex flex-col gap-6 md:p-20 px-4 py-10 border-l border-b border-[#121212] '>
                    <p className='text-5xl max-lg:text-4xl'>To Contact Us</p>
                    <p className='text-lg mt-4'>We will call you back</p>
                    <div className='grid grid-cols-2 gap-6 max-md:grid-cols-1 '>
                        <input type="tell" placeholder='+380 XX XXX XX XX' className='border py-4 px-4' />
                        <button className='py-4 bg-[#121212] uppercase text-white'>book a call</button>
                    </div>
                </div>
                <div className='grid grid-cols-2 max-md:grid-cols-1 '>
                    <div>
                        <div className='text-4xl max-md:-2xl text-center p-4 border-l border-b border-[#121212]'><p>Phone</p></div>
                        <div className='flex flex-col gap-6 items-center justify-center max-md:block max-md:pl-4 max-md:py-10 border-l border-b border-[#121212] h-[calc(360px-73px)] max-md:h-auto'>
                            <div className='flex gap-2 font-semibold'><ContactIcon /><p>+380980099777</p></div>
                            <div className='flex gap-2 font-semibold'><ContactIcon /><p>+380980099777</p></div>
                        </div>
                    </div>
                    <div>
                        <div className='text-4xl max-md:-2xl text-center p-4 border-l border-b border-[#121212]'><p>Address</p></div>
                        <div className='flex flex-col gap-5 items-center justify-center max-md:block max-md:pl-4 max-md:py-10 border-l border-b border-[#121212] h-[calc(360px-73px)] max-md:h-auto'>
                            <p className='uppercase text-sm '>opening hours: 8 to 11 p.m.</p>
                            <div className='flex gap-2 font-semibold'><MapPinIcon /><p>15/4 Khreshchatyk Street, Kyiv </p></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='order-2 max-lg:order-1 border-r border-[#121212] h-[720px]'>
                <img src={LuxeBouquets} alt="" className='w-full h-[calc(720px-81px)] max-sm:h-[calc(720px-160px)] ' />
                <div className='grid grid-cols-2 max-sm:grid-cols-1'>
                    <div className='text-4xl max-md:-2xl text-center p-4 border border-[#121212] h-20 max-sm:text-start pl-6'><p>Follow us</p></div>
                    <div className='flex justify-between pt-6 px-6 border-r border-b border-[#121212] h-20 max-sm:border-l max-sm:justify-start max-sm:gap-4 '>
                        <div className='w-8 h-8 flex justify-center items-center'><Instagram /></div>
                        <div className='w-8 h-8 flex justify-center items-center'><Pinterest /></div>
                        <div className='w-8 h-8 flex justify-center items-center'><Facebook /></div>
                        <div className='w-8 h-8 flex justify-center items-center'><Twitter /></div>
                        <div className='w-8 h-8 flex justify-center items-center'><Telegram /></div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ContactDetails