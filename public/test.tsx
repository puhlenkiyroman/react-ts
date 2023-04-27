import React, { Component } from 'react';
import axios, { AxiosResponse } from 'axios';

interface Quote {
    _id: string;
    content: string;
    author: string;
}

interface AppState {
    quotes: Quote[];
}

class App extends Component<{}, AppState> {
    state = {
        quotes: [],
    }

    componentDidMount() {
        axios.get('https://api.quotable.io/quotes')
            .then((response: AxiosResponse<{ results: Quote[] }>) => {
                this.setState({ quotes: response.data.results });
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        const { quotes } = this.state;

        return (
            <div>
                <h1>All Quotes</h1>
                {quotes.map(({_id, author, content}) => (
                    <div key={_id}>
                        <p>{content}</p>
                        <p>Author: {author}</p>
                    </div>
                ))}
            </div>
        );
    }
}

export default App;