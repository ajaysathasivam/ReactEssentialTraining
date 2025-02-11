
import { createSlice}from "@reduxjs/toolkit"
const initialState={
    value:''
}
export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
      setValue: (state, action) => {
        console.log(action.payload)
        state.value = action.payload;
      },
    },
  });
  
  export const { setValue } = productSlice.actions;
  export default productSlice.reducer;