import React from 'react';
import clapper from "../assets/clapper.png";

const NomineeCard = (props) => {

    const { id, title, year, poster, removeNominee } = props;
    const alt = `${title} poster`;

    return (
        <li>
            {
                id ?
                <div className="figureContainer">
                    {
                        (poster !== "N/A") && 
                        <figure>
                            <img src={poster} alt={alt} />
                            <figcaption>{title} ({year})</figcaption>
                        </figure>
                    }
                    {
                        (poster === "N/A") &&
                        <figure>
                            <img className="clapper" src={clapper} alt="" />
                            <figcaption>{title} ({year})</figcaption>
                        </figure>
                    }
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