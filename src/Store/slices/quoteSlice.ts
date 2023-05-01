import {IQuote} from "../../models/models";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface QuoteState {
    loading: boolean
    error: string
    count: number
    quotes: IQuote[]
}


const initialState: QuoteState = {
    loading: false,
    error: '',
    count: 0,
    quotes: []
}

interface QuotePayload {
    quotes: IQuote[],
    count: number
}

export const quoteSlice = createSlice({
    name: 'quote',
    initialState,
    reducers: {
            fetching(state) {
                state.loading = true
            },
            fetchSuccess(state, action: PayloadAction<QuotePayload>) {
                state.loading = false
                state.quotes = action.payload.quotes
                state.count = action.payload.count
            },
            fetchError(state, action: PayloadAction<Error>) {
                state.loading = false
                state.error = action.payload.message
            }
        }
})

export default quoteSlice.reducer