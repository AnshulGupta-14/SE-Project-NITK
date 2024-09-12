import React, { useContext } from 'react'
import { ProductContext } from './UTILS/Context';
import { Link, Outlet, useNavigate, useParams } from 'react-router-dom';

const Details = () => {
  const [products] = useContext(ProductContext);
  const {id} = useParams();
  const product = products.filter((item,index)=>{
    if(item.id == id)  return item;
  });

    
  return (
    <div className='h-[100vh] w-[70vw] flex items-center justify-between m-auto p-[5%]'>
        <div className='h-[50%] w-[40%]'>
            <img className='h-full w-full object-cover' src={product[0].image} alt="" />
        </div>

        <div className='h-[50%] w-[50%]'>
            <h1 className='leading-5 text-xl'>{product[0].title}</h1>
            <h1 className='mt-2 opacity-60'>{product[0].category}</h1>
            <h1 className='font-semibold mt-1'>{product[0].price}</h1>
            <h1 className='mt-10'>{product[0].description}</h1>
            <div className='mt-10 flex items-center gap-10'>
              <Link to={`/details/edit/${id}`} className='rounded-md text-green-600 px-5 py-1 bg-zinc-200'>Edit</Link>
              <Link to={`/details/${id}/delete`} className='rounded-md text-red-600 px-5 py-1 bg-zinc-200'>Delete</Link>
            </div>
        </div>
        <Outlet></Outlet>
    </div>
  )
}

export default Details