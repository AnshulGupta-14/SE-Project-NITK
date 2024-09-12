import React, { useContext, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { ProductContext } from './UTILS/Context';
import Home from './Home';

const Delete = () => {
    const [products] = useContext(ProductContext);
    const {id} = useParams();
    const navigate = useNavigate();

    const temp = products.filter(product => product.id != id)
    const goback = ()=>{
        // alert("Your item is removed from the store")
        localStorage.setItem('products', JSON.stringify([...temp]));
        navigate("/")
    }

    useEffect(()=>{
        return goback();
    })

  return (
    <div className='flex flex-col  justify-center bg-gray-200 w-[30vw]  h-36 absolute left-[40vw] top-10'>
       
    </div>
  )
}

export default Delete
