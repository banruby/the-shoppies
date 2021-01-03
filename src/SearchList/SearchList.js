import React from 'react';
import SearchListItem from "../SearchListItem/SearchListItem";
import SearchPreview from "../SearchPreview/SearchPreview";
import "./SearchList.scss";

const SearchList = (props) => {

    const { searchList, searchPreview, setSearchPreview, nominees, setNominees, placeholder } = props;

    const handleClick = (id) => {
        const selectedFilm = searchList.filter(film => film.imdbID === id);
        const updatedUrl = updatePosterSize(selectedFilm)
        selectedFilm[0].Poster = updatedUrl;
        setSearchPreview(selectedFilm);
        //TODO: add check to ensure there are results to display
    }

    const updatePosterSize = (data) => {
        const url = data[0].Poster;
        const updatedUrl = url.replace("300", "425");
        return updatedUrl;
    }

    return (
        <section className="searchListContainer">
            <div className="wrapper">
                <div className="col col-1">
                    <h3>Your Search Results:</h3>
                    {searchList.length > 0 &&
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
                    }
                </div>
                <div className="col col-2">
                    {searchPreview.length > 0 &&
                        <SearchPreview
                            searchPreview={searchPreview}
                            nominees={nominees}
                            setNominees={setNominees}
                            placeholder={placeholder}
                        />
                    }
                </div>

            </div>
        </section>
    )
}

export default SearchList;