import React, { useEffect, useState } from 'react'
import Food_items from './Food_items'

const FoodList = () => {

    const [foods,setFoods]=useState(null);
    const [error,setError]=useState(null);

    useEffect(()=>{
        fetch('http://localhost:3000/foods')
        .then(response =>{
            return response.json()
        })
        .then(data=>(setFoods(data)))
        .catch((error)=>{
           setError(error.message)
        })
    },[]);
    if(!foods){
        return (
          <div className='inline-block mx-auto text-center  justify-between '>
          <div className="card mx-3 p-4 inline-grid shadow-2xl rounded-xl w-80  min-h-105 max-h-105 max-w-sm bg-white">
              <div className=" p-0 w-full min-h-50 max-h-50 bg-gray-300 animate-pulse" > </div>
              <div className='m-0 w-full h-10 bg-gray-200 animate-pulse'></div>
              <div className='m-0 w-full h-10 rounded-2xl bg-gray-300 animate-pulse'></div>
              <div className=' mx-5 w-80% rounded-4xl h-20 bg-gray-300 animate-pulse'></div>
         
           </div>
           <div className="card p-4 mx-3 inline-grid gap-2 shadow-2xl rounded-xl w-80  min-h-105 max-h-105 max-w-sm bg-white">
              <div className=" p-0 w-full min-h-50 max-h-50 bg-gray-300 animate-pulse" > </div>
              <div className='m-0 w-full h-10 bg-gray-200 animate-pulse'></div>
              <div className='m-0 w-full h-10 rounded-2xl bg-gray-300 animate-pulse'></div>
              <div className=' mx-5 w-80% rounded-4xl h-20 bg-gray-300 animate-pulse'></div>
         
           </div>
           <div className="card p-4 inline-grid gap-2 shadow-2xl rounded-xl w-80  min-h-105 max-h-105 max-w-sm mx-3 bg-white">
              <div className=" p-0 w-full min-h-50 max-h-50 bg-gray-300 animate-pulse" > </div>
              <div className='m-0 w-full h-10 bg-gray-200 animate-pulse'></div>
              <div className='m-0 w-full h-10 rounded-2xl bg-gray-300 animate-pulse'></div>
              <div className=' mx-5 w-80% rounded-4xl h-20 bg-gray-300 animate-pulse'></div>
         
           </div>
            <div className="card p-4 inline-grid gap-2 shadow-2xl rounded-xl w-80  min-h-105 max-h-105 max-w-sm mx-3 bg-white">
              <div className=" p-0 w-full min-h-50 max-h-50 bg-gray-300 animate-pulse" > </div>
              <div className='m-0 w-full h-10 bg-gray-200 animate-pulse'></div>
              <div className='m-0 w-full h-10 rounded-2xl bg-gray-300 animate-pulse'></div>
              <div className=' mx-5 w-80% rounded-4xl h-20 bg-gray-300 animate-pulse'></div>
         
           </div>

           </div>
        )
    }

    const foodlist=foods.map((food)=>
    <Food_items name={food.name}
        image={food.image} 
        price={food.price} 
        hotel={food.hotel}
     />)
  return (
    <>
    {foodlist}
    </>
  );
}

export default FoodList