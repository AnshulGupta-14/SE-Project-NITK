import React from 'react'
import Card from './Card'

const Cards = ({data}) => {
  return (
    <div className='w-[97%] mx-auto gap-[18.5px] flex flex-wrap items-center pt-10'>
        {data.map((item, index) => (
          <Card key={index} data={item}></Card>
        ))}
    </div>
  )
}

export default Cards