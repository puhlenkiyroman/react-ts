export interface IQuote {
    _id: string;
    content: string;
    author: string;
    authorSlug: string;
    length: number;
    tags?: string[];
}

export interface ServerResponse<T> {
    count: number
    next: number
    previous: number
    results: T[]
}

export type IQuoteQuote = string
export type IQuoteAuthor = string