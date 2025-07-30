import React, { useContext } from 'react'
import { storeContext } from '../../context/storecontex'
import FoodList from '../explore item/foodlist'

const FoodDisplay = ({category}) => {

const {menu_list} = useContext(storeContext)

  return (
    <div id='food-display'>
     <h2>top dishes near you</h2>
     <div>
        {FoodList.map((item,index)=>{
            return <Food_items key={index} id={item.id} name={item.name} description={item.price}/>
        })}
     </div>
    </div>
  )
}

export default FoodDisplay