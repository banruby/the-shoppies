import React, { useState } from 'react';
import "./SearchBar.scss";

const SearchBar = (props) => {

    const { searchApi, callStatus } = props;
    const [inputValue, setInputValue] = useState(''); // holding the search value as it's typed in state

    const searchSubmit = (e) => {
        e.preventDefault();
        if (inputValue.length > 0) {
            searchApi(inputValue);
            setInputValue('');
        }
    }

    return (
        <section className="searchBar">
            <div className="wrapper">
                <p>Search by film title below to nominate your all-time favourites for the 2021 Shoppie Awards!</p>
                <form onSubmit={searchSubmit}>
                    <input
                        type="text"
                        placeholder={"search by film title"}
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        aria-label="Search by film title"
                    />
                    <input type="submit" value="SEARCH" />
                </form>
                {
                    callStatus === "False" && 
                    <p className="error">Your search did not return any results. Try another film title!</p>
                }
            </div>
        </section>
    )
}

export default SearchBar;