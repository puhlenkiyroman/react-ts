import {combineReducers, configureStore} from "@reduxjs/toolkit";
import quoteReducer from "./slices/quoteSlice"
import filterReducer from "./slices/filterSlice"

const rootReducer = combineReducers({
    quote: quoteReducer,
    filter: filterReducer
})

export function setupStore() {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']