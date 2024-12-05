import React, { useContext, useEffect } from 'react'
import { AppContext } from '../../context/AppContext'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
    const { setIsAdmin } = useContext(AppContext)
    const navigate = useNavigate()
    useEffect(() => {
        setIsAdmin(true)
        navigate('/admin/products')
    }, [])

    return (
        <div>

        </div>
    )
}

export default Dashboard
