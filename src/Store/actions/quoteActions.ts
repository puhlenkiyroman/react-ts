import {Dispatch} from "@reduxjs/toolkit";
import axios from "axios";
import {AppDispatch} from "../index";
import {IQuote, ServerResponse} from "../../models/models";
import {quoteSlice} from "../slices/quoteSlice";

export const fetchQuotes = () => {
    return async (dispatch: AppDispatch) => {
        try {
            const response =  await axios.get<ServerResponse<IQuote>>('https://api.quotable.io/quotes')
            dispatch((quoteSlice.actions.fetchSuccess(
                response.data.results
            )))
        } catch (e) {
            dispatch(quoteSlice.actions.fetchError(e as Error))
        }
    }
}