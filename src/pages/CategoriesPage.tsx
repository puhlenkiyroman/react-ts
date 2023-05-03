import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import QuoteCard from "../components/QuoteCard";
/*import {fetchRandomQuotes} from "../Store/actions/quoteRandomActions";*/
import {fetchQuotes} from "../Store/actions/quoteAllActions";

function CategoriesPage() {

    const dispatch = useAppDispatch()

    const {quotes} = useAppSelector(state => state.quote)

   useEffect(() => {
        dispatch(fetchQuotes());
    }, []);

    useEffect(() => {
        console.log('Quotes have been updated:', quotes);
    }, [quotes]);

    return (
        <div className="container mx-auto max-w-[760px] pt-5">
            {quotes.map(quote => <QuoteCard key={quote._id} quote={quote} />)}
        </div>
    );
}

export default CategoriesPage;

