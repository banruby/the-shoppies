import React, { useState } from 'react';
import "./SearchBar.scss";

const SearchBar = (props) => {

    // destructuring the props
    const { searchTitle, setSearchTitle, searchApi, setSearchPreview } = props;
    // holding the search value as it's typed in state
    const [inputValue, setInputValue] = useState('');

    const searchSubmit = (e) => {
        e.preventDefault();
        if (inputValue.length > 0) {
            setSearchTitle(inputValue);
            setInputValue('');
            searchApi(inputValue);
        }
    }

    return (
        <div className="wrapper">
            <form onSubmit={searchSubmit}>
                <label className="visibilityHidden">
                    Search:
                <input 
                    type="text" 
                    placeholder={"find your faves..."} 
                    value={inputValue} 
                    onChange={(e) => setInputValue(e.target.value)}
                />
                </label>
                <input type="submit" value="Submit" />
            </form>
            <p>Search by title to find your Shoppie nominees!</p>
        </div>
    )
}

export default SearchBar;