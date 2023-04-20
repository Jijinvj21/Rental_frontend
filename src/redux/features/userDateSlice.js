import { createSlice } from '@reduxjs/toolkit';


export const userDataSlice = createSlice({
    name: "userDataSlice",
    initialState: {
        from:'',
        to:''
    },
    reducers: {
        from: (state, action) => {
                state.from = action.payload;
          
        },
        
        to: (state, action) => {
        state.to = action.payload;
       
        
       

        }}
})

export const { from, to } = userDataSlice.actions;







