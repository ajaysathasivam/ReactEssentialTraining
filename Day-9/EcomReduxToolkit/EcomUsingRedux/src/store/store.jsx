import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Cart/cartSlice";
import { combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  cart: cartReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Step 4: Create the store with the persisted reducer
export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
// export const store = configureStore({
//     reducer:{
//         cart:cartReducer,

//     }
// })
