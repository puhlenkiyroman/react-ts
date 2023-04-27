import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {fetchQuotes} from "../Store/actions/quoteActions";
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import QuoteCard from "../components/QuoteCard";

function MainPage() {

    const dispatch = useAppDispatch()

    const {error, loading, quotes} = useAppSelector(state => state.quote)

    useEffect(() => {
        dispatch(fetchQuotes())
    }, [])

    return (
        <div className="container mx-auto max-w-[760px] pt-5">

            {
                quotes.map(quote => <QuoteCard key = {quote.content} quote={quote} />)
            }

        </div>
    );
}

export default MainPage;