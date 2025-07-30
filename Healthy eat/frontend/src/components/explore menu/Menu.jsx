import React from 'react'
import './Menu.css'
import menu_list from '../../assets/menu_list'
const menu = () => {
  return (
    <div>
        <div className="explore-menu mx-2">
          <h1 className='relative top-2 text-green-700  text-center text-2xl'>Explore our Menu</h1>
          <p className="explore-menu-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid modi rerum, eaque ducimus illum delectus dignissimos velit nihil natus. Deleniti, voluptas. Quia quis voluptate assumenda sint consequatur sapiente adipisci voluptatum!</p>
          <div className="explore-menu-list">
            {menu_list.map((item,index)=>{
               return (
                <div key={index} className="explore-menu-list-item">
                  <a onClick={()=>{}}><img src={item.menu_image} alt="" className='hover:scale-110 transition-all duration-300'/></a>
                  <p>{item.menu_name}</p>
                </div>
               )
            })}
          </div>
        </div>
    </div>
  )
}

export default menu