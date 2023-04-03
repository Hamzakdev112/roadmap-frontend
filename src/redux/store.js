import { configureStore, combineReducers } from '@reduxjs/toolkit'
import nodesReducer from './slices/nodesSlice'
import roadmapReducer from './slices/roadmapSlice'
const rootReducer = combineReducers({
    nodes:nodesReducer,
    roadmap:roadmapReducer
})

export const store = configureStore({
    reducer:rootReducer
})