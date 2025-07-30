import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header flex flex-wrap'>
      <div>
       <div className="header-contents">
        <h2 className='text-l  sm:text-2xl'>Order your Healthy food here</h2>
        <p className='hidden sm:block'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae perspiciatis rerum consequuntur facere pariatur, iure amet, recusandae ducimus, enim obcaecati dolor? Recusandae dicta ea natus neque laudantium modi dignissimos ullam.</p>
        <button className='size-10% text-xs left-full top-5 absolute sm:relative sm:top-2 sm:left-0 sm:size-30% cursor-pointer '>View_Menu</button>
        </div>

       </div>
    </div>
  )
}

export default Header