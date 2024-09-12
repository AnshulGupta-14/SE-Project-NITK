import React, { useContext, useEffect } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import { ProductContext } from './UTILS/Context'
import Loading from './Loading';
import Card from './Card'


const Home = () => {
  const [products,setProducts] = useContext(ProductContext);
  const {search} = useLocation();
  const category = decodeURIComponent(search.split("=")[1]);
  let filteredProducts = products && products.filter((item)=>item.category === category);
  if(category === "undefined")  filteredProducts = products; 

  useEffect(()=>{
    setProducts(products);
  },[products])
    
  return filteredProducts ? (
      <div className='w-[71vw]  max-h-screen flex flex-wrap overflow-y-auto'>
          {filteredProducts.map((item,idx)=><Card key={idx} item={item}></Card>)}
      </div> 
  ) : (
    <Loading></Loading>
  );
}

export default Home
