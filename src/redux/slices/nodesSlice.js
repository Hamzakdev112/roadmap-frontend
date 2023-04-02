import { createSlice } from "@reduxjs/toolkit";


const nodesSlice = createSlice({
    name:'Nodes',
    initialState:{
        isFetching:false,
        error:null,
        allNodes:null,
    },
    reducers:{
        getAllNodesStart:(state, action)=>{
            state.isFetching = true;
        },
        getAllNodesSuccess:(state, action)=>{
            state.isFetching = false;
            state.allNodes = action.payload;
            state.error = null
        },
        getAllNodesFailure:(state, action)=>{
            state.isFetching = false;
            state.error = action.payload;
        },
    }

})
export const {getAllNodesStart, getAllNodesSuccess,getAllNodesFailure} = nodesSlice.actions
export default nodesSlice.reducer