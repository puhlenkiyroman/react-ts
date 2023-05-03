import React, {useEffect, useState} from 'react';
import {useInput} from "../hooks/input";
import {useDebounce} from "../hooks/debounce";
import axios from "../axios";
import {IQuote, ServerResponse} from "../models/models";
import {useNavigate} from "react-router-dom";


function QuoteSearch() {

    const navigate = useNavigate()

    const input = useInput('')

    const [dropdown, setDropdown] = useState(false)

    const [quotes, setQuotes] = useState<IQuote[]>([])

    const debounced = useDebounce<string>(input.value, 400)

    const [filterType, setFilterType] = useState<string>(''); /* может принимать значение 'author' или 'tag'*/

    const [filterValue, setFilterValue] = useState<string>('');


    async function searchQuotes() {
        const params: any = {
            limit: 500,
            search: debounced,
            count: 10,
        };

        if (filterType === 'author') {
            params.author = filterValue;
        } else if (filterType === 'tag') {
            params.tag = filterValue;
        }

        const response = await axios.get<ServerResponse<IQuote>>('https://api.quotable.io/quotes', {
            params,
        });

        const filteredQuotes = response.data.results.filter((quote) => {

            const authorMatch = quote.author.toLowerCase().includes(debounced.toLowerCase());

            const tagsMatch = quote.tags?.some((tag) => tag.toLowerCase().includes(debounced.toLowerCase()));

            const contentMatch = quote.content.toLowerCase().includes(debounced.toLowerCase());

            return authorMatch || tagsMatch || contentMatch;
        });

        setQuotes(filteredQuotes);
    }

    useEffect( () => {
        if (debounced.length > 3) {
            searchQuotes().then(()=> setDropdown(true))
        }
        else {
            setDropdown(false)
        }
        console.log('debounced', debounced)
    }, [debounced])

    const [selectedButton, setSelectedButton] = useState(false);

    function handleFilterByAuthor() {
        setFilterType('author');
        setFilterValue(input.value);
        setSelectedButton(true);
    }

    function handleFilterByTag() {
        setFilterType('tag');
        setFilterValue(input.value);
        setSelectedButton(true);
    }

    function handleFilterByWord() {
        setFilterType('tag');
        setFilterValue(input.value);
        setSelectedButton(true);
    }

    return (
        <div className="mb-4 relative" onClick={() => setDropdown(false)}>
            <div>
                <button onClick={handleFilterByAuthor} className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border
                border-gray-400 rounded shadow hover: black  focus:outline-none focus:black focus:border-b-gray-600 mr-2" >
                    Фильтр по автору
                </button>

                <button onClick={handleFilterByTag} className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border
                border-gray-400 rounded shadow hover: black focus:outline-none focus:black focus:border-b-gray-600 mr-2" >
                    Фильтр по тэгу
                </button>

                <button onClick={handleFilterByWord} className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border
                border-gray-400 rounded shadow hover: black  focus:outline-none focus:black focus:border-b-gray-600 mr-2" >
                    Фильтр по слову
                </button>

            </div>

            <input
                type="text"
                className="mt-3 border py-2 px-4 outline-0 w-full h-[42px] hover: black  focus:outline-none focus:black focus:border-b-gray-600"
                placeholder="Type something..."
                {...input}
            />

            {dropdown && (
                <ul className="list-none absolute left-0 right-0 max-h-[200px] top-[42px] shadow-md bg-white overflow-y-scroll z-10 ">
                    {quotes.map((quote) => (
                        <li
                            key={quote._id}
                            onClick={() => navigate(`/quote/${quote.content}`)}
                            className="py-2 px-4 mb-2 hover:bg-gray-400 hover:transition-colors cursor-pointer hover:text-white"
                        >
                            {quote.author}:
                            {quote.content}
                        </li>
                    ))}
                    {quotes.length === 0 && <li>No quotes found</li>}
                </ul>
            )}
        </div>
    );
}

export default QuoteSearch;