import { createSlice } from '@reduxjs/toolkit';

export const dataManagementSlice = createSlice({
    name: "dataMangement",
    initialState: {
        search: "",
        sort: "",
        limit:5,
        order:'asc',
        pagination: "",
        page:1,
        status:false,
        data: []
    },
    reducers: {
        search: (state, action) => {
            state.search = action.payload;
        },
        sort: (state, action) => {
            state.sort = action.payload;
        },
        pagination: (state, action) => {
            state.pagination = action.payload;
        },
        limit: (state, action) => {
            state.limit = action.payload;
        },
        order: (state, action) => {
            state.order = action.payload;
        },
        page: (state, action) => {
            state.page = action.payload;
        },
        status: (state, action) => {
            state.status = action.payload;
        },

        data: (state, action) => {
            state.data = action.payload;
        }
    }
})

export const { search, sort, pagination, limit,order,page,status, data } = dataManagementSlice.actions;