import React from 'react'

const BenefitsSection = () => {
    return (
        <div className='grid grid-cols-2 max-lg:grid-cols-1'>
            <div className='border border-t-0 border-[#121212] md:p-20 px-4 py-10 text-5xl'>
                <p>Why choose us ?</p>
            </div>
            <div className='flex flex-col '>
                <div className='flex flex-col gap-4 md:p-20 px-4 py-10 border-r border-b border-[#121212]'>
                    <p className='text-4xl max-md:-2xl'>Stylish bouquets by florists</p>
                    <p>
                        At our floral studio, our professional florists craft the most elegant and stylish bouquets
                        using only the freshest and highest quality materials available. We stay up-to-date with
                        the latest floral design trends and offer unique arrangements that are sure to impress. Let
                        us brighten up your day with our stunning bouquets and same-day delivery service.
                    </p>
                </div>
                <div className='flex flex-col gap-4 md:p-20 px-4 py-10 border-r border-b border-[#121212]'>
                    <p className='text-4xl max-md:-2xl'>On-time delivery</p>
                    <p>
                        Never miss a moment with our on-time flower delivery service. Our couriers will deliver your
                        bouquet personally, without boxes, to ensure it arrives in perfect condition. Trust us to
                        deliver your thoughtful gift reliably.
                    </p>
                </div>
                <div className='flex flex-col gap-4 md:p-20 px-4 py-10 border-r border-b border-[#121212]'>
                    <p className='text-4xl max-md:-2xl'>Safe payment</p>
                    <p>
                        You can feel secure when placing an order with us, as we use industry-standard security
                        measures to protect your payment information. Your transaction will be safe and hassle-free,
                        so you can shop with confidence.
                    </p>
                </div>
                <div className='flex flex-col gap-4 md:p-20 px-4 py-10 border-r border-b border-[#121212]'>
                    <p className='text-4xl max-md:-2xl'>Subscription by your needs</p>
                    <p>
                        With our subscription service tailored to your specific needs, you can enjoy the convenience
                        of having beautiful bouquets delivered straight to your door at regular intervals. Our
                        flexible service is perfect for busy individuals or those who want to ensure they always have
                        fresh flowers on hand. You'll save time and money with this hassle-free solution to your
                        floral needs.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default BenefitsSection