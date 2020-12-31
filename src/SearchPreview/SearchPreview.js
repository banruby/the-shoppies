import React, { useState } from 'react';
import "./SearchPreview.scss";

const SearchPreview = (props) => {

    const { searchPreview, nominees, setNominees, placeholder } = props;
    
    const previewData = searchPreview[0]
    const alt = `${previewData.Title} poster`;

    const addNominee = () => {
        let updatedNominees = [...nominees];
        updatedNominees = updatedNominees.filter(nominee => nominee.imdbID);
        updatedNominees.push(searchPreview[0]);
        for (let i = updatedNominees.length + 1; i < 6; i++) {
            updatedNominees.push(placeholder);
        }
        setNominees(updatedNominees);
    }

    const userChoices = nominees.filter(nominee => nominee.imdbID)
    const duplicateCheck = userChoices.filter(nominee => nominee.imdbID === previewData.imdbID)

    console.log(userChoices)

    return (
        <div>
            <img src={previewData.Poster} alt={alt}/>
            <p>{previewData.Title}</p>
            <p>{previewData.Year}</p>
            {
                userChoices.length < 5 && duplicateCheck.length === 0 &&
                <button onClick={addNominee}>NOMINATE</button>
            }
            {
                userChoices.length > 4 &&
                <p>You've filled up your nominations!</p>
            }
            {
                duplicateCheck.length > 0 &&
                <p>You've already chosen this film!</p>
            }
        </div>
    )
}

export default SearchPreview;