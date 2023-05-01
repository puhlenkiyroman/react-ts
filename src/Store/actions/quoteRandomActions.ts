export {};
/*import {Dispatch} from "@reduxjs/toolkit";
import axios from "axios";
import {AppDispatch} from "../index";
import {IQuote, ServerResponse} from "../../models/models";
import {quoteSlice} from "../slices/quoteSlice";

export const fetchRandomQuotes = () => {
    return async (dispatch: AppDispatch) => {
        try  {
            const response = await axios.get<IQuote>('https://api.quotable.io/quotes/random');
            const quote = response.data;
            dispatch(quoteSlice.actions.fetchSuccess([quotes]));
        } catch (e) {
            dispatch(quoteSlice.actions.fetchError(e as Error));
        }
    }*/
