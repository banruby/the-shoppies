import React from 'react';
import "./SearchPreview.scss";

const SearchPreview = (props) => {

    const { searchPreview, nominees, setNominees } = props;
    
    const previewData = searchPreview[0]
    const alt = `${previewData.Title} poster`;

    return (
        <div>
            <img src={previewData.Poster} alt={alt}/>
            <p>{previewData.Title}</p>
            <p>{previewData.Year}</p>
            {
                nominees.length < 6 &&
                <button>NOMINATE</button>
            }
        </div>
    )
}

export default SearchPreview;