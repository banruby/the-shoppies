import React from 'react';
import "./NomineeCard.scss";

const NomineeCard = (props) => {

    const { id, title, year, poster, removeNominee, placeholder } = props;

    const alt = `${title} poster`;

    return (
        <li>
            {
                id ?
                <div>
                    <figure>
                        <img src={poster} alt={alt} />
                        <figcaption>{title} - {year}</figcaption>
                    </figure>
                    <button onClick={() => removeNominee(id)}>REMOVE</button>
                </div>
                :
                <figure>
                    <img src={placeholder} alt="placeholder" />
                </figure>
            }
        </li>
    )
}

export default NomineeCard;