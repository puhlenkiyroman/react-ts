import {IQuote, IQuoteAuthor, IQuoteQuote} from "../../models/models";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface FilterState {
    loading: boolean
    quotesQuotes: IQuoteQuote[]
    authors: IQuoteAuthor[]
}


const initialState: FilterState = {
    loading: false,
    quotesQuotes: [],
    authors:[]
}

interface FilterQuotePayload {
    quotes: IQuote[],
    count: number
}

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        fetching(state) {
            state.loading = true
        },
        fetchSuccess(state, action: PayloadAction<FilterQuotePayload>) {
            state.loading = false/*
            state.quotesQuotes = action.payload.quotes*/
        }
    }
})

export default filterSlice.reducer