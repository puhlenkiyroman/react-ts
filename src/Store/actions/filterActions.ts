import {Dispatch} from "@reduxjs/toolkit";
import axios from "axios";
import {AppDispatch} from "../index";
import {filterSlice} from "../slices/filterSlice";
import {IQuote, IQuoteAuthor, IQuoteQuote} from "../../models/models";

export const fetchFilterQuotes = () => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(filterSlice.actions.fetching())
            const data =  await Promise.all([
                    axios.get<IQuoteAuthor>(`/search/authors`),
                    axios.get<IQuoteQuote>(`/search/quotes`)
                ])
            console.log(data)
            /*dispatch((quoteSlice.actions.fetchSuccess({
                    quotes: response.data.results,
                    count: response.data.count
                }
            )))*/
        } catch (e) {
        }
    }
}