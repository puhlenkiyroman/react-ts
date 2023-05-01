import React, {useEffect} from 'react';
import {useInput} from "../hooks/input";
import {useDebounce} from "../hooks/debounce";
import axios from "../axios";
import {IQuote, ServerResponse} from "../models/models";


function QuoteSearch() {

    const input = useInput('')

    const debounced = useDebounce<string>(input.value, 400)

    async function searchQuotes() {
       const response =  await axios.get<ServerResponse<IQuote>>(`https://api.quotable.io/quotes/random`, {params: {search: debounced}})
    }

    useEffect( () => {
        searchQuotes()
    }, [debounced])

    return (
        <div className="mb-4">
             <input type="text" className="border py-2 px-4 outline-0 w-full h-[42px]"
            placeholder="Type something..."
            {...input}
            />

            {/*<div className="absolute left-0 right-0 h-[200px] top-[42px] shadow-md"></div>*/}
        </div>
    );
}

export default QuoteSearch;