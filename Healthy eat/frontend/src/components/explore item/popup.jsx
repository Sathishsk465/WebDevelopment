import React from 'react'


const popup=(props)=> {
  return (
        <div>
           <div className="bg-black opacity-70 absolute w-full h-full left-0 top-0 block"></div>
        <div className="bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
               <p>hi from popup</p>
               <img src={props.image} alt="" className='w-50 h-50' />
        </div>
    </div>
  )
}

export default popup



