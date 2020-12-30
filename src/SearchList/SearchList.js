import React, { useState } from 'react';
import SearchListItem from "../SearchListItem/SearchListItem";
import "./SearchList.scss";

const SearchList = (props) => {

    const { searchList, setSearchPreview } = props;

    const handleClick = (id) => {
        const selectedFilm = searchList.filter(film => film.imdbID === id);
        setSearchPreview(selectedFilm);
        console.log(selectedFilm);
    }

    return (
        <section className="wrapper searchListContainer">
            <div className="half">
                <ul>
                    { searchList.map((film) => {
                        return (
                            <SearchListItem
                                key={film.imdbID}
                                id={film.imdbID}
                                title={film.Title}
                                year={film.Year}
                                handleClick={handleClick}
                            />
                        )})
                    }
                </ul>
            </div>
            <div className="half">

            </div>
        </section>
    )
}

export default SearchList;