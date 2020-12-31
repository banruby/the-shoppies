import React, { useEffect } from 'react';
import SearchListItem from "../SearchListItem/SearchListItem";
import SearchPreview from "../SearchPreview/SearchPreview";
import "./SearchList.scss";

const SearchList = (props) => {

    const { searchList, searchPreview, setSearchPreview, nominees, setNominees } = props;

    const handleClick = (id) => {
        const selectedFilm = searchList.filter(film => film.imdbID === id);
        setSearchPreview(selectedFilm);
        console.log(selectedFilm);
        // i think i need a check here to see if there are actual results to display
    }

    console.log(searchPreview.length);

    return (
        <section className="wrapper searchListContainer">
            <div className="half">
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
            <div className="half">
                {searchPreview.length > 0 &&
                    <SearchPreview
                        searchPreview={searchPreview}
                        nominees={nominees}
                        setNominees={setNominees}
                    />
                }
            </div>
        </section>
    )
}

export default SearchList;