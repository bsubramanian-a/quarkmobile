import { configureStore } from '@reduxjs/toolkit'
import authReducer from "./src/slices/auth";
//import messageReducer from "./slices/message";

const reducer = {
  auth: authReducer,
  //message: messageReducer
}

const store = configureStore({
  reducer: reducer,
  devTools: true,
})

export default store;