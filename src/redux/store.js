import { configureStore, combineReducers } from '@reduxjs/toolkit'
import nodesReducer from './slices/nodesSlice'
const rootReducer = combineReducers({
    nodes:nodesReducer
})

export const store = configureStore({
    reducer:rootReducer
})