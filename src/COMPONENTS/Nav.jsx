import React, { useContext } from 'react'
import { ProductContext } from './UTILS/Context';
import { set } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Nav = () => {
  const [products] = useContext(ProductContext);

  let distinct_products = products &&  products.map((item, index) => {
    return item.category;
  })

  distinct_products = [...new Set(distinct_products)];
  return (
    <div className='mr-28'>
        <nav className='h-screen w-[20vw] bg-zinc-200 flex flex-col items-center'>
            <Link className='mt-7 font-semibold text-lg' to="/">Home</Link>
            <Link to='/create' className='my-5 px-2 py-3 bg-blue-300 rounded-lg'>Add New Product</Link>
            <h1 className='text-xl font-semibold w-[80%] mb-5'>Category Filter</h1>
            <div className='w-[80%] flex flex-col junstify-center gap-3'>
              {distinct_products.map((item, index) =>{
                return <Link to={`/?category=${item}`} key={index}> <span className='inline-block h-2 w-2 bg-red-300 rounded-full'></span> {item}</Link>
              })}
            </div>
        </nav>
    </div>
  )
}

export default Nav
