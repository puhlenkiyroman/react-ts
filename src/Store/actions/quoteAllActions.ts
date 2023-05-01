import {Dispatch} from "@reduxjs/toolkit";
import axios from "axios";
import {AppDispatch} from "../index";
import {IQuote, ServerResponse} from "../../models/models";
import {quoteSlice} from "../slices/quoteSlice";

export const fetchQuotes = (page = 1, count = 25) => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(quoteSlice.actions.fetching())
            const response =  await axios.get<ServerResponse<IQuote>>(`https://api.quotable.io/quotes?limit=500`,{
                params: {page, count}
            })
            dispatch((quoteSlice.actions.fetchSuccess({
                quotes: response.data.results,
                count: response.data.count
            }
            )))
        } catch (e) {
            dispatch(quoteSlice.actions.fetchError(e as Error))
        }
    }
}