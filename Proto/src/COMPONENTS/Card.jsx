import React, { useContext } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import { ProductContext } from './UTILS/Context'
import Loading from './Loading';

const Card = ({item}) => {
    return(
        <Link key={item.id} to={`/details/${item.id}`} className='mt-5 ml-2 bg-zinc-100 flex flex-col items-center h-64 w-64'>
            <div className='my-5 h-[50%] w-[80%] bg-zinc-100 hover:scale-110'>
                <img className='h-full w-full object-cover' src={item.image} alt="" />
            </div>
            <h1 className='h-[50%] w-[100%] flex items-center hover:text-blue-500'>{item.title}</h1>
        </Link>
    )
}

export default Card
