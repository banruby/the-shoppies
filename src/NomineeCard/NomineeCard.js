import React from 'react';

const NomineeCard = (props) => {

    const { id, title, year, poster, removeNominee } = props;
    const alt = `${title} poster`;

    return (
        <li>
            {
                id ?
                <div className="figureContainer">
                    <figure>
                        <img src={poster} alt={alt} />
                        <figcaption>{title} ({year})</figcaption>
                    </figure>
                    <button className="primary" onClick={() => removeNominee(id)}>REMOVE</button>
                </div>
                :
                <div className="figureContainer">
                    <div className="trophy"></div>
                </div>                
            }
        </li>
    )
}

export default NomineeCard;