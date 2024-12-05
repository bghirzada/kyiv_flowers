import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import ProductListPage from '../pages/ProductListPage'
import ProductPage from '../pages/ProductPage'
import BasketPage from '../pages/BasketPage'
import Dashboard from '../pages/Admin/Dashboard'
import Header from '../components/Header'
import ProductsPage from '../pages/Admin/ProductsPage'
import EditProductPage from '../pages/Admin/EditProductPage'
const NavigationContainer = () => {

    const { isAdmin } = useContext(AppContext)

    return (
        <Router>
            {
                !isAdmin && <Header />
            }
            <Routes >
                <Route path="/" element={<HomePage />} />
                <Route path="productlist/:id" element={<ProductListPage />} />
                <Route path='product/:id' element={<ProductPage />} />
                <Route path="basket" element={<BasketPage />} />
                <Route path="admin" element={<Dashboard />} />
                <Route path="admin/products" element={<ProductsPage />} />
                <Route path="admin/editproduct/:id" element={<EditProductPage />} />
            </Routes>
        </Router>
    )
}

export default NavigationContainer
