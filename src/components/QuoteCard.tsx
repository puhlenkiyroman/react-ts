import React from 'react';
import {IQuote} from "../models/models";

interface QuoteCardProps {
    quote: IQuote
}

function QuoteCard({ quote }: QuoteCardProps ) {
    return (
        <div>
            {quote.author + ": "}
            {quote.content}
        </div>
    );
}

export default QuoteCard;