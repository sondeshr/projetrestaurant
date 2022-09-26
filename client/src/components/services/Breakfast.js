import React from 'react'
 import { useSelector } from 'react-redux'
 import FoodCard from '../FoodCard'

function Breakfast() {
   
  const food=useSelector((state)=>state.food.foods)
 console.log(food) 
  return (
    <div  style={{marginTop:"150px" ,display:"flex",flexWrap:"wrap",width:"100%"}}>

{food?.filter((el)=>el.category=="breakfast").map((el)=><FoodCard food={el}/>)}
    </div>)
}

export default Breakfast