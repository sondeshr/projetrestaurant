import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios";
export const getfood=createAsyncThunk("food/get",async()=>{
  try {
    let result=axios.get("http://localhost:5001/food/");
    return result;
  } catch (error) {
    console.log(error)
  }
})
export const addfood=createAsyncThunk("food/add",async(food)=>{
  try {
    let result=axios.post("http://localhost:5001/food/add",food);
    return result;
  } catch (error) {
    console.log(error)
  }
})
export const deletefood=createAsyncThunk("food/delete",async(id)=>{
  try {
    let result=axios.delete(`http://localhost:5001/food/${id}`);
    return result;
  } catch (error) {
    console.log(error)
  }
})
export const updatefood=createAsyncThunk("food/update",async({id,edited})=>{
  try {
    let result=axios.put(`http://localhost:5001/game/${id}`,edited);
    return result;
  } catch (error) {
    console.log(error)
  }
})
const initialState = {
 foods:null,
 status:null,
}

export const foodSlice = createSlice({
  name: 'food',
  initialState,
  reducers: {},
  extraReducers:{
    [getfood.pending]:(state)=>{
      state.status="pending";
    },
    [getfood.fulfilled]:(state,action)=>{
      state.status="fullfilled";
      state.foods=action.payload.data.food;
    },
    [getfood.rejected]:(state)=>{
      state.status="rejected";
    },
    [addfood.pending]:(state)=>{
      state.status="pending";
    },
    [addfood.fulfilled]:(state)=>{
      state.status="fullfilled";
     
    },
    [addfood.rejected]:(state)=>{
      state.status="rejected";
    },
    [deletefood.pending]:(state)=>{
      state.status="pending";
    },
    [deletefood.fulfilled]:(state)=>{
      state.status="fullfilled";
     
    },
    [deletefood.rejected]:(state)=>{
      state.status="rejected";
    },
    [updatefood.pending]:(state)=>{
      state.status="pending";
    },
    [updatefood.fulfilled]:(state)=>{
      state.status="fullfilled";
     
    },
    [updatefood.rejected]:(state)=>{
      state.status="rejected";
    },
  },
})

// Action creators are generated for each case reducer function
export const {  } = foodSlice.actions

export default foodSlice.reducer