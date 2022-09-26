
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

      export const clientRegister = createAsyncThunk("client/register", async(client) =>{
    try {
        let response = await axios.post("http://localhost:5001/client/register",
        client
        );
        return await response;
    }catch (error){
        console.log(error);
    }
});

export const clientLogin = createAsyncThunk("client/login", async (client) => {
  try {
    let response = await axios.post("http://localhost:5001/client/login", client);
    return await response;
  } catch (error) {
    console.log(error);
  }});

  export const clientCurrent = createAsyncThunk("client/current", async () => {
    try {
      let response = await axios.get("http://localhost:5001/client/current", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
      return  response;
    } catch (error) {
      console.log(error);
    }
  });


const initialState = {
  client: null,
  status: null,
};
export const clientSlice = createSlice({
  name: "client",
  initialState,
  reducers: {
    logout: (state, action) => {
      state.client = null;
      localStorage.removeItem("token");
    },
  },
  

  extraReducers: {
    //clientregister
    [clientRegister.pending]: (state) => {
      state.status = "pending";
    },
    [clientRegister.fulfilled]: (state, action) => {
      state.status = "succcessssss";
      state.client = action.payload.data.newClientToken;
      localStorage.setItem("token", action.payload.data.token);
    },
    [clientRegister.rejected]: (state) => {
      state.status = "fail";
    },
//clientlogin
  [clientLogin.pending]: (state) => {
    state.status = "pending";
  },
  [clientLogin.fulfilled]: (state, action) => {
    state.status = "succcess";
    state.client = action.payload.data.client;
    localStorage.setItem("token", action.payload.data.token);
  },
  [clientLogin.rejected]: (state) => {
    state.status = "fail";
  },
  //clientcurrent
  [clientCurrent.pending]: (state) => {
    state.status = "pending";
  },
  [clientCurrent.fulfilled]: (state, action) => {
    state.status = "succcess";
    state.client = action.payload?.data.req;
  },
  [clientCurrent.rejected]: (state) => {
    state.status = "fail";
  },
  
}})


  


// Action creators are generated for each case reducer function
//export const { increment, decrement, incrementByAmount } = clientSlice.actions;


export default clientSlice.reducer