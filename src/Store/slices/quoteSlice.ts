import {IQuote} from "../../models/models";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface QuoteState {
    loading: boolean
    error: string
    quotes: IQuote[]
}


const initialState: QuoteState = {
    loading: false,
    error: '',
    quotes: []
}

export const quoteSlice = createSlice({
    name: 'quote',
    initialState,
    reducers: {
            fetching(state) {
                state.loading = true
            },
            fetchSuccess(state, action: PayloadAction<IQuote[]>) {
                state.loading = false
                state.quotes = action.payload
            },
            fetchError(state, action: PayloadAction<Error>) {
                state.loading = false
                state.error = action.payload.message
            }
        }
})

export default quoteSlice.reducer