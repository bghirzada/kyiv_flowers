import React, { useContext, useEffect } from 'react'
import { AppContext } from '../../context/AppContext'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
    const { isAdmin, setIsAdmin } = useContext(AppContext)
    const navigate = useNavigate()
    useEffect(() => {
        setIsAdmin(true)
        navigate('/admin/products')
        return () => {
            // setIsAdmin(false)
        }
    }, [])

    return (
        <div>

        </div>
    )
}

export default Dashboard
