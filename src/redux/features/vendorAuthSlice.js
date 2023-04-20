import { createSlice } from '@reduxjs/toolkit';

export const vendorAuthSlice = createSlice({
    name: "vendorAuthSlice",
    initialState: {
        token:'',
        tokenVerified:''
    },
    reducers: {
        token: (state, action) => {
            state.token = action.payload;
        },
        tokenVerified: (state, action) => {
            state.tokenVerified = action.payload;
        }
    
    }
})

export const { token,tokenVerified} = vendorAuthSlice.actions;