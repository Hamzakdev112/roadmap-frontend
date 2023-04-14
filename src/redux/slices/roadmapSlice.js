import { createSlice } from "@reduxjs/toolkit";
const roadmapSlice = createSlice({
    name:'Roadmap',
    initialState:{
        isFetching:false,
        error:null,
        allRoadmaps:null,
    },
    reducers:{
        getAllRoadmapsStart:(state, action)=>{
            state.isFetching = true;
        },
        getAllRoadmapsSuccess:(state, action)=>{
            state.isFetching = false;
            state.allRoadmaps = action.payload;
            state.error = null
        },
        getAllRoadmapsFailure:(state, action)=>{
            state.isFetching = false;
            state.error = action.payload;
        },
    }

})
export const {getAllRoadmapsStart, getAllRoadmapsSuccess,getAllRoadmapsFailure} = roadmapSlice.actions
export default roadmapSlice.reducer