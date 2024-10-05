import React from 'react'
import { NavLink } from 'react-router-dom'

const ProductDetails = () => {
  return (
    <div className='w-full flex ites-center mt-[6%] px-5'>
        <div className='w-[65%] p-5'>
            <div className='w-full bg-white h-[85vh] flex items-center justify-center rounded-md'>Images</div>
            <div className='w-full bg-white p-5 mt-5 flex items-center justify-center rounded-md'>Details and Descreption</div>
        </div>
        <div className='w-[35%] p-5 flex flex-col gap-5'>
            <div className='w-full bg-white px-5 py-3 rounded-md'>
                <h1 className='text-xl font-bold'>Product Price</h1>
                <h1>Product Title</h1>
            </div>
            <div className='w-full bg-white px-5 py-3 rounded-md'>
                <NavLink to={'/userprofile'}>
                    <div className='w-full flex items-center gap-7'>
                        <div className='h-[7vh] w-[7vw] bg-red-100'></div>
                        <h1 className='text-xl font-bold'>Seller Name</h1>
                    </div>
                </NavLink>
                <div className='w-full py-3 border-2 mt-5 border-black font-bold text-center'>Contact Details </div>
            </div>
        </div>
    </div>
  )
}

export default ProductDetails