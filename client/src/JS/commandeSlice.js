import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const commandeAdd = createAsyncThunk("commande/add", async (commande) => {
  try {
    let result = axios.post("http://localhost:5001/commande/add", commande);
    return result;
  } catch (error) {
    console.log(error);
  }
});
export const commandeGet = createAsyncThunk("commande/get", async () => {
  try {
    let result = axios.get("http://localhost:5001/commande/");
    return result;
  } catch (error) {
    console.log(error);
  }
});

export const commandeDelete = createAsyncThunk("commande/delete", async (id) => {
  try {
    let result = axios.delete(`http://localhost:5001/commande/${id}`);
    return result;
  } catch (error) {
    console.log(error);
  }
});
export const  commandeUpdate = createAsyncThunk(
  "commande/update",
  async ({ id, commande }) => {
    try {
      let response = await axios.put(`http://localhost:5001/commande/${id}`, commande);
      return response;
    } catch (error) {
      console.log(error);
    }
  }
);



const initialState = {
    commandes: null,
  status: null,
};
export const commandeSlice = createSlice({
  name: "commande",
  initialState,
  reducers: {},
  extraReducers: {
    [commandeAdd.pending]: (state) => {
      state.status = "pending";
    },
    [commandeAdd.fulfilled]: (state) => {
      state.status = "succcessssss";
    },
    [commandeAdd.rejected]: (state) => {
      state.status = "fail";
    },

    [commandeGet.pending]: (state) => {
      state.status = "pending";
    },
    [commandeGet.fulfilled]: (state, action) => {
      state.status = "success";
      state.commandes = action.payload.data.commandes;
    },
    [commandeGet.rejected]: (state) => {
      state.status = "fail";
    },
    [commandeDelete.pending]: (state) => {
      state.status = "pending";
    },
    [commandeDelete.fulfilled]: (state) => {
      state.status = "success";
    },
    [commandeDelete.rejected]: (state) => {
      state.status = "fail";
    },
    [commandeUpdate.pending]: (state) => {
      state.status = "pending";
    },
    [commandeUpdate.fulfilled]: (state) => {
      state.status = "success";
    },
    [commandeUpdate.rejected]: (state) => {
      state.status = "fail";
    },
  },
});

// Action creators are generated for each case reducer function
// export const { logout } = storiesSlice.actions;

export default commandeSlice.reducer;