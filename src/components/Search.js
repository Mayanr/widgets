import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);

    useEffect(async () => {
        // ASYNC OPTION #1 (declare a helper funtion):
        const search = async () => {
            // 'data' represents the request:
            const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: term
                }
            });
            if (term) {
                setResults(data.query.search);
            };
        }

        search();

        // ASYNC OPTION #2 (declare helper funtion and immediately invoke it):
        // (async () => {
        //     await axios.get('api-call ')
        // })();
        // ^defines a function and immediately invokes it

        // ASYNC OPTION #3 (make use of promises):
        // axios.get('api-call')
        //     .then((response) => {
        //         console.log(response.data);
        //     });

    }, [term]);
    // ^run the code any time 'term changes.

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label> Enter Search Term</label>
                    <input 
                    value={term}
                    onChange={e => setTerm(e.target.value)}
                    className="input" />
                </div>
            </div>
        </div>
    );
};

export default Search;