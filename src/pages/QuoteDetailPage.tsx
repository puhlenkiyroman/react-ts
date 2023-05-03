import React, {useState} from 'react';
import {useParams} from "react-router-dom";

function QuoteDetailPage() {

    const params = useParams<'id'>()

    return (
        <div className="container mx-auto pt-5 max-w-[760px]">
            <h1>Quote {params.id}</h1>
        </div>
    );
}

export default QuoteDetailPage;