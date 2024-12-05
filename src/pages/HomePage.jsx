import React from 'react'
import RightColumn from '../components/RightColumn'
import LeftColumn from '../components/LeftColumn'
import About from '../components/About'
import BenefitsSection from '../components/BenefitsSection'
import ContactDetails from '../components/ContactDetails'
import Footer from '../components/Footer'
import { useNavigate, useNavigation } from 'react-router-dom'
import Service from '../components/Service'
const HomePage = () => {

    return (
        <div>
            <div className='grid grid-cols-2 max-lg:grid-cols-1 font-custom'>
                <LeftColumn />
                <RightColumn />
            </div>
            <About />
            <BenefitsSection />
            <ContactDetails />
            <Service />
            <Footer />
        </div>
    )
}

export default HomePage
