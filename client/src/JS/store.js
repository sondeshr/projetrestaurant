import { configureStore } from '@reduxjs/toolkit'


import clientSlice from './clientSlice/clientSlice'
import commandeSlice from './commandeSlice'
import foodSlice from './foodSlice'


export const store = configureStore({
  reducer: {
client: clientSlice,
food:foodSlice,

commande:commandeSlice,

  },
})