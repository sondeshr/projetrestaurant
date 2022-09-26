import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import FoodCard from './FoodCard'

function Food() {
 
    const acc= useSelector((state=>state.food.foods))
 
  return (
    <div style={{
      width:'100%',
      display:'flex',
flexWrap:'wrap',
justifyContent:'space-around',
marginTop:"130px"
    }}>{acc?acc.map((el)=><FoodCard  food={el}/>): <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921" />}</div>
  )
}

export default Food 