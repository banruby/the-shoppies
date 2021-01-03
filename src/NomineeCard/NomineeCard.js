import React from 'react';

const NomineeCard = (props) => {

    const { id, title, year, poster, removeNominee, placeholder } = props;

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
                    <button onClick={() => removeNominee(id)}>REMOVE</button>
                </div>
                :
                <figure>
                    <img src={placeholder} alt="" />
                </figure>
            }
        </li>
    )
}

export default NomineeCard;