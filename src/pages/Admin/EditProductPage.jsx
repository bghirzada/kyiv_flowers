import axios from 'axios'
import { useFormik } from 'formik'
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import * as Yup from 'yup'
const EditProductPage = () => {

    const { id } = useParams()

    const navigate = useNavigate()
    const getProduct = async () => {
        const response = await axios.get(`https://6705597f031fd46a830fa27b.mockapi.io/api/product/${id}`)
        formik.setValues(response.data)
    }

    React.useEffect(() => {
        getProduct()
    }, [])


    const validationSchema = Yup.object({
        name: Yup.string().required("Product name is required").min(3, "Product name must be at least 3 characters"),
        price: Yup.number("Price must be a number").required("Product price is required").min(0.1, "Product price must be at least 0.1").max(1000000, "Product price must be at most 1000000").positive("Product price must be positive"),
        description: Yup.string().required("Product description is required").min(20, "Product description must be at least 20 characters")
    })

    const formik = useFormik({
        initialValues: {
            name: '',
            price: '',
            description: ''
        },
        validationSchema: validationSchema,
        onSubmit: async () => {
            const response = await axios.put(`https://6705597f031fd46a830fa27b.mockapi.io/api/product/${id}`, formik.values)
            navigate('/admin/products')
        }
    })

    console.log('formik', formik.touched);
    const { name, price, description } = formik.errors
    return (
        <div>
            <form onSubmit={formik.handleSubmit} className='flex flex-col gap-3'>
                <input className='border p-2 rounded' type="text" name='name' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name} />
                {formik.touched.name && formik.errors.name ? <p className='text-red-600'>{formik.errors.name}</p> : null}

                <input className='border p-2 rounded' type="text" name='price' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.price} />
                {formik.touched.price && formik.errors.price ? <p className='text-red-600'>{formik.errors.price}</p> : null}
                <input className='border p-2 rounded' type="text" name='description' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.description} />
                {formik.touched.description && formik.errors.description ? <p className='text-red-600'>{formik.errors.description}</p> : null}
                <button onClick={formik.handleReset} className='bg-red-600 text-white p-2 rounded'>Reset</button>
                <button disabled={name || description || price ? true : false} className={formik.errors.name || formik.errors.price || formik.errors.description ? 'bg-gray-600 text-white p-2 rounded' : 'bg-green-600 text-white p-2 rounded'}>Update</button>
            </form>
        </div>
    )
}

export default EditProductPage
