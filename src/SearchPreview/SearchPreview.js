import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilm, faCalendarAlt } from '@fortawesome/free-solid-svg-icons'

const SearchPreview = (props) => {

    const { searchPreview, nominees, setNominees, placeholder, removeNominee } = props;
    
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
    const nomsRemaining = 5 - userChoices.length;
    console.log(nomsRemaining)

    const filmIcon = <FontAwesomeIcon icon={faFilm} className="icon filmIcon"/>
    const calendarIcon = <FontAwesomeIcon icon={faCalendarAlt} className="icon calendarIcon" />

    return (
        <div>
            <img src={previewData.Poster} alt={alt}/>
            <p><span className="heading">Title:</span> {previewData.Title}</p>
            <p><span className="heading">Year:</span> {previewData.Year}</p>
            {
                userChoices.length < 5 && duplicateCheck.length === 0 &&
                <button className="primary" onClick={addNominee}>NOMINATE</button>
            }
            <div className="warnings">
                {
                    duplicateCheck.length > 0 &&
                    <button className="primary" onClick={() => removeNominee(previewData.imdbID)}>NOMINATED</button>
                }
                {
                    nomsRemaining === 1 
                    ? <p>You have <span className="nomRemaining">{nomsRemaining}</span> nomination remaining.</p>
                    : <p>You have <span className="nomRemaining">{nomsRemaining}</span> nominations remaining.</p>
                }
            </div>
        </div>
    )
}

export default SearchPreview;