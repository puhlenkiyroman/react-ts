import React, {useEffect, useRef} from 'react';
import {useDispatch} from "react-redux";
import {fetchQuotes} from "../Store/actions/quoteAllActions";
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import QuoteCard from "../components/QuoteCard";
import ReactPaginate from "react-paginate";
import QuoteSearch from "../components/QuoteSearch";

const ITEMS_PER_PAGE = 25

function MainPage() {

    const dispatch = useAppDispatch()

    const page = useRef(1)

    const {error, loading, quotes, count} = useAppSelector(state => state.quote)

    const pageCount = Math.ceil(count/ITEMS_PER_PAGE)

    const pageChangeHandler = ({selected}: {selected: number}) => {
        page.current = selected + 1
        dispatch(fetchQuotes(page.current, ITEMS_PER_PAGE))
    }

    useEffect(() => {
        dispatch(fetchQuotes(page.current, ITEMS_PER_PAGE))
    }, [dispatch])

    return (
        <div className="container lg: mx-auto max-w-[760px] pt-5 ; md:  ">

            <QuoteSearch/>

            {
                quotes.map(quote => <QuoteCard key = {quote.content} quote={quote} />)
            }

            <ReactPaginate
                breakLabel="..."
                nextLabel=">"
                onPageChange={pageChangeHandler}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="<"
                forcePage={page.current - 1}
                containerClassName="flex"
                pageClassName="py-1 px-2 border mr-2"
                previousClassName="py-1 px-2 border mr-2"
                nextClassName="py-1 px-2 border"
                activeClassName="bg-gray-500 text-white"
            />
        </div>
    );
}



export default MainPage;