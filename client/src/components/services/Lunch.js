import React from 'react'
 import { useSelector } from 'react-redux'
 import FoodCard from '../FoodCard'

function Lunch() {
   
  const food=useSelector((state)=>state.food.foods)
 console.log(food) 
  return (
    <div  style={{marginTop:"150px" ,display:"flex",flexWrap:"wrap",width:"100%"}}>

{food?.filter((el)=>el.category=="lunch").map((el)=><FoodCard food={el}/>)}
    </div>)
}

export default Lunch